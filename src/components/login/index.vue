<template>
  <div>
    <div class="login-img">
      <img src="../../assets/logo.png" alt="">
    </div>
    <div class="login-form">
      <div class="login-wrapper">
        <div class="form-item">
          <div class="item-hd item-phone"></div>
          <input type="tel" class="item-bd ipt" v-model="phone" placeholder="手机号码">
        </div>
        <div class="form-item">
          <div class="item-hd item-pwd"></div>
          <input type="password" class="item-bd ipt" v-model="pwd" placeholder="请输入密码">
        </div>
        <div class="form-op">
          <a class="btn btn-primary" @click="login" :class="{'btn-primay-disabled':$validator.invalid}">
            登录
          </a>
        </div>
        <div class="login-comment">
          <a @click="register">注册账号</a>
          <span>|</span>
          <a>忘记密码？</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import http from '@/libs/httpUtil'
export default {
  name: 'login',
  validator: {
    phone: [{ test: 'required', message: '手机号不能为空' }, { test: 'mobile', message: '手机号格式不正确' }],
    pwd: { test: 'required', message: '密码不能为空' }
  },
  data() {
    return {
      phone: '',
      pwd: ''
    }
  },
  beforeMount() {
    this.$validator.check()
  },
  methods: {
    register() {
      this.$router.push('/register')
    },
    login() {
      var validator = this.$validator
      if (validator.valid) {
        http.login(this.phone, this.pwd).then((res) => {
          if (res.errNo == 0) {
            this.$ve.toast('登录成功', 2000);
          } else {
            this.$ve.alert(res.errMsg)
          }
        })
      }
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
    .item-phone {
      position: relative;
      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
        width: .22rem;
        height: .35rem;
        background: url('../../assets/login-phone.png') no-repeat;
        background-size: 100%;
      }
    }
    .item-pwd {
      position: relative;
      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
        width: .3rem;
        height: .36rem;
        background: url('../../assets/login-pwd.png') no-repeat;
        background-size: 100%;
      }
    }
    .login-op-wrapper {
      overflow: hidden;
      margin-top: .6rem;
    }
    .login-comment {
      padding: .4rem 0;
      text-align: center;
      font-size: .28rem;
      color: #999;
      a {
        color: #999;
      }
      span {
        margin: 0 .4rem;
      }
    }
  }
}
</style>

