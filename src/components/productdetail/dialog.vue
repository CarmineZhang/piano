<template>
  <div>
    <div class="mask" v-show="show"></div>
    <div class="dialog-tel" v-show="show">
      <div class="title">咨询电话：010-57115861</div>
      <a style="display:none" href="tel:010-57115861" ref="telphone"></a>
      <div class="actions">
        <a class="action" @click="close">取消</a>
        <a class="action action-ok" @click="tel">拨打</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'result-dialog',
  props: {
    value: Boolean
  },
  data() {
    return {
      show: false,
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
    tel() {
      if (this.show) {
        this.show = false;
        this.$refs.telphone.click()
      }
    },
    close() {
      this.show = false;
    }
  }
}
</script>
<style lang="scss">
.dialog-tel {
  background: #fff;
  width: 6rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  border-radius: 10px;
  z-index: 1001;
  .title {
    position: relative;
    text-align: center;
    font-size: .3rem;
    color: #323136;
    line-height: 2.12rem;
    @include bottomline(#bcbcbc);
  }
  .actions {
    display: flex;
    .action {
      flex: 1;
      text-align: center;
      font-size: .3rem;
      line-height: .88rem;
      color: #5084be;
    }
    .action-ok {
      position: relative;
      @include leftline(#bcbcbc);
    }
  }
}
</style>


