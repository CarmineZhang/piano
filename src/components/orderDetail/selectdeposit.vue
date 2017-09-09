<template>
  <div>
    <transition name='ve-mask'>
      <div class="mask" v-if="show" @click="close"></div>
    </transition>
    <transition name="ve-slide">
      <div class="st-deposit" v-if="show">
        <div class="sd-header">选择押金</div>
        <div class="sd-body">
          <div class="sd-item" @click="select(100)">
            <div class="sd-item-bd">支付全额押金</div>
            <div class="sd-item-ft" :class="{'sd-item-default':100==result}"></div>
          </div>
          <div class="sd-item" @click="select(20)">
            <div class="sd-item-bd">支付20%押金</div>
            <div class="sd-item-ft" :class="{'sd-item-default':20==result}"></div>
          </div>
        </div>
        <div class="sd-footer">
          <a href="javascript:void(0)" class="btn btn-primary" @click="confirm">确定</a>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'select-deposit',
  props: {
    value: Boolean
  },
  data() {
    return {
      show: false,
      result: 20
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
      this.show = false;
    },
    select(val) {
      this.result = val
    },
    close() {
      this.show = false;
    }
  }
}
</script>
<style lang="scss">
.st-deposit {
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: #fff;
  width: 100%;
  height: 8rem;
  z-index: 5000;
  .sd-header {
    padding: .4rem 0 .3rem;
    text-align: center;
    font-size: .32rem;
    color: #323136;
  }
  .sd-body {
    width: 7.2rem;
    margin: 0 auto;
    .sd-item {
      height: .88rem;
      line-height: .88rem;
      position: relative;
      display: flex;
      @include bottomline(#ccc);
      .sd-item-bd {
        flex: 1;
        font-size: .28rem;
        color: #323136;
      }
      .sd-item-ft {
        padding-left: .8rem;
        position: relative;
        &::before {
          content: '';
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
          background: url('../../assets/select-no-check.png') no-repeat;
          background-position: 0 50%;
          background-size: .4rem;
        }
      }
      .sd-item-default {
        &::before {
          background: url('../../assets/select-checked.png') no-repeat;
          background-position: 0 50%;
          background-size: .4rem;
        }
      }
    }
  }
  .sd-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: .88rem;
  }
}
</style>

