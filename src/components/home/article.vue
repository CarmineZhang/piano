<template>
  <div>
    <my-header content="资讯详情"></my-header>
    <div class="new-detail">
      <p class="detail-header" v-text="detail.title"></p>
      <p class="detail-time">{{detail.beginTime|dateformate}}</p>
      <p v-html="detail.content"></p>
    </div>
  </div>
</template>
<script>
import http from '@/libs/httpUtil'
import MyHeader from '../header'
export default {
  name: 'article',
  components: {
    MyHeader
  },
  data() {
    return {
      detail: {}
    }
  },
  beforeCreate() {
    var id = this.$store.state.route.query.id
    http.getArticle(id).then(res => {
      if (res.errNo == "0") {
        this.detail = res.data
      }
    })
  }
}
</script>
<style lang="scss" scoped>
.new-detail {
  padding: 15px 20px;
  img {
    width: 100% !important;
  }
  .detail-header {
    text-align: center;
    color: #323136;
    font-size: .32rem;
    font-weight: 400;
    line-height: 40px;
  }

  .detail-time {
    text-align: center;
    color: #928f9c;
    font-size: .28rem;
    line-height: 2;
  }
}
</style>


