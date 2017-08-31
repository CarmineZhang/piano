<template>
  <div id="app">
    <!-- <transition :name="'ve-pop-' + (direction === 'forward' ? 'in' : 'out')"> -->
    <router-view class="router-view"></router-view>
    <!-- </transition> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'app',
  computed: {
    ...mapState([
      'direction'
    ])
  }
}
</script>
<style lang="scss" scoped>
#app {
  background: #fff;
}
</style>


