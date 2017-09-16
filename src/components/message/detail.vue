<template>
  <div>
    <my-header content="消息详情"></my-header>
    <div class="msg-detail">
      <p class="msg-detail-header" v-text="detail.title"></p>
      <p class="msg-detail-content" v-text="detail.messageInfo"></p>
      <p class="msg-detail-time" v-text="detail.creatTime"></p>
    </div>
  </div>
</template>
<script>
import MyHeader from '../header'
import http from '@/libs/httpUtil'
export default {
  name: 'message-detail',
  components: {
    MyHeader
  },
  data() {
    return {
      detail: {}
    }
  },
  created() {
    let id = this.$store.state.route.query.id
    if (id) {
      http.getMessageDetial(id).then(res => {
        if (res.errNo == 0) {
          this.detail = res.data
        }
      })
    }
  }
}
</script>
<style lang="scss">
.msg-detail {
  padding: .6rem .3rem 0;
  background-color: #fff;
  .msg-detail-header {
    color: #323136;
    font-size: .32rem;
  }
  .msg-detail-content {
    text-indent: 2em;
    font-size: .28rem;
    color: #928f9c;
  }
  .msg-detail-time {
    text-align: right;
    font-size: .28rem;
    color: #928f9c;
  }
}
</style>

