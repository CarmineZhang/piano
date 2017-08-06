<template>
  <div>
    <div class="cost">
      <div class="title">费用核算：</div>
      <div class="cell">
        <div class="cell-hd">预付押金：</div>
        <div class="cell-bd">
          <span>¥2,000</span>
          <span class="cell-desc">总押金（20,000）</span>
        </div>
      </div>
      <div class="cell">
        <div class="cell-comment">
          *线上预付20%的押金总额，货到付剩余押金。
        </div>
      </div>
      <div class="cell cell-access">
        <div class="cell-hd">租金：</div>
        <div class="cell-bd">
          <span>¥300</span>
          <span class="cell-desc">租期30天</span>
        </div>
        <div class="cell-ft"></div>
      </div>
      <div class="cell">
        <div class="cell-hd">运费：</div>
        <div class="cell-bd">
          ¥2,000
        </div>
      </div>
      <div class="cell cell-access">
        <div class="cell-hd">优惠券：</div>
        <div class="cell-bd">¥20</div>
        <div class="cell-ft">
        </div>
      </div>
    </div>
    <div class="more">
    </div>
    <div class="cost-action">
      <div class="order-cost">
        <span class="tit">费用总计：</span>
        <span class="ct">¥2,000</span>
      </div>
      <a href="" class="cost-ok">
        确认支付
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'cost-detail'
}
</script>
<style lang="scss">
.cost {
  margin: 0 auto;
  width: 6.9rem;
  .title {
    position: relative;
    padding: .3rem 0;
    color: #323136;
    font-size: .32rem;
    @include bottomline(#ccc);
  }
  .cell {
    position: relative;
    display: flex;
    height: .88rem;
    line-height: .88rem;
    @include bottomline(#ccc);
    .cell-comment {
      font-size: .24rem;
      color: #bf3737;
    }
    .cell-hd {
      font-size: .3rem;
      color: #323136;
    }
    .cell-bd {
      flex: 1;
      font-size: .3rem;
      color: #323136;
      .cell-desc {
        font-size: .28rem;
        color: #ccc;
      }
    }
  }
  .cell-access {
    .cell-ft {
      padding-right: 20px;
      position: relative;
      @include arrow-right(6px);
    }
  }
}

.cost-action {
  display: flex;
  height: .88rem;
  line-height: .88rem;
  .order-cost {
    flex: 1;
    font-size: .28rem;
    background-color: #7f7c8b;
    text-align: center;
    color: #fff;
    .tit {
      font-size: .28rem;
    }
    .ct {
      font-size: .34rem;
    }
  }
  .cost-ok {
    width: 1.8rem;
    background-color: #bf3737;
    text-align: center;
    font-size: .3rem;
    color: #fff;
  }
}
</style>


