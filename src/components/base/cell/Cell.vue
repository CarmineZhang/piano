<template>
  <div class="cell" :class="{'cell-access': to!==undefined}" @click="onClick">
    <div class="cell-hd" v-if="title" v-text="title"></div>
    <slot name="hd" v-else></slot>
    <div class="cell-bd">
      <slot></slot>
    </div>
    <div class="cell-ft" v-html="content" :class="valueClass"></div>
  </div>
</template>
<script>
export default {
  name: 'cell',
  props: {
    title: String,
    content: String,
    arrowDirection: String,
    to: String
  },
  computed: {
    valueClass() {
      return {
        've-cell-arrow-transition': !!this.arrowDirection,
        've-cell-arrow-up': this.arrowDirection === 'up',
        've-cell-arrow-down': this.arrowDirection === 'down'
      }
    }
  },
  methods: {
    onClick(e) {
      this.$emit('on-click', e)
      if (this.to !== '') {
        this.$router.push({ 'path': this.to })
      }
    }
  }
}
</script>

