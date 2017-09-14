<template>
  <div>
    <my-header content="修改密码"></my-header>
    <send-phone @on-confirm="confirm" @on-cancel="cancel"></send-phone>
  </div>
</template>
<script>
import SendPhone from '@/components/common/sendphone'
import MyHeader from '@/components/header'
export default {
  name: 'editpwd',
  components: {
    SendPhone,
    MyHeader
  },
  beforeMount() {
    document.title = '修改密码'
  },
  methods: {
    confirm() {
      this.$router.push({ name: 'editpwd-completed' })
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




