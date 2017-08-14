<template>
  <div>
    <transition name="ve-fade">
      <div class="pl-mask" v-show="maskShow"></div>
    </transition>
    <div class="search-head">
      <div class="fixed-head" :style="style">
        <top></top>
        <search-bar></search-bar>
        <ve-select @on-select-show="showMask"></ve-select>
      </div>
    </div>
    <list :data="list"></list>
  </div>
</template>
<script>
import Top from '../top/'
import SearchBar from '../base/searchbar'
import VeSelect from './select'
import List from './list'
export default {
  name: 'product-list',
  components: {
    Top,
    SearchBar,
    VeSelect,
    List
  },
  data() {
    return {
      maskShow: false,
      style: null,
      list: [{
        title: '雅马哈钢琴 YAMAHA 日本进口 YM131X',
        area: '北京',
        price: 150,
        pledge: 30000
      }, {
        title: '雅马哈钢琴 YAMAHA 日本进口 YM131X',
        area: '北京',
        price: 150,
        pledge: 30000
      }, {
        title: '雅马哈钢琴 YAMAHA 日本进口 YM131X',
        area: '北京',
        price: 150,
        pledge: 30000
      }, {
        title: '雅马哈钢琴 YAMAHA 日本进口 YM131X',
        area: '北京',
        price: 150,
        pledge: 30000
      }, {
        title: '雅马哈钢琴 YAMAHA 日本进口 YM131X',
        area: '北京',
        price: 150,
        pledge: 30000
      }, {
        title: '雅马哈钢琴 YAMAHA 日本进口 YM131X',
        area: '北京',
        price: 150,
        pledge: 30000
      }, {
        title: '雅马哈钢琴 YAMAHA 日本进口 YM131X',
        area: '北京',
        price: 150,
        pledge: 30000
      }, {
        title: '雅马哈钢琴 YAMAHA 日本进口 YM131X',
        area: '北京',
        price: 150,
        pledge: 30000
      }, {
        title: '雅马哈钢琴 YAMAHA 日本进口 YM131X',
        area: '北京',
        price: 150,
        pledge: 30000
      }]
    }
  },
  beforeMount() {
    var self = this
    window.onscroll = function () {
      var top = document.body.scrollTop || document.documentElement.scrollTop
      if (top > 50) {
        self.style = { transform: 'translateY(-1.72rem)', transition: '0.5s ease 0s' }
      } else {
        self.style = { transform: 'translateY(0px)', transition: '0.5s ease 0s' }
      }
    }
  },
  beforeDestroy() {
    window.onscroll = null
  },
  methods: {
    showMask(val) {
      this.maskShow = val
    }
  }
}
</script>
<style lang="scss">
.search-head {
  height: .88rem * 3 + 0.55rem+0.075*2;
  .fixed-head {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 104;
  }
}

.pl-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .3);
  z-index: 103;
}
</style>

