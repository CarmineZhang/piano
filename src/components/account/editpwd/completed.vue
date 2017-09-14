<template>
  <div>
    <my-header content="修改密码"></my-header>
    <set-pwd @on-confirm="confirm"></set-pwd>
  </div>
</template>
<script>
import SetPwd from '@/components/common/setpwd'
import http from '@/libs/httpUtil'
import MyHeader from '@/components/header'
export default {
  name: 'editpwd-newpwd',
  components: {
    SetPwd,
    MyHeader
  },
  beforeMount() {
    document.title = '修改密码'
  },
  methods: {
    confirm(phone, pwd) {
      let loading = this.$ve.loading('处理中...')
      http.uptatePassword(phone, pwd).then((res) => {
        loading.hide()
        if (res.errNo == 0) {
          this.$ve.alert('修改成功', () => {
            this.$router.push('/account')
          })
        } else {
          this.$ve.alert(res.errMsg)
        }
      })
    }
  }
}
</script>