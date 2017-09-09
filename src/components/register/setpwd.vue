<template>
  <div>
    <set-pwd @on-confirm="confirm"></set-pwd>
  </div>
</template>
<script>
import SetPwd from '../common/setpwd'
import http from '@/libs/httpUtil'
export default {
  name: 'register-set-pwd',
  components: {
    SetPwd
  },
  methods: {
    confirm(phone, pwd) {
      let loading = this.$ve.loading('处理中...')
      http.setUserPwd(phone, pwd).then((res) => {
        loading.hide()
        if (res.errNo == 0) {
          this.$router.push('/registersuccess')
        } else {
          this.$ve.alert(res.errMsg)
        }
      })
    }
  }
}
</script>