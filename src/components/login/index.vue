<template>
  <div>
    <div class="login-img">
      <img src="../../assets/logo.png" alt="">
    </div>
    <div class="login-form">
      <div class="login-wrapper">
        <div class="form-item">
          <div class="item-hd">+86</div>
          <input type="text" class="item-bd ipt" placeholder="手机号码">
        </div>
        <div class="form-item">
          <input type="tel" class="item-bd ipt" placeholder="请输入六位验证码">
          <!-- <button class="item-ft">获取验证码</button> -->
          <count-down v-model="start" @on-click="startCountDown"></count-down>
        </div>
        <div class="form-op">
          <a class="btn btn-primary">
            登录
          </a>
        </div>
        <div class="login-comment">
          首次登录即注册成功
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CountDown from '../base/countdown'
export default {
  name: 'login',
  components: {
    CountDown
  },
  data() {
    return {
      start: false
    }
  },
  methods: {
    startCountDown() {
      this.start = true
    }
  }
}
</script>
<style lang="scss">
.login-img {
  position: relative;
  height: 0;
  padding-top: (410/750)*100%;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
}

.login-form {
  background-color: #fff;
  padding: .5rem 0 0;
  .login-wrapper {
    width: 6.9rem;
    margin: 0 auto;
    .login-op-wrapper {
      overflow: hidden;
      margin-top: .6rem;
    }
    .login-comment {
      padding: .2rem 0;
      font-size: .28rem;
      color: #999;
    }
  }
}
</style>

