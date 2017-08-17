<template>
  <div>
    <set-pwd @on-confirm="confirm"></set-pwd>
  </div>
</template>
<script>
import SetPwd from '../common/setpwd'
import http from '@/libs/httpUtil'
export default {
  name: 'findpwd-set-pwd',
  components: {
    SetPwd
  },
  methods: {
    confirm(phone, pwd) {
      http.setUserPwd(phone, pwd).then((res) => {
        if (res.errNo == 0) {
          this.$router.push('/login')
        }
      })
    }
  }
}
</script>