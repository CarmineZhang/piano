<template>

</template>
<script>
import http from '@/libs/httpUtil'
import storage from '@/libs/storage'
export default {
  name: 'wx-logon',
  mounted() {
    let code = this.$store.state.route.query.code
    if (code) {
      this.wxLogon(code)
    }
  },
  methods: {
    wxLogon(code) {
      http.wxLogin(code).then(res => {
        if (res.errNo == 0) {
          // storage.set('phone', this.phone)
          storage.set('access-token', res.data.memberToken)
          this.$router.push('/')
        }
      })
    }
  }
}
</script>
