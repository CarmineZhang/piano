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
let data = null
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
          data = res.data
          if (typeof WeixinJSBridge == "undefined") {
            if (document.addEventListener) {
              document.addEventListener('WeixinJSBridgeReady', this.onBridgeReady.bind(this), false);
            } else if (document.attachEvent) {
              document.attachEvent('WeixinJSBridgeReady', this.onBridgeReady.bind(this));
              document.attachEvent('onWeixinJSBridgeReady', this.onBridgeReady.bind(this));
            }
          } else {
            this.onBridgeReady();
          }
        } else {
          this.$ve.alert(res.errMsg)
        }
      })
    },
    onBridgeReady() {
      if (this.wxVersion >= 5) {
        WeixinJSBridge.invoke(
          'getBrandWCPayRequest', {
            "appId": data.appId,
            "timeStamp": data.timeStamp, //时间戳，自1970年以来的秒数
            "nonceStr": data.nonceStr, //随机串
            "package": data.package,
            "signType": data.signType, //微信签名方式：
            "paySign": data.paySign
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


