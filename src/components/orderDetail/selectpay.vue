<template>
  <div class="pay">
    <div class="title">选择支付方式</div>
    <div class="pay-method">
      <a class="item item-wx" :class="{'on':pay==='wx'}" @click="wxPay">微信支付</a>
      <a class="item item-ali" :class="{'on':pay==='ali'}" @click="aliPay" v-show="aliShow">支付宝支付</a>
    </div>
    <div class="comment" v-text="content"></div>
  </div>
</template>
<script>
export default {
  name: 'select-pay',
  data() {
    return {
      pay: 'wx'
    }
  },
  computed: {
    aliShow() {
      return !this.$parent.isGZH
    },
    content() {
      return this.pay === 'wx' ? '*您选择了微信支付' : '*您选择了支付宝支付'
    }
  },
  methods: {
    wxPay() {
      if (this.pay === 'wx') {
        return
      }
      this.pay = 'wx'
      this.$emit('on-pay', 'wx')
    },
    aliPay() {
      if (this.pay === 'ali') {
        return
      }
      this.pay = 'ali'
      this.$emit('on-pay', 'ali')
    }
  }
}
</script>
<style lang="scss">
.pay {
  // padding-bottom: .9rem;
  .title {
    padding-top: 30px;
    padding-left: 0.3rem;
    font-size: 0.32rem;
    color: #323136;
  }
  .pay-method {
    display: flex;
    .item {
      display: block;
      text-align: center;
      flex: 1;
      position: relative;
      font-size: 0.28rem;
      color: #928f9c;
      &.on {
        color: #323136;
      }
    }
    .item-wx {
      &::before {
        content: '';
        display: block;
        width: 0.99rem;
        height: 0.98rem;
        margin: 0.7rem auto 0.2rem;
        background-image: url('../../assets/pay-wx.png');
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: 50%;
      }
      &.on {
        &::before {
          background-image: url('../../assets/pay-wx-light.png');
        }
      }
    }
    .item-ali {
      &::before {
        content: '';
        display: block;
        width: 1rem;
        height: 1rem;
        margin: 0.7rem auto 0.2rem;
        background-image: url('../../assets/pay-ali.png');
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: 50%;
      }
      &.on {
        &::before {
          background-image: url('../../assets/pay-ali-light.png');
        }
      }
    }
  }
  .comment {
    padding-top: 0.3rem;
    padding-left: 0.3rem;
    color: #bf3737;
    font-size: 0.24rem;
  }
}
</style>

