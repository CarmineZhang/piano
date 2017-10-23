<template>
  <div>
    <top class="fixed"></top>
    <div class="imgBody">
      <img src="../../assets/aboutus.jpg">
    </div>
    <ve-footer></ve-footer>
  </div>
</template>
<script>
import Top from '../top'
import VeFooter from '../footer'
export default {
  name: 'about-us',
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
    width: 100%;
  }
}
</style>
