<template>
  <div>
    <div class="news-fixed-header">
      <top></top>
      <search-bar></search-bar>
    </div>
    <list class="news-body"></list>
    <div class="news-fixed-footer">
      <ve-footer></ve-footer>
    </div>
  </div>
</template>
<script>
import Top from '../top'
import SearchBar from '../base/searchbar'
import VeFooter from '../footer'
import List from './list'
export default {
  name: 'news',
  components: {
    Top,
    SearchBar,
    VeFooter,
    List
  }
}
</script>
<style lang="scss">
.news-fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

.news-body {
  padding: .88rem*2 0 1.5rem;
}

.news-fixed-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 101;
}
</style>

