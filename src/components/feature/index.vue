<template>
  <div class="main">
    <div class="fixed-header">
      <top></top>
      <search-bar @on-search="search"></search-bar>
    </div>
    <div class="index-body">
      <ul class="nav-body">
        <li @click="gotoFeature(0)" :class="{'active':status===0}">
          <i class="icon-feature icon-zero-rent"></i>
          <span>零租金</span>
        </li>
        <li @click="gotoFeature(1)" :class="{'active':status===1}">
          <i class="icon-feature  icon-import"></i>
          <span>纯进口</span>
        </li>
        <li @click="gotoFeature(2)" :class="{'active':status===2}">
          <i class="icon-feature  icon-gift"></i>
          <span>有豪礼</span>
        </li>
        <li @click="gotoFeature(3)" :class="{'active':status===3}">
          <i class="icon-feature  icon-buy"></i>
          <span>租转购</span>
        </li>
      </ul>

      <div class="feature-detail">
        <img :src="imgsrc" />
      </div>
    </div>
    <ve-footer></ve-footer>
  </div>
</template>

<script>
import Top from '../top'
import VeFooter from '../footer'
import SearchBar from '../base/searchbar'
import zeroSrc from '../../assets/img-zerorent.png'
import importSrc from '../../assets/img-import.png'
import giftSrc from '../../assets/img-gift.png'
import buySrc from '../../assets/img-buy.png'
export default {
  name: 'home',
  components: {
    Top,
    SearchBar,
    VeFooter
  },
  data() {
    return {
      status: 0,
      imgSrcs: [zeroSrc, importSrc, giftSrc, buySrc],
      imgsrc: zeroSrc
    }
  },
  watch: {
    status: {
      handler(val) {
        this.imgsrc = this.imgSrcs[val]
      },
      immediate: true
    }
  },
  beforeMount() {
    document.title = '行龙特色'
    let status = this.$store.state.route.params.status
    if (status) {
      this.status = status
    }
  },
  methods: {
    gotoFeature(status) {
      this.status = status
    },
    search(val) {
      this.$router.push({ name: 'product-list', params: { key: val } })
    }
  }
}
</script>
<style lang="scss">
.feature-detail {
  img {
    width: 100%;
  }
}
</style>


