<template>
  <div class="search-bar" id="searchBar" :class="{'search-bar-focusing':isFocus}">
    <form class="search-bar-form">
      <i class="weui-icon-search"></i>
      <input type="search" v-model="searchValue" class="search-bar-input" v-focus="isFocus" @search="search" placeholder="输入钢琴品牌型号关键字" @focus="iptFocus">
      <a class="weui-icon-clear" @click="clear" v-show="isFocus&&searchValue!==''"></a>
    </form>
    <a class="search-bar-cancel-btn" @click="cancel" v-text="actionText"></a>
  </div>
</template>
<script>
export default {
  name: 've-searchbar',
  data() {
    return {
      isFocus: false,
      searchValue: '',
      actionText: '取消'
    }
  },
  props: {
    defaultValue: String
  },
  mounted() {
    this.searchValue = this.defaultValue
  },
  watch: {
    defaultValue(val) {
      console.log(val)
      this.searchValue = val
    },
    searchValue(val) {
      if (val === '') {
        this.actionText = '取消'
      } else {
        this.actionText = '搜索'
      }
    }
  },
  methods: {
    iptFocus() {
      this.isFocus = true
    },
    cancel() {
      if (this.searchValue !== '') {
        this.$emit('on-search', this.searchValue)
      } else {
        this.isFocus = false
      }
    },
    clear() {
      this.searchValue = ''
      this.isFocus = true
      this.$emit('on-change', this.searchValue)
    },
    search() {
      this.$emit('on-search', this.searchValue)
    }
  }
}
</script>

