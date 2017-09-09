<template>
  <div>
    <div class="fixed-header">
      <top></top>
      <search-bar></search-bar>
    </div>
    <scroll-load @load-more="loadmore" :height="height" v-model="allowload">
      <list class="news-body" :list="list"></list>
    </scroll-load>
    <ve-footer></ve-footer>
  </div>
</template>
<script>
import Top from '../top'
import SearchBar from '../base/searchbar'
import ScrollLoad from '@/components/base/scrollload'
import VeFooter from '../footer'
import List from './list'
import http from '@/libs/httpUtil'
export default {
  name: 'news',
  components: {
    Top,
    SearchBar,
    VeFooter,
    List,
    ScrollLoad
  },
  data() {
    return {
      list: [],
      index: 1,
      size: 10,
      allowload: true,
      height: 0
    }
  },
  beforeMount() {
    document.title = '行龙资讯'
    var fontSize = parseFloat(document.documentElement.style.fontSize)
    this.height = document.documentElement.clientHeight - 1.72 * fontSize
  },
  created() {
    this.getNews()
  },
  methods: {
    getNews() {
      http.getInformations(this.index, this.size).then(res => {
        if (res.errNo == 0) {
          this.list = res.data.dataList
          if (this.list.length < this.size) {
            this.allowload = false
          } else {
            this.allowload = true
          }
        }
      })
    },
    loadmore() {
      this.index = this.index + 1
      http.getInformations(this.index, this.size).then(res => {
        if (res.errNo == 0) {
          let list = res.data.dataList
          if (list.length < this.size) {
            this.allowload = false
          } else {
            this.allowload = true
          }
          this.list = this.list.concat(list)
        }
      })
    }
  }
}
</script>
<style lang="scss">
.news-body {
  padding: .88rem+0.84rem 0 1.5rem;
}
</style>

