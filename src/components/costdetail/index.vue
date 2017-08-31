<template>
  <div>
    <div class="cost">
      <div class="title">费用核算：</div>
      <div>
        <cell title="押金：" to="">
          <!-- <span>¥2,000</span> -->
          <span>{{piano.deposit|ToThousands}}</span>
        </cell>
        <!-- <cell>
                              <div class="cell-comment">
                                *线上预付20%的押金总额，货到付剩余押金。
                              </div>
                            </cell> -->
        <cell title="租金：">
          <span>
            <em>¥</em>{{piano.rent*piano.leaseNum|ToThousands}}</span>
          </span>
          <span class="cell-desc">租期{{piano.leaseName}}</span>
        </cell>
        <cell title="运费：">
          ¥2,000
        </cell>
        <cell to="" title="优惠券：">
          ¥20
        </cell>
        <cell title="预付费用：">
          <span>
            <em>¥</em>{{piano.pay|ToThousands}}</span>
          <span class="cost-comment">（部分租金+运费）</span>
          </span>
        </cell>
      </div>
    </div>
    <div class="cost-more"></div>
    <select-pay></select-pay>
    <div class="cost-action fixed-footer">
      <div class="order-cost">
        <span class="tit">费用总计：</span>
        <span class="ct">
          <em>¥</em>{{piano.pay|ToThousands}}</span>
        </span>
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
import SelectPay from './selectpay.vue'
export default {
  name: 'cost-detail',
  data() {
    return {
      selectDepositShow: false
    }
  },
  computed: {
    piano() {
      return this.$store.state.selectPiano
    }
  },
  components: {
    Cell,
    SelectDeposit,
    SelectPay
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
  padding-left: .3rem;
  .title {
    position: relative;
    padding: .3rem 0;
    color: #323136;
    font-size: .32rem;
    @include bottomline(#ccc);
  }
  .cell {
    &:last-child {
      &:after {
        display: none;
      }
    }
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

.cost-more {
  height: .3rem;
}

.cost-comment {
  color: #bf3737;
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
      em {
        font-size: .28rem;
      }
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


