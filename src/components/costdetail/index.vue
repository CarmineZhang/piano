<template>
  <div>
    <div class="cost">
      <div class="title">费用核算：</div>
      <cell title="预付押金：" to="" @on-click="showDeposit()">
        <span>¥2,000</span>
        <span class="cell-desc">总押金（20,000）</span>
      </cell>
      <cell>
        <div class="cell-comment">
          *线上预付20%的押金总额，货到付剩余押金。
        </div>
      </cell>
      <cell to="" title="租金：">
        <span>¥300</span>
        <span class="cell-desc">租期30天</span>
      </cell>
      <cell title="运费：">
        ¥2,000
      </cell>
      <cell to="" title="优惠券：">
        ¥20
      </cell>
  
    </div>
    <div class="cost-action fixed-footer">
      <div class="order-cost">
        <span class="tit">费用总计：</span>
        <span class="ct">¥2,000</span>
      </div>
      <a href="" class="cost-ok">
        确认支付
      </a>
    </div>
    <select-deposit v-model="selectDepositShow"></select-deposit>
  </div>
</template>
<script>
import { Cell } from '../base/cell'
import SelectDeposit from './selectdeposit'
export default {
  name: 'cost-detail',
  data() {
    return {
      selectDepositShow: false
    }
  },
  components: {
    Cell,
    SelectDeposit
  },
  methods: {
    showDeposit() {
      this.selectDepositShow = true;
    }
  }
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

    .cell-comment {
      font-size: .24rem;
      color: #bf3737;
    }
    .cell-hd {
      font-size: .3rem;
      color: #323136;
    }
    .cell-bd {
      font-size: .3rem;
      color: #323136;
      .cell-desc {
        font-size: .28rem;
        color: #ccc;
      }
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


