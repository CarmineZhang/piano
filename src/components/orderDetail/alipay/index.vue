<template>
  <div class="msg">
    <div class="msg-text-area">
      <h2 class="msg-title">{{result|status}}</h2>
      <p>
        <a @click="gotoIndex">返回</a>
      </p>
    </div>
  </div>
</template>
<script>
import http from '@/libs/httpUtil'
export default {
  name: 'nofound',
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
      this.$router.go(-1)
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
<style lang="scss">
.msg {
  padding-top: 36px;
  text-align: center;
  .msg-icon-area {
    margin-bottom: 30px
  }
  .msg-text-area {
    margin-bottom: 25px;
    padding: 0 20px;
    .msg-title {
      margin-bottom: 5px;
      font-weight: 400;
      font-size: 20px;
    }
    a {
      color: #586C94;
    }
  }
}
</style>


