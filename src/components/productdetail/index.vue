<template>
  <div>
    <swiper :list="data.otherImgs" class="pt-detail-swiper"></swiper>
    <div class="pt-detail">
      <p class="title" v-text="data.pianoName"></p>
      <div class="flexbox">
        <span class="s2">市场价：</span>
        <span class="flex-item s2">
          <em>¥</em>{{data.marketPrices|ToThousands}}</span>
      </div>
      <div class="flexbox">
        <span class="s1">租赁方式：</span>
        <div class="flex-ite2 s2">
          <span :class="{'cur':leaseType===1}" @click="choose(1)">月租</span>
          <span :class="{'cur':leaseType===0}" @click="choose(0)">日租</span>
        </div>
      </div>
      <div class="flexbox">
        <span class="s1">租赁时长：</span>
        <div class="flex-item s2">
          <span :class="{'cur':leaseNum===item.leaseNumCode}" v-for="item in rentList" :key="item.leaseNumCode" v-text="item.leaseNumName" @click="selectRentTime(item)"></span>
        </div>
      </div>
      <div class="flexbox">
        <span class="s1">押金：</span>
        <span class="flex-item s1">
          <em>¥</em>{{deposit|ToThousands}}</span>
        </span>
      </div>
      <div class="flexbox">
        <span class="s1">租金：</span>
        <span class="flex-item s1">
          <em>¥</em>{{rent|ToThousands}}</span>
      </div>
      <div class="flexbox">
        <span class="s1" style="line-height: .64rem;">押金+租金：</span>
        <span class="flex-item total-price">
          <em>¥</em>{{deposit+rent*leaseNum|ToThousands}}</span>
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
      <a class="action" @click="submit">立即租赁</a>
      <a class="act-collect" @click="collect"></a>
    </div>
  </div>
</template>
<script>
import Swiper from '../base/swiper'
import http from '@/libs/httpUtil'
export default {
  name: 'product-detail',
  components: {
    Swiper
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
            this.leaseNum = longNum[0].leaseNumCode
            this.rentList = longNum
          }
        }
      })
    }
  },
  data() {
    return {
      id: 0,
      data: {},
      leaseType: 1,
      leaseNum: 0,
      leaseNumName: '',
      rentList: []
    }
  },
  methods: {
    collect() {
      if (this.id) {
        http.saveCollection(this.id)
      }
    },
    choose(type) {
      this.leaseType = type
      if (type === 1) {
        let longNum = this.data.longLeaseNum
        if (longNum.length > 0) {
          this.leaseNum = longNum[0].leaseNumCode
          this.leaseNumName = longNum[0].leaseNumName
          this.rentList = longNum
        }
      } else {
        let shortNum = this.data.shortLeaseNum
        if (shortNum.length > 0) {
          this.leaseNum = shortNum[0].leaseNumCode
          this.leaseNumName = shortNum[0].leaseNumName
          this.rentList = shortNum
        }
      }
    },
    selectRentTime(item) {
      this.leaseNum = item.leaseNumCode
      this.leaseNumName = item.leaseNumName
    },
    submit() {
      this.$store.commit('selectPiano', {
        id: this.id,
        leaseType: this.leaseType,
        leaseNum: this.leaseNum
      })
      this.$router.push('/chooseaddr')
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
  padding-bottom: .88rem;
  img {
    width: 100%;
  }
}

.pt-detail {
  padding: .3rem 0 0 .3rem;
  .flexbox {
    display: flex;
    line-height: 2;
    .flex-item {
      flex: 1;
      word-wrap: break-word;
    }
  }
  .title {
    font-size: .3rem;
    color: #323136;
  }
  .group {
    display: inline-block;
  }
  .total-price {
    font-size: .32rem;
    color: #bf3737;
  }
  .s1 {
    font-size: .28rem;
    color: #323136;
  }
  .s2 {
    font-size: .28rem;
    color: #928f9c;
    span {
      // margin-right: .2rem;
      padding: 3px 5px;
      float: left;
      line-height: 1.5;
    }
  }
  .s3 {
    font-size: .24rem;
    color: #323136;
  }
  .s4 {
    font-size: .24rem;
    color: #928f9c;
  }
  .cur {
    color: #fff;
    background-color: #bf3737;
    border-radius: .1rem+.06rem;
    box-sizing: border-box;
  }
}


.footer-action {
  .act-collect {
    width: .88rem;
    background-color: #7f7c8b;
    background-image: url('../../assets/collect.png');
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: .4rem .36rem;
  }
}
</style>


