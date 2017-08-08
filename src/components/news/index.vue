<template>
  <div>
    <div class="fixed-header">
      <top></top>
      <search-bar></search-bar>
    </div>
    <list class="news-body"></list>
    <div class="fixed-footer">
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
.news-body {
  padding: .88rem+0.84rem 0 1.5rem;
}
</style>

