<template>
  <div class="msg">
    <div class="msg-text-area">
      <h2 class="msg-title">支付订单创建成功</h2>
    </div>
  </div>
</template>
<script>
import http from '@/libs/httpUtil'
import storage from '@/libs/storage'
export default {
  name: 'wxpay',
  mounted() {
    let code = this.$store.state.route.query.code
    if (code) {
      this.wxpay(code)
    }
  },
  computed: {
    order() {
      return storage.get('gzhpayorder')
    },
    wxVersion() {
      var versions = navigator.userAgent.match(/MicroMessenger\/([\d\.]+)/i)
      return parseInt(versions[1])
    }
  },
  methods: {
    wxpay(code) {
      http.wxGzhPay(this.order.body, this.order.total, this.order.no, code).then(res => {
        if (res.errNo == 0) {
          let data = res.data
          this.onBridgeReady(data.appId, data.timeStamp, data.nonceStr, data.package, data.paySign, data.signType)
        } else {
          this.$ve.alert(res.errMsg)
        }
      })
    },
    onBridgeReady(appid, timestamp, noncestr, orderPackage, pagsign, signType) {
      if (this.wxVersion >= 5) {
        WeixinJSBridge.invoke(
          'getBrandWCPayRequest', {
            "appId": appid,
            "timeStamp": timestamp, //时间戳，自1970年以来的秒数
            "nonceStr": noncestr, //随机串
            "package": orderPackage,
            "signType": signType, //微信签名方式：
            "paySign": pagsign
          },
          (res) => {
            if (res.err_msg == "get_brand_wcpay_request:ok") {
              this.$router.replace('/wxpay/result?tradeno=' + this.order.no)
            } else {
              this.$router.replace('/wxpay/result?tradeno=' + this.order.no)
            }
          }
        )
      } else {
        this.$ve.alert('微信支付只支持微信5.0版本,您目前的版本为' + this.wxVersion, () => {
          this.$router.push('/index')
        })
      }
    }
  }
}
</script>


