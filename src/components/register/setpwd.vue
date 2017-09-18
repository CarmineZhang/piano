<template>
  <div>
    <my-header content="注册"></my-header>
    <set-pwd @on-confirm="confirm"></set-pwd>
  </div>
</template>
<script>
import SetPwd from '@/components/common/setpwd'
import http from '@/libs/httpUtil'
import MyHeader from '@/components/header'
import storage from '@/libs/storage'
export default {
  name: 'register-set-pwd',
  components: {
    SetPwd,
    MyHeader
  },
  methods: {
    confirm(phone, pwd) {
      let loading = this.$ve.loading('处理中...')
      http.setUserPwd(phone, pwd).then((res) => {
        loading.hide()
        if (res.errNo == 0) {
          storage.set('phone', phone)
          storage.set('access-token', res.data.memberToken)
          this.$router.push('/registersuccess')
        } else {
          this.$ve.alert(res.errMsg)
        }
      })
    }
  }
}
</script>