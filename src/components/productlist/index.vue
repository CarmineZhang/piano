<template>
  <div>
    <div class="search-head">
      <div class="fixed-head" :style="style">
        <top></top>
        <search-bar></search-bar>
        <ve-select :brand-dic="brandDic" :rent-day="rentDay" :rent-month="rentMonth"></ve-select>
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
import http from '@/libs/httpUtil'
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
      list: [],
      brandDic: [],
      rentDay: [],
      rentMonth: [],
    }
  },
  created() {
    http.getPiano().then((res) => {
      if (res.errNo == 0) {
        this.list = res.data.list
        this.brandDic = res.data.brandDic
        this.rentDay = res.data.rentDay
        this.rentMonth = res.data.rentMonth
      }
    })
  },
  beforeMount() {
    var self = this
    window.onscroll = function() {
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
</style>

