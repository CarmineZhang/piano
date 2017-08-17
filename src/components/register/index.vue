<template>
  <div>
    <send-phone @on-confirm="confirm" @on-cancel="cancel"></send-phone>
  </div>
</template>
<script>
import SendPhone from '../common/sendphone'
export default {
  name: 'login',
  components: {
    SendPhone
  },
  beforeMount() {
    document.title = '注册'
  },
  methods: {
    confirm(phone) {
      this.$router.push({ name: 'registernext', params: { phone: phone } })
    },
    cancel() {
      this.$router.push('/login')
    }
  }
}
</script>


