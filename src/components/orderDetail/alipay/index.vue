<template>
  <div class="msg">
    <div class="msg-icon-area">
      <i class="weui-icon-msg" :class="[result==='TRADE_SUCCESS' ? 'weui-icon-success' : 'weui-icon-warn']"></i>
    </div>
    <div class="msg-text-area">
      <h2 class="msg-title">{{result|status}}</h2>
      <p>
        <a @click="gotoIndex">返回订单列表</a>
      </p>
    </div>
  </div>
</template>
<script>
import http from '@/libs/httpUtil'
export default {
  name: 'alipay-result',
  data() {
    return {
      result: ''
    }
  },
  filters: {
    status(val) {
      let ret = val
      switch (val) {
        case 'TRADE_SUCCESS':
          ret = '支付成功'
          break
        case 'WAIT_BUYER_PAY':
          ret = '等待支付'
          break
        case 'TRADE_CLOSED':
          ret = '交易超时关闭'
          break
        case 'ACQ.TRADE_NOT_EXIST':
          ret = '交易不存在'
          break
        case 'ACQ.INVALID_PARAMETER':
          ret = '参数不正确'
          break
        case 'ACQ.SYSTEM_ERROR':
          ret = '系统错误'
          break
      }
      return ret
    }
  },
  created() {
    let no = this.$store.state.route.query.tradeno
    if (no) {
      this.getResult(no)
    }
  },
  methods: {
    gotoIndex() {
      this.$router.push('/orderlist')
    },
    getResult(no) {
      http.getAliPayResult(no).then(res => {
        if (res.errNo == 0) {
          this.result = res.data.alipayResult
        } else {
          this.result = res.errMsg
        }
      })
    }
  }
}
</script>


