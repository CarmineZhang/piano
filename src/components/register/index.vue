<template>
  <div>
    <send-phone @on-confirm="confirm"></send-phone>
  </div>
</template>
<script>
import SendPhone from '../common/sendphone'
export default {
  name: 'login',
  components: {
    SendPhone
  },
  methods: {
    confirm(phone) {
      this.$router.push({ name: 'registernext', params: { phone: phone } })
    }
  }
}
</script>


