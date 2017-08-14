<template>
  <div class="search-bar" id="searchBar" :class="{'search-bar-focusing':isFocus}">
    <form class="search-bar-form">
      <i class="weui-icon-search"></i>
      <input type="search" v-model="searchValue" class="search-bar-input" v-focus="isFocus" placeholder="输入钢琴品牌型号关键字" @focus="iptFocus">
      <a href="javascript:" class="weui-icon-clear" @click="clear" v-show="isFocus&&searchValue!==''"></a>
    </form>
    <a href="javascript:" class="search-bar-cancel-btn" @click="cancel">取消</a>
  </div>
</template>
<script>
export default {
  name: 've-searchbar',
  data() {
    return {
      isFocus: false,
      searchValue: ''
    }
  },
  watch: {
    searchValue(val, oldval) {
      if (val !== oldval) {
        console.log(val)
      }
    }
  },
  methods: {
    iptFocus() {
      this.isFocus = true
    },
    cancel() {
      this.searchValue = ''
      this.isFocus = false
    },
    clear() {
      this.searchValue = ''
      this.isFocus = true
    }
  }
}
</script>

