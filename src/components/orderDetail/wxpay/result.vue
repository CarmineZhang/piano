<template>
  <div class="msg">
    <h3>支付结果</h3>
    <div class="msg-icon-area">
      <i class="weui-icon-msg" :class="[iconClass]"></i>
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
  computed: {
    iconClass() {
      if (this.result) {
        if (this.result === 'success') {
          return 'weui-icon-success'
        } else {
          return 'weui-icon-warn'
        }
      }
      return ''
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



