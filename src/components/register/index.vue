<template>
  <div>
    <my-header content="注册"></my-header>
    <send-phone @on-confirm="confirm" @on-cancel="cancel"></send-phone>
  </div>
</template>
<script>
import SendPhone from '../common/sendphone'
import MyHeader from '@/components/header'
export default {
  name: 'login',
  components: {
    SendPhone,
    MyHeader
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


