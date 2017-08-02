<template>
  <div id="app">
    <transition name="ve-pop-in">
      <router-view class="router-view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

