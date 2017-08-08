<template>
  <div>
    <div class="user-header">
      <p class="tit">当前账户</p>
      <p class="ct">
        <span>手机号：</span>
        <span>13682374876</span>
      </p>
    </div>
    <div class="more more-mini"></div>
    <div class="user-body">
      <cell to="">
        <div class="cell-hd cell-collect" slot="hd"></div>
        <p>收藏</p>
      </cell>
      <cell to="/orderlist">
        <div class="cell-hd cell-order" slot="hd"></div>
        <p>订单</p>
      </cell>
      <cell to="/coupon">
        <div class="cell-hd cell-coupon" slot="hd"></div>
        <p>优惠券</p>
      </cell>
      <cell to="">
        <div class="cell-hd cell-addr" slot="hd"></div>
        <p>地址管理</p>
      </cell>
      <cell to="/account">
        <div class="cell-hd cell-account" slot="hd"></div>
        <p>账户管理</p>
      </cell>
    </div>
    <div class="more"></div>
    <a class="btn btn-default">退出</a>
  </div>
</template>
<script>
import { Cell } from '../base/cell'
export default {
  name: 'user-center',
  components: {
    Cell
  }
}
</script>
<style lang="scss">
.user-header {
  height: 1.3rem-2*0.2rem;
  background-color: #bf3737;
  padding: .2rem .3rem;
  .tit {
    font-size: .28rem;
    color: #fff;
    line-height: ((1.3rem-2*0.2rem) /2)
  }
  .ct {
    font-size: .24rem;
    color: #f5a8a8;
    line-height: ((1.3rem-2*0.2rem)/2)
  }
}

.user-body {
  .cell-hd {
    width: 1rem;
  }
  .cell-collect {
    background: url('../../assets/me-collect.png') no-repeat;
    background-position: 0 50%;
    background-size: .3rem .26rem;
  }
  .cell-coupon {
    background: url('../../assets/me-coupon.png') no-repeat;
    background-position: 0 50%;
    background-size: .39rem .26rem;
  }
  .cell-order {
    background: url('../../assets/me-order.png') no-repeat;
    background-position: 0 50%;
    background-size: .3rem .3rem;
  }
  .cell-addr {
    background: url('../../assets/me-addr.png') no-repeat;
    background-position: 0 50%;
    background-size: .24rem .28rem;
  }
  .cell-account {
    background: url('../../assets/me-account.png') no-repeat;
    background-position: 0 50%;
    background-size: .28rem .28rem;
  }
}

.more-mini {
  height: .3rem;
}
</style>

