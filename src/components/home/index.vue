<template>
  <div class="main">
    <flexbox class="top-nav">
      <flexbox-item class="nav-left">
        <img src="../../assets/rent.png" alt="">
      </flexbox-item>
      <flexbox-item class="nav-center">
        <img src="../../assets/index.png" alt="">
      </flexbox-item>
      <flexbox-item class="nav-right">
        <img src="../../assets/me.png" alt="">
      </flexbox-item>
    </flexbox>
    <search-bar></search-bar>
    <swiper :list="swipers"></swiper>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem } from '../base/flexbox'
import SearchBar from '../base/searchbar'
import Swiper from '../base/swiper'
import bannerSrc from '../../assets/banner.png'
export default {
  name: 'home',
  components: {
    Flexbox,
    FlexboxItem,
    SearchBar,
    Swiper
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
.top-nav {
  height: .88rem;
  line-height: .88rem;
  font-size: 0;
  background-color: #000;
  .nav-left {
    padding-left: .3rem;
    text-align: left;
    img {
      vertical-align: middle;
      width: .41rem;
      height: .37rem;
    }
  }
  .nav-center {
    img {
      vertical-align: middle;
      width: .33rem;
      height: .52rem;
    }
  }
  .nav-right {
    padding-right: .3rem;
    text-align: right;
    img {
      vertical-align: middle;
      width: .36rem;
      height: .41rem;
    }
  }
}
</style>

