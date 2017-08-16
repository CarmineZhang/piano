<template>
  <div>
    <div class="set-wrapper">
      <p class="set-header">
        <span>您注册的手机号为</span>
        <strong v-text="phone"></strong>
      </p>
      <p class="set-sub-header">
        请设置登录密码
      </p>
      <div class="form-item">
        <input type="password" v-model="pwd" class="item-bd ipt" placeholder="请输入密码">
      </div>
      <div class="form-item">
        <input type="password" v-model="confirmPwd" class="item-bd ipt" placeholder="请确认密码">
      </div>
      <div class="form-op">
        <a class="btn btn-primary" @click="ok" :class="{'btn-primay-disabled':$validator.invalid}">
          完成
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'set-pwd',
  data() {
    return {
      pwd: '',
      confirmPwd: ''
    }
  },
  validator: {
    pwd: [{ test: /.{8,16}/, message: '密码不符合规则' }, {
      test: function (value) {
        if (this.confirmPwd === '') {
          return true
        }
        return this.confirmPwd !== '' && value === this.confirmPwd
      }, message: '两次输入的密码不一致'
    }],
    confirmPwd: [{ test: /.{8,16}/, message: '密码不符合规则' }, {
      test: function (value) {
        return value === this.pwd
      }, message: '两次输入的密码不一致'
    }]
  },
  computed: {
    phone() {
      return this.$store.state.route.params.phone
    }
  },
  beforeMount() {
    if (!this.phone) {
      this.$router.push('/register')
    } else {
      this.$validator.check()
    }
  },
  methods: {
    ok() {
      if (this.$validator.valid) {
        this.$emit('on-confirm', this.phone, this.pwd)
      }
    }
  }
}
</script>
<style lang="scss">
.set-wrapper {
  padding: .3rem .3rem 0;
  height: 5.2rem;
  background-color: #fff;
  .set-header {
    font-size: .3rem;
    color: #1b1b1b;
    strong {
      font-weight: normal;
      color: #bf3737;
    }
  }
  .set-sub-header {
    padding: .3rem 0 .15rem;
    font-size: .28rem;
    color: #1b1b1b;
  }
  .set-comment {
    margin-bottom: .6rem;
    font-size: .24rem;
    color: #323136;
  }
}
</style>

