<template>
  <div class="msg">
    <div class="msg-icon-area">
      <i class="weui-icon-warn"></i>
    </div>
    <div class="msg-text-area">
      <h2 class="msg-title">404，没有找到页面</h2>
      <p>
        <a @click="gotoIndex">返回首页</a>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'nofound',
  methods: {
    gotoIndex() {
      this.$router.replace('/')
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


