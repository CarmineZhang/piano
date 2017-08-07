<template>
  <div class="cell" :class="{'cell-access': to!==undefined}" @click="onClick">
    <slot name="hd"></slot>
    <div class="cell-bd">
      <p>
        <slot></slot>
      </p>
    </div>
    <div class="cell-ft" v-html="content" :class="valueClass"></div>
  </div>
</template>
<script>
export default {
  name: 'cell',
  props: {
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
      this.$router.push({ 'path': this.to })
    }
  }
}
</script>

