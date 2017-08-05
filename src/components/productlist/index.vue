<template>
  <div>
    <transition name="ve-fade">
      <div class="pl-mask" v-show="maskShow"></div>
    </transition>
    <div class="search-head">
      <div class="fixed-head">
        <top></top>
        <search-bar></search-bar>
        <ve-select @on-select-show="showMask"></ve-select>
      </div>
    </div>
    <list></list>
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
      maskShow: false
    }
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
  height: .88rem * 3;
  .fixed-head {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 104;
  }
}
</style>

