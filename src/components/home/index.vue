<template>
  <div class="main">
    <div class="fixed-header">
      <top></top>
      <search-bar @on-search="search"></search-bar>
    </div>
    <div class="index-body">
      <swiper :list="swipers"></swiper>
      <recommend></recommend>
      <div class="more">
        <a @click="showPianoList">查看更多</a>
      </div>
      <service></service>
      <news></news>
      <div class="more" @click="showNews">
        <a>查看更多</a>
      </div>
    </div>
    <ve-footer></ve-footer>
  </div>
</template>

<script>
import Top from '../top'
import VeFooter from '../footer'
import SearchBar from '../base/searchbar'
import Swiper from '../base/swiper'
import bannerSrc from '../../assets/banner.png'
import Recommend from './recommend'
import Service from './service'
import News from './news'
export default {
  name: 'home',
  components: {
    Top,
    SearchBar,
    Swiper,
    Recommend,
    Service,
    News,
    VeFooter
  },
  data() {
    return {
      swipers: [bannerSrc, bannerSrc, bannerSrc]
    }
  },
  beforeMount() {
    document.title = '商城'
  },
  methods: {
    showNews() {
      this.$router.push('/news')
    },
    showPianoList() {
      this.$router.push('/productlist')
    },
    search(val) {
      this.$router.push({ name: 'product-list', params: { key: val } })
    }
  }
}
</script>
<style lang="scss">
.index-body {
  padding: .88rem+.84rem 0 0;
}
</style>


