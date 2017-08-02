<template>
  <a href="javascript:;" class="tab-bar-item" :class="[{'on':isActive},iconClass]" @click="onItemClick()">
    {{textContent}}</a>
</template>
<script>
export default {
  name: 'tabbar-item',
  props: {
    iconClass: String,
    textContent: String,
    selected: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isActive() {
      return this.$parent.currentIndex === this.index
    }
  },
  methods: {
    onItemClick() {
      this.$parent.updateCurrentIndex(this.index)
      this.$emit('on-click')
    }
  }
}
</script>
<style lang="scss">
.tab-bar-item {
  position: relative;
  display: block;
  flex: 1;
  text-align: center;
  line-height: 1;
  font-size: 12px;
  color: #999;
  &:before {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    margin: 7px auto 5px;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 100%;
  }

  &.on {
    color: #e93b3d;
  }
}
</style>
