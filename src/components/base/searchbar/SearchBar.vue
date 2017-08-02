<template>
  <div class="search-bar" id="searchBar" :class="{'search-bar-focusing':isFocus}">
    <form class="search-bar-form">
      <div class="search-bar-box">
        <i class="weui-icon-search"></i>
        <input type="search" v-model="searchValue" class="search-bar-input" v-focus="isFocus" placeholder="搜索" required="" @blur="inputBlur">
        <a href="javascript:" class="weui-icon-clear" @click="clear"></a>
      </div>
      <label class="search-bar-label" @click="labelClick" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
        <i class="weui-icon-search"></i>
        <span>搜索</span>
      </label>
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
  methods: {
    labelClick() {
      this.isFocus = true
    },
    inputBlur() {
      this.isFocus = false
      if (this.searchValue.length) {
        this.$emit('on-change', this.searchValue)
      }
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

