<template>
  <div>
    <div class="cost">
      <div class="title">费用核算：</div>
      <div>
        <cell title="押金：">
          <span>{{detail.termDeposit|ToThousands}}</span>
        </cell>
        <cell title="租金：">
          <span>
            <em>¥</em>{{detail.leaseAmount|ToThousands}}</span>
          </span>
          <span class="cell-desc">租期{{detail.leaseNum}}</span>
        </cell>
        <cell title="运费：">
          <span>{{detail.deliveryPrice|ToThousands}}</span>
        </cell>
        <cell to="" title="优惠券：">
          ¥20
        </cell>
        <cell title="预付费用：">
          <span>
            <em>¥</em>{{detail.downPayment|ToThousands}}</span>
          <span class="cost-comment">（部分租金+运费）</span>
          </span>
        </cell>
        <cell title="总费用：">
          <span>
            <em>¥</em>{{detail.totalAmount|ToThousands}}</span>
          <span class="cost-comment">（押金+租金+运费）</span>
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
          <em>¥</em>{{detail.downPayment|ToThousands}}</span>
        </span>
      </div>
      <a class="cost-ok" @click="pay">
        确认支付
      </a>
    </div>
  </div>
</template>
<script>
import { Cell } from '../base/cell'
import SelectPay from './selectpay.vue'
import http from '@/libs/httpUtil'
export default {
  name: 'order-detail',
  data() {
    return {
      detail: {},
      h5pay: ''
    }
  },
  created() {
    let id = this.$store.state.route.query.id
    if (id) {
      http.oderInfo(id).then(res => {
        if (res.errNo == 0) {
          this.detail = res.data
        }
      })
    } else {
      this.$router.go(-1)
    }
  },
  beforeMount() {
    document.title = '订单详情'
  },
  components: {
    Cell,
    SelectPay
  },
  methods: {
    pay() {
      let loading = this.$ve.loading('处理中...')
      http.wxPay(this.detail.orderSn, this.detail.downPayment, '钢琴支付').then(res => {
        loading.hide()
        if (res.errNo == 0) {
          window.location.href = res.data.codeUrl
        } else {
          this.$ve.alert(res.errMsg)
        }
      })
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


