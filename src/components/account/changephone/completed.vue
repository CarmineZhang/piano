<template>
  <div>
    <send-phone @on-confirm="confirm" @on-cancel="cancel"></send-phone>
  </div>
</template>
<script>
import SendPhone from '@/components/common/sendphone'
import http from '@/libs/httpUtil'
export default {
  name: 'change-phone',
  components: {
    SendPhone
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




