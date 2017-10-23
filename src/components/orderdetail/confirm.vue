<template>
  <div>
    <div class="mask" v-show="show"></div>
    <div class="msg-result-dialog" v-show="show">
      <div class="title">请确认支付是否已完成</div>
      <div class="actions">
        <a class="action action-ok" @click="confirm">已完成支付</a>
        <a class="action" @click="close">支付遇到问题，重新支付</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'result-confirm',
  props: {
    value: Boolean
  },
  data() {
    return {
      show: false
    }
  },
  watch: {
    value(val) {
      this.show = val
    },
    show(val) {
      this.$emit('input', val)
    }
  },
  methods: {
    confirm() {
      this.show = false
      this.$emit('on-confirm')
    },
    close() {
      this.show = false
    }
  }
}
</script>
<style lang="scss">
.msg-result-dialog {
  background: #fff;
  width: 6.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  border-radius: 10px;
  z-index: 1001;
  .title {
    position: relative;
    text-align: center;
    font-size: 16px;
    color: #323136;
    line-height: 80px;
    @include bottomline();
  }
  .actions {
    .action {
      position: relative;
      display: block;
      text-align: center;
      font-size: 14px;
      line-height: 50px;
      color: #928f9c;
    }
    .action-ok {
      color: #bf3737;
      @include bottomline();
    }
  }
}
</style>


