<template>
  <div class="coupon">
    <div class="coupon-item">
      <p class="ct">
        <span class="ct-symbol">¥</span>
        <span class="ct-price">50</span>
        <span class="ct-desc">优惠券</span>
      </p>
      <p class="comment">首次租赁钢琴立减50元</p>
    </div>
    <div class="coupon-item coupon-item-blue">
      <p class="ct">
        <span class="ct-symbol">¥</span>
        <span class="ct-price">50</span>
        <span class="ct-desc">优惠券</span>
      </p>
      <p class="comment">首次租赁钢琴立减50元</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'coupon'
}
</script>
<style lang="scss">
.coupon {
  width: 6.9rem;
  margin: 0 auto;
  .coupon-item {
    height: 2.5rem;
    margin-top: .3rem;
    background: url('../../assets/coupon-1.png') no-repeat;
    background-size: 100%;
    position: relative;
    .ct {
      position: absolute;
      top: 10%;
      left: 15%;
      color: #fff;
      .ct-symbol {
        font-size: .4rem;
      }
      .ct-price {
        font-size: .6rem;
      }
      .ct-desc {
        font-size: .34rem;
      }
    }
    .comment {
      position: absolute;
      bottom: 20%;
      left: 15%;
      color: #fff;
      font-size: .28rem;
    }
  }
  .coupon-item-blue {
    background: url('../../assets/coupon-2.png') no-repeat;
    background-size: 100%;
  }
}
</style>

