<template>
  <div class="activity">
    <top></top>
    <div>
      <img src="../../assets/banner3.png">
    </div>
    <div class="action">
        <a>立即领取</a>
    </div>
    <ve-footer class="footer-fixed"></ve-footer>
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
.footer-fixed {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1.5rem;
}
.activity {
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
  }
  .action {
    flex: 1;
    background-color: #fff;
    text-align: center;
    padding-top: 0.6rem;
    height: 6.67rem*2-1.5rem-0.88rem-6rem-0.6rem;
    a {
      display: inline-block;
      width: 3rem;
      line-height: 0.88rem;
      height: 0.88rem;
      background-color: #bf3737;
      border-radius: 5px;
      color: #fff;
      font-size: 0.3rem;
    }
  }
}
</style>
