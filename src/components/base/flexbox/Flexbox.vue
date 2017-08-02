<template>
  <div class="ve-flexbox" :class="{'ve-flex-col': orient === 'vertical', 've-flex-row': orient === 'horizontal'}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'flexbox',
  props: {
    orient: {
      type: String,
      default: 'horizontal'
    }
  }
}
</script>