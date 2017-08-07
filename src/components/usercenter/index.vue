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
      <div class="cell">
        <div class="cell-hd cell-collect"></div>
        <div class="cell-bd">收藏</div>
        <div class="cell-ft"></div>
      </div>
      <div class="cell">
        <div class="cell-hd cell-order"></div>
        <div class="cell-bd">订单</div>
        <div class="cell-ft"></div>
      </div>
      <div class="cell">
        <div class="cell-hd cell-coupon"></div>
        <div class="cell-bd">优惠券</div>
        <div class="cell-ft"></div>
      </div>
      <div class="cell">
        <div class="cell-hd cell-addr"></div>
        <div class="cell-bd">地址管理</div>
        <div class="cell-ft"></div>
      </div>
      <div class="cell">
        <div class="cell-hd cell-account"></div>
        <div class="cell-bd">账户管理</div>
        <div class="cell-ft"></div>
      </div>
    </div>
    <div class="more"></div>
    <a class="user-op">退出</a>
  </div>
</template>
<script>
export default {
  name: 'user-center'
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
  .cell {
    padding: 10px 15px;
    display: flex;
    position: relative;
    @include bottomline();
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
    .cell-bd {
      flex: 1;
      font-size: .28rem;
      color: #323136;
    }
    .cell-ft {
      position: relative;
      padding-right: 20px;
      @include arrow-right(6px);
    }
  }
}

.user-op {
  display: block;
  height: .88rem;
  line-height: .88rem;
  text-align: center;
  background-color: #928f9c;
  font-size: .3rem;
  color: #fff;
}

.more-mini {
  height: .3rem;
}
</style>

