<template>
  <div class='tab-bar'>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'tabbar',
  data() {
    return {
      currentIndex: -1
    }
  },
  mounted() {
    this.updateIndex()
  },
  methods: {
    updateIndex() {
      if (!this.$children || !this.$children.length) return
      let children = this.$children
      for (let i = 0; i < children.length; i++) {
        children[i].index = i
        if (children[i].selected) {
          this.currentIndex = i
        }
      }
    },
    updateCurrentIndex(val) {
      this.currentIndex = val
    }
  }
}
</script>
<style lang="scss">
@import "mixin";
.tab-bar {
  margin: 0 auto;
  height: 50px;
  display: flex;
  background-color: #fff;
  z-index: 310;
  @include beforeline();
}
</style>
