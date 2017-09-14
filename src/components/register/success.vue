<template>
  <div>
    <my-header content="注册"></my-header>
    <div class="success">
      <div class="success-img">
        <img src="../../assets/success.png" alt="">
      </div>
      <div class="success-msg">
        恭喜您，注册成功！
      </div>
      <a class="action" v-text="content" @click="gotoMe()"></a>
    </div>
  </div>
</template>
<script>
import MyHeader from '@/components/header'
export default {
  name: 'register-complete',
  components: {
    MyHeader
  },
  data() {
    return {
      duration: 2000
    }
  },
  computed: {
    content() {
      return (this.duration / 1000) + '秒后自动转到个人中心'
    }
  },
  beforeMount() {
    // this.$nextTick(() => {
    this.start()
    // })
  },
  methods: {
    start() {
      this.timeId = setInterval(() => {
        this.duration = this.duration - 1000
        if (this.duration == 0) {
          clearInterval(this.timeId)
          this.$router.push('/usercenter')
        }
      }, 1000)
    },
    gotoMe() {
      this.$router.push('/usercenter')
    }
  }

}
</script>
