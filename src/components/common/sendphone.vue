<template>
  <div class="send-form">
    <div class="send-wrapper">
      <div class="form-item">
        <div class="item-hd">+86</div>
        <input type="text" class="item-bd ipt" v-model="phone" placeholder="手机号码">
      </div>
      <div class="form-item">
        <input type="tel" class="item-bd ipt" placeholder="请输入六位验证码">
        <count-down :time="60" v-model="start" :disabled="$validator.invalid" @on-click="startCountDown"></count-down>
      </div>
      <div class="form-op">
        <a class="btn btn-primary" @click="next">
          下一步
        </a>
        <a class="btn btn-default" @click="cancel">
          取消
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import CountDown from '../base/countdown'
import { sendCode } from '@/libs/httpUtil'
export default {
  name: 'login',
  components: {
    CountDown
  },
  validator: {
    phone: ['required', 'mobile']
  },
  data() {
    return {
      phone: '',
      start: false
    }
  },
  methods: {
    startCountDown() {
      sendCode(this.phone).then((res) => {
        if (res.errNo == 0) {
          this.start = true
        }
      })
    },
    next() {
      this.$emit('on-confirm')
    },
    cancel() {
      this.$emit('on-cancel')
    }
  }
}
</script>
<style lang="scss">
.send-form {
  background-color: #fff;
  padding: .5rem 0 0;
  height: 6rem;
  .send-wrapper {
    width: 6.9rem;
    margin: 0 auto;
  }
}
</style>

