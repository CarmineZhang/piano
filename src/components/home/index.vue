<template>
  <div class="main">
    <div class="fixed-header">
      <top></top>
      <search-bar @on-search="search"></search-bar>
    </div>
    <div class="index-body">
      <swiper :list="swipers"></swiper>
      <div class="index-nav">
        <div class="nav-header">
          行龙特色
        </div>
        <ul class="nav-body">
          <li @click="gotoFeature(0)" class="active">
            <i class="icon-feature icon-zero-rent"></i>
            <span class="title">零租金</span>
          </li>
          <li @click="gotoFeature(1)" class="active">
            <i class="icon-feature icon-import"></i>
            <span class="title">纯进口</span>
          </li>
          <li @click="gotoFeature(2)" class="active">
            <i class="icon-feature icon-gift"></i>
            <span class="title">有豪礼</span>
          </li>
          <li @click="gotoFeature(3)" class="active">
            <i class="icon-feature icon-buy"></i>
            <span class="title">租转购</span>
          </li>
        </ul>
      </div>
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
import bannerSrc1 from '../../assets/banner1.png'
import bannerSrc2 from '../../assets/banner2.png'
import bannerSrc3 from '../../assets/banner3.png'
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
      swipers: [
        { img: bannerSrc1, url: '/aboutus' },
        { img: bannerSrc2, url: '/pianoinfo' },
        { img: bannerSrc3, url: '/activity' }
      ]
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
    },
    gotoFeature(status) {
      this.$router.push({ name: 'feature', params: { status: status } })
    }
  }
}
</script>
<style lang="scss">
.index-nav {
  margin: 0.3rem 0;
  background-color: #fff;
  padding: 0.3rem;
  .nav-header {
    font-size: 0.3rem;
    color: #323136;
  }
  @at-root {
    .nav-body {
      padding: 0.3rem 0;
      display: flex;
      li {
        flex: 1;
        i {
          height: 1rem;
        }
        i,
        span {
          font-size: 0.28rem;
          color: #727278;
          display: block;
          text-align: center;
        }
      }
      .active {
        span {
          color: #323136;
        }
      }
    }
  }
}

.index-body {
  padding: 0.88rem+0.84rem 0 0;
  background-color: #eee;
}
</style>


