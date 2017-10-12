<template>
  <div>
    <div class="login-img">
      <img src="../../assets/logo.png" alt="">
    </div>
    <div class="login-form">
      <div class="login-wrapper">
        <div class="form-item">
          <div class="item-hd">+86</div>
          <input type="tel" class="item-bd ipt" maxlength="11" v-model="phone" placeholder="手机号码">
        </div>
        <div class="form-item">
          <input type="tel" class="item-bd ipt" maxlength="6" v-model="code" placeholder="请输入六位验证码">
          <count-down :time="60" v-model="start" :disabled="disabled" @on-click="startCountDown"></count-down>
        </div>
        <div class="form-op">
          <a class="btn btn-primary" @click="login" :class="{'btn-primay-disabled':$validator.invalid}">
            登录
          </a>
        </div>
        <div class="login-comment">
          <a @click="logon">账号密码登录</a>
          <span>|</span>
          <a @click="wxLogon">微信授权</a>
          <span>|</span>
          <a @click="register">注册账号</a>
          <span>|</span>
          <a @click="findpwd">忘记密码？</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CountDown from '../base/countdown'
import http from '@/libs/httpUtil'
import storage from '@/libs/storage'
export default {
  name: 'sms-login',
  validator: {
    phone: [{ test: 'required', message: '手机号不能为空' }, { test: 'mobile', message: '手机号格式不正确' }],
    code: { test: /\d{6}/, message: '验证码不正确' }
  },
  data() {
    return {
      phone: '',
      code: '',
      start: false
    }
  },
  components: {
    CountDown
  },
  computed: {
    disabled() {
      return this.$validator.$errors.phone !== undefined
    }
  },
  beforeMount() {
    document.title = '短信快捷登录'
    this.$validator.check()
  },
  methods: {
    startCountDown() {
      let loading = this.$ve.loading('发送中...')
      http.sendSms(this.phone).then((res) => {
        loading.hide()
        if (res.errNo == 0) {
          this.start = true
        } else {
          this.$ve.alert(res.errMsg)
        }
      })
    },
    wxLogon() {
      let backurl = encodeURIComponent('http://m.pianoshare.cn/wxlogon')
      window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx0bc8c8250cea6d79&redirect_uri=${backurl}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`
    },
    logon() {
      this.$router.push('/login')
    },
    register() {
      this.$router.push('/register')
    },
    findpwd() {
      this.$router.push('/findpwd')
    },
    login() {
      var validator = this.$validator
      if (validator.valid) {
        let loading = this.$ve.loading('登录中...')
        http.smsLogon(this.phone, this.code).then((res) => {
          loading.hide()
          if (res.errNo == 0) {
            storage.set('phone', this.phone)
            storage.set('access-token', res.data.memberToken)
            this.$ve.toast('登录成功', {
              duration: 1000, callback: () => {
                let url = this.$store.state.backUrl
                if (url === '') {
                  url = '/'
                }
                this.$router.push(url)
              }
            });
          } else {
            this.$ve.alert(res.errMsg)
          }
        }).catch(() => {
          loading.hide()
          this.$ve.alert('服务器错误，请稍后重试')
        })
      }
    }
  }
}
</script>
