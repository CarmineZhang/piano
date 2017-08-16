<template>
  <div class="send-form">
    <div class="send-wrapper">
      <div class="form-item">
        <div class="item-hd">+86</div>
        <input type="tel" class="item-bd ipt" maxlength="11" v-model="phone" placeholder="手机号码">
      </div>
      <div class="form-item">
        <input type="tel" class="item-bd ipt" maxlength="6" v-model="code" placeholder="请输入六位验证码">
        <count-down :time="60" v-model="start" :disabled="disabled" @on-click="startCountDown"></count-down>
      </div>
      <div class="form-op">
        <a class="btn btn-primary" @click="next" :class="{'btn-primay-disabled':$validator.invalid}">
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
import http from '@/libs/httpUtil'
export default {
  name: 'login',
  components: {
    CountDown
  },
  validator: {
    phone: [{ test: 'required', message: '手机号不能为空' }, { test: 'mobile', message: '手机号格式不正确' }],
    code: { test: /\d{6}/, message: '验证码不正确' }
  },
  computed: {
    disabled() {
      return this.$validator.$errors.phone !== undefined
    }
  },
  data() {
    return {
      phone: '',
      code: '',
      start: false
    }
  },
  beforeMount() {
    this.$validator.check()
  },
  methods: {
    startCountDown() {
      http.sendCode(this.phone).then((res) => {
        if (res.errNo == 0) {
          this.start = true
        }
      })
    },
    next() {
      if (this.$validator.valid) {
        http.confirmCode(this.phone, this.code).then((res) => {
          if (res.errNo == 0) {
            this.$emit('on-confirm', this.phone)
          }
        })
      }
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

