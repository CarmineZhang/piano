<template>
  <div>
    <send-phone @on-confirm="confirm" @on-cancel="cancel"></send-phone>
  </div>
</template>
<script>
import SendPhone from '@/components/common/sendphone'
export default {
  name: 'change-phone',
  components: {
    SendPhone
  },
  beforeMount() {
    document.title = '更换手机'
  },
  methods: {
    confirm() {
      this.$router.push({ name: 'change-phone-completed' })
    },
    cancel() {
      this.$router.go(-1)
    }
  }
}
</script>
.<style lang="scss">
.form-wrapper {
  padding: .3rem .3rem 0;
}
</style>




