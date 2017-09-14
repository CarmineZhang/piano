<template>
  <div>
    <my-header content="修改密码"></my-header>
    <send-phone @on-confirm="confirm" @on-cancel="cancel"></send-phone>
  </div>
</template>
<script>
import SendPhone from '@/components/common/sendphone'
import http from '@/libs/httpUtil'
import MyHeader from '@/components/header'
export default {
  name: 'change-phone',
  components: {
    SendPhone,
    MyHeader
  },
  beforeMount() {
    document.title = '更换手机'
  },
  methods: {
    confirm(phone) {
      let loading = this.$ve.loading('处理中...')
      http.changeMemberPhone(phone).then(res => {
        loading.hide()
        if (res.errNo == 0) {
          this.$ve.alert('更换成功', () => {
            this.$router.push('/login')
          })
        } else {
          this.$ve.alert(res.errMsg)
        }
      })
    },
    cancel() {
      this.$router.go(-2)
    }
  }
}
</script>
.<style lang="scss">
.form-wrapper {
  padding: .3rem .3rem 0;
}
</style>




