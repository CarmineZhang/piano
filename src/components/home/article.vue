<template>
  <div v-html="content">
  </div>
</template>
<script>
import http from '@/libs/httpUtil'
export default {
  name: 'article',
  data() {
    return {
      content: ''
    }
  },
  beforeCreate() {
    var id = this.$store.state.route.query.id
    http.getArticle(id).then(res => {
      if (res.errNo == "0") {
        this.content = res.data.content
      }
    })
  }
}
</script>

