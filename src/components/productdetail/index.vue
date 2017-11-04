<template>
  <div>
    <my-header content="钢琴详情"></my-header>
    <swiper :list="data.otherImgs" class="pt-detail-swiper"></swiper>
    <div class="pt-detail">
      <p class="title" v-text="data.pianoName"></p>
      <div class="flexbox">
        <span class="s1">租赁方式：</span>
        <div class="flex-ite2 s2">
          <span :class="{'cur':leaseType===1}" @click="choose(1)">长租</span>
          <span :class="{'cur':leaseType===0}" @click="choose(0)">短租</span>
        </div>
      </div>
      <div class="flexbox">
        <span class="s1">租赁时长：</span>
        <div class="flex-item s2">
          <span :class="{'cur':leaseNum===item.dicValue}" v-for="item in rentList" :key="item.dicValue" v-text="item.dicName" @click="selectRentTime(item)"></span>
        </div>
      </div>
      <div class="flexbox">
        <span class="s2 txt-line">原价押金：</span>
        <span class="flex-item s2 txt-line">
          <em>¥</em>{{data.marketPrices|ToThousands}}</span>
      </div>
      <div class="flexbox">
        <span class="s1">现价押金：</span>
        <span class="flex-item s1">
          <em>¥</em>{{deposit|ToThousands}}</span>
        </span>
      </div>
      <div class="flexbox">
        <span class="s2 txt-line">原价租金：</span>
        <span class="flex-item s2 txt-line">
          <em>¥</em>{{oldRent*leaseNum*benfit[leaseNum]|ToThousands}}</span>
      </div>
      <div class="flexbox">
        <span class="s1">现价租金：</span>
        <span class="flex-item s1">
          <em>¥</em>{{rent*leaseNum*benfit[leaseNum]|ToThousands}}</span>
      </div>
      <div class="flexbox">
        <span class="s1">预付款：</span>
        <span class="flex-item s1 txt-red">
          <em>¥</em>{{data.downPayment|ToThousands}}</span>
      </div>
      <div class="flexbox">
        <span class="s1" style="line-height: .64rem;">押金+租金：</span>
        <span class="flex-item total-price">
          <em>¥</em>{{deposit+rent*leaseNum*benfit[leaseNum]|ToThousands}}</span>
        </span>
      </div>
      <div class="flexbox">
        <span class="s3">运费：</span>
        <div class="flex-item s3">
          <span>根据配送距离收取不同费用</span>
          <span class="s4">（同城免运费）</span>
        </div>
      </div>
      <div class="flexbox">
        <span class="s3">押金：</span>
        <div class="flex-item s3">
          <span>线上预付总押金的</span>
          <span style="color:#bf3737">20%</span>
          <span>,钢琴送到后，再付剩余押金</span>
        </div>
      </div>
      <div class="flexbox">
        <span class="s4">附加服务：</span>
        <span class="flex-item s4">该商品提供一次免费的上门调律与免费上门维修</span>
      </div>
    </div>
    <div class="pt-info" v-html="data.pianoIntro">
    </div>
    <div class="more">
    </div>
    <div class="footer-action">
      <a class="act-tel" @click="tel">在线电话</a>
      <a class="action" @click="submit">立即租赁</a>
      <a class="act-collect" :class="{'act-collected':isCollect==='Y'}" @click="collect"></a>
    </div>
    <tel-dialog v-model="show"></tel-dialog>
  </div>
</template>
<script>
import Swiper from '../base/swiper'
import http from '@/libs/httpUtil'
import MyHeader from '@/components/header'
import TelDialog from './dialog'
import storage from '@/libs/storage'
export default {
  name: 'product-detail',
  components: {
    Swiper,
    MyHeader,
    TelDialog
  },
  computed: {
    deposit() {
      if (this.leaseType === 1) {
        return this.data.longTermDeposit
      } else {
        return this.data.shortTermDeposit
      }
    },
    rent() {
      if (this.leaseType === 1) {
        return this.data.longRentActive
      } else {
        return this.data.shortRentActive
      }
    },
    oldRent() {
      if (this.leaseType === 1) {
        return this.data.longRentOld
      } else {
        return this.data.shortRentOld
      }
    }
  },
  mounted() {
    document.title = '钢琴详情'
  },
  created() {
    let id = this.$store.state.route.query.id
    if (id) {
      this.id = id
      http.getPianoInfo(id).then(res => {
        if (res.errNo == 0) {
          this.data = res.data
          let longNum = this.data.longLeaseNum
          if (longNum.length > 0) {
            this.leaseNum = longNum[0].dicValue
            this.rentList = longNum
            this.benfit = this.data.longLeaseDis
          }
        } else if (res.errNO == '10000') {
          this.$ve.alert(res.errMsg, () => {
            this.$router.back()
          })
        }
      })
      if (storage.get('access-token')) {
        http.checkCollection(id).then(res => {
          if (res.errNo == 0) {
            this.isCollect = res.data.isExist
          }
        })
      }
    }
  },
  data() {
    return {
      id: 0,
      data: {},
      leaseType: 1,
      leaseNum: 0,
      leaseNumName: '',
      rentList: [],
      isCollect: 'N',
      show: false,
      benfit: {}
    }
  },
  methods: {
    tel() {
      this.show = true
    },
    collect() {
      if (this.isCollect === 'Y') {
        this.$ve.alert('已收藏')
      } else {
        let loading = this.$ve.loading('处理中...')
        http
          .saveCollection(this.id)
          .then(res => {
            loading.hide()
            if (res.errNo == 0) {
              this.isCollect = 'Y'
            } else {
              this.$ve.alert(res.errMsg)
            }
          })
          .catch(() => {
            loading.hide()
          })
      }
    },
    choose(type) {
      this.leaseType = type
      if (type === 1) {
        let longNum = this.data.longLeaseNum
        if (longNum.length > 0) {
          this.leaseNum = longNum[0].dicValue
          this.leaseNumName = longNum[0].dicName
          this.rentList = longNum
          this.benfit = this.data.longLeaseDis
        }
      } else {
        let shortNum = this.data.shortLeaseNum
        if (shortNum.length > 0) {
          this.leaseNum = shortNum[0].dicValue
          this.leaseNumName = shortNum[0].dicName
          this.rentList = shortNum
          this.benfit = this.data.shortLeaseDis
        }
      }
    },
    selectRentTime(item) {
      this.leaseNum = item.dicValue
      this.leaseNumName = item.dicName
    },
    submit() {
      if (storage.get('access-token')) {
        this.$store.commit('selectPiano', {
          id: this.id,
          leaseType: this.leaseType,
          leaseNum: this.leaseNum
        })
        this.$router.push('/chooseaddr')
      } else {
        this.$store.commit('updateBackUrl', {
          backUrl: this.$router.currentRoute.fullPath
        })
        this.$router.push('/login')
      }
    }
  }
}
</script>
<style lang="scss">
.pt-detail-swiper {
  .ve-slider-list {
    padding-top: 100% !important;
  }
}

.pt-info {
  padding-bottom: 0.88rem;
  img {
    width: 100%;
  }
}

.pt-detail {
  padding: 0.3rem 0 0 0.3rem;
  .flexbox {
    display: flex;
    line-height: 2;
    margin-bottom: 5px;
    .flex-item {
      flex: 1;
      word-wrap: break-word;
    }
  }
  .title {
    font-size: 0.3rem;
    color: #323136;
    margin-bottom: 10px;
  }
  .group {
    display: inline-block;
  }
  .total-price {
    font-size: 0.32rem;
    color: #bf3737;
  }
  .s1 {
    font-size: 0.28rem;
    color: #323136;
  }
  .s1.txt-red {
    color: #bf3737;
  }
  .s2 {
    font-size: 0.28rem;
    color: #928f9c;
    span {
      // margin-right: .2rem;
      padding: 3px 5px;
      float: left;
      line-height: 1.5;
    }
  }
  .s3 {
    font-size: 0.24rem;
    color: #323136;
  }
  .s4 {
    font-size: 0.24rem;
    color: #928f9c;
  }
  .cur {
    color: #fff;
    background-color: #bf3737;
    border-radius: 0.1rem+0.06rem;
    box-sizing: border-box;
  }
}

.footer-action {
  .act-tel {
    width: 1.6rem;
    background-color: #ebab21;
    color: #fff;
    text-align: center;
    font-size: 0.3rem;
    line-height: 0.88rem;
  }
  .act-collect {
    width: 0.88rem;
    background-color: #7f7c8b;
    background-image: url('../../assets/collect.png');
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 0.4rem 0.36rem;
  }
  .act-collected {
    background-image: url('../../assets/collected.png');
  }
}
</style>


