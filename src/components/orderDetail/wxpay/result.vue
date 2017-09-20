<template>
  <div class="msg">
    <div class="msg-icon-area">
      <i class="weui-icon-msg" :class="[result==='success' ? 'weui-icon-success' : 'weui-icon-warn']"></i>
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
  name: 'wxpay-result',
  data() {
    return {
      result: ''
    }
  },
  filters: {
    status(val) {
      let ret = val
      if (val === 'success') {
        ret = '支付成功'
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
      http.getWxPayResult(no).then(res => {
        if (res.errNo == 0) {
          this.result = res.data
        } else {
          this.result = res.errMsg
        }
      })
    }
  }
}
</script>


