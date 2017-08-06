<template>
  <div class="order-cp">
    <div class="success-img">
      <img src="../../assets/success.png" alt="">
    </div>
    <div class="success-msg">
      恭喜您，租赁成功！
    </div>
    <a class="action">2秒后自动转到订单详情</a>
  </div>
</template>
<script>
export default {
  name: 'order-complete'
}
</script>
<style lang="scss">
.order-cp {
  width: 7.5rem;
  height: 6rem;
  background-color: #fff;
  padding-top: 1.6rem;
  .success-img {
    height: 1.01rem;
    text-align: center;
    img {
      width: 1.2rem;
      height: auto;
    }
  }
  .success-msg {
    margin-top: .5rem;
    font-size: .3rem;
    color: #bf3737;
    text-align: center;
  }
  .action {
    display: block;
    text-decoration: underline;
    margin-top: .5rem;
    font-size: .24rem;
    color: #2c2c2c;
    text-align: center;
  }
}
</style>

