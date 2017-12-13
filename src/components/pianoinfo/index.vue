<template>
  <div>
    <top class="fixed"></top>
    <div class="imgBody">
      <img src="../../assets/piano1.jpg">
      <img src="../../assets/piano2.jpg">
      <img src="../../assets/piano3.jpg">
    </div>
    <ve-footer></ve-footer>
  </div>
</template>
<script>
import Top from '../top'
import VeFooter from '../footer'
export default {
  name: 'piano-info',
  components: {
    Top,
    VeFooter
  }
}
</script>
<style lang="scss" scoped>
.fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 0.88rem;
}
.imgBody {
  padding-top: 0.88rem;
  img {
    display: block;
    width: 100%;
  }
}
</style>
