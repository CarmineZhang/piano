<template>
  <div class="main">
    <transition name="ve-pop-in">
      <router-view class="router-view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {}
  }
}
</script> 
<style>
.router-view {
  width: 100%;
  padding-bottom: 50px;
}
</style>

