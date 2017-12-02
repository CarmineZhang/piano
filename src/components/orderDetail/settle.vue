<template>
  <div>
    <my-header content="订单结算"></my-header>
    <select-pay @on-pay="selectPay"></select-pay>
    <div class="proto">
      <input type="checkbox" v-model="checked">
      <a @click="showProto">
        <<行龙乐器用户服务协议>></a>
    </div>
    <div class="settle-action fixed-footer">
      <div class="order-settle">
        <span class="tit">费用总计：</span>
        <span class="ct">
          <em>¥</em>{{detail.downPayment|ToThousands}}</span>
        </span>
      </div>
      <a class="settle-ok" @click="pay" :class="{'settle-fail':!checked}">
        确认支付
      </a>
      <div v-html="payText"></div>
    </div>
    <ResultConfirm v-model="show" @on-confirm="searchResult"></ResultConfirm>
    <protocal v-model="protoShow"></protocal>
  </div>
</template>
<script>
import { Cell } from '../base/cell'
import MyHeader from '@/components/header'
import SelectPay from './selectpay.vue'
import Coupon from './selectcoupon.vue'
import http from '@/libs/httpUtil'
import storage from '@/libs/storage'
import ResultConfirm from './confirm'
import Protocal from './protocal'
export default {
  name: 'order-detail',
  data() {
    return {
      detail: {},
      payType: 'wx',
      payText: '',
      show: false,
      tradeno: '',
      id: '',
      checked: true,
      protoShow: false,
      couponShow: false,
      couponId: -1,
      couponAmount: 0
    }
  },
  computed: {
    isGZH() {
      return /MicroMessenger\//.test(window.navigator.userAgent)
    }
  },
  mounted() {
    let query = this.$store.state.route.query
    let id = query.id
    let no = query.tradeno
    let payType = query.paytype
    if (payType) {
      this.payType = payType
    }
    if (id) {
      this.id = id
      http.oderInfo(id).then(res => {
        if (res.errNo == 0) {
          this.detail = res.data
        }
      })
    }
    if (no) {
      this.tradeno = no
      this.show = true
    }
    if (!id && !no) {
      this.$router.go(-1)
    }
  },
  beforeMount() {
    document.title = '订单结算'
  },
  components: {
    Cell,
    SelectPay,
    MyHeader,
    ResultConfirm,
    Protocal,
    Coupon
  },
  methods: {
    couponConfirm(item) {
      if (item) {
        this.couponId = item.id
        this.couponAmount = item.amount
      }
    },
    showSelectCoupon() {
      this.couponShow = true
    },
    showProto() {
      this.protoShow = true
    },
    selectPay(type) {
      this.payType = type
    },
    pay() {
      if (!this.checked) {
        return
      }
      let loading = this.$ve.loading('处理中...')
      if (this.payType === 'wx') {
        if (this.isGZH) {
          storage.set('gzhpayorder', {
            body: '行龙租琴--订单号' + this.detail.orderSn,
            total: this.detail.downPayment,
            no: this.detail.orderSn,
            couponId: this.couponId
          })
          loading.hide()
          let backurl = encodeURIComponent('http://m.pianoshare.cn/wxpay')
          window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx0bc8c8250cea6d79&redirect_uri=${backurl}&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect`
        } else {
          http
            .wxPay(
              this.detail.orderSn,
              this.detail.downPayment,
              '行龙租琴--订单号' + this.detail.orderSn,
              this.id,
              this.couponId
            )
            .then(res => {
              loading.hide()
              if (res.errNo == 0) {
                window.location.href = res.data.payUrl
              } else {
                this.$ve.alert(res.errMsg)
              }
            })
            .catch(() => {
              loading.hide()
              this.$ve.alert('服务器错误，请稍后再试')
            })
        }
      } else {
        http
          .aliPay(
            this.detail.orderSn,
            this.detail.downPayment,
            '行龙租琴',
            '行龙租琴--订单号' + this.detail.orderSn,
            this.id,
            this.couponId
          )
          .then(res => {
            loading.hide()
            if (res.errNo == 0) {
              this.payText = res.data.alipayTrade
              this.$nextTick(() => {
                document.forms[0].submit()
              })
            } else {
              this.$ve.alert(res.errMsg)
            }
          })
          .catch(() => {
            loading.hide()
            this.$ve.alert('服务器错误，请稍后再试')
          })
      }
    },
    searchResult() {
      if (this.payType === 'wx') {
        this.$router.push({
          path: '/wxpay/result',
          query: { tradeno: this.tradeno }
        })
      } else {
        this.$router.push({
          path: '/ailpay/result',
          query: { tradeno: this.tradeno }
        })
      }
    }
  }
}
</script>
<style lang="scss">
.settle-action {
  display: flex;
  height: 0.88rem;
  line-height: 0.88rem;
  .order-settle {
    flex: 1;
    font-size: 0.28rem;
    background-color: #7f7c8b;
    text-align: center;
    color: #fff;
    .tit {
      font-size: 0.28rem;
    }
    .ct {
      font-size: 0.34rem;
      em {
        font-size: 0.28rem;
      }
    }
  }
  .settle-ok {
    width: 1.8rem;
    background-color: #bf3737;
    text-align: center;
    font-size: 0.3rem;
    color: #fff;
  }
  .settle-fail {
    opacity: 0.6;
  }
}
.proto {
  line-height: 0.3rem;
  padding: 0.3rem 0 0.3rem 0.3rem;
  input {
    height: 0.24rem;
    width: 0.24rem;
    vertical-align: middle;
  }
  a {
    text-decoration: underline;
    font-size: 0.24rem;
    color: #928f9c;
    vertical-align: middle;
    margin-left: 0.1rem;
  }
}
</style>


