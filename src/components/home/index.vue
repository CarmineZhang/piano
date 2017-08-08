<template>
  <div class="main">
    <div class="fixed-header">
      <top></top>
      <search-bar></search-bar>
    </div>
    <div class="index-body">
      <swiper :list="swipers"></swiper>
      <recommend></recommend>
      <div class="more">
        <a>查看更多</a>
      </div>
      <service></service>
      <news></news>
      <div class="more">
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
      swipers: [{
        href: '',
        img: bannerSrc
      }, {
        href: '',
        img: bannerSrc
      }, {
        href: '',
        img: bannerSrc
      }]
    }
  }
}
</script>
<style lang="scss">
.index-body {
  padding: .88rem+.84rem 0 1.5rem;
}
</style>


