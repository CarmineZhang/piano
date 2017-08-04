<template>
  <div class="main">
    <top></top>
    <search-bar></search-bar>
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
    <ve-footer></ve-footer>
  </div>
</template>

<script>
import Top from '../top'
import VeFooter from './footer'
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
.more {
  height: .6rem;
  line-height: .6rem;
  background-color: #eee;
  text-align: center;
  font-size: .24rem;
  color: #323136;
  a {
    display: inline-block;
  }
}
</style>

