<template>
  <div>
    <my-header content="确认订单"></my-header>
    <div class="cost">
      <div class="title">费用核算：</div>
      <div>
        <cell title="押金：">
          <span>{{detail.deposit|ToThousands}}</span>
        </cell>
        <cell title="租金：">
          <span>
            <em>¥</em>{{detail.rent|ToThousands}}</span>
          </span>
          <span class="cell-desc">租期{{detail.leaseNumName}}</span>
        </cell>
        <cell title="运费：">
          <span>{{detail.deliveryPrice|ToThousands}}</span>
        </cell>
        <cell to="" title="优惠券：" @on-click="showSelectCoupon">
          <template v-if="couponId!==0">
            ¥{{couponAmount}}
          </template>
          <template v-else>
            无
          </template>
        </cell>
        <cell title="预付费用：">
          <span>
            <em>¥</em>{{detail.downPay|ToThousands}}</span>
          <span class="cost-comment">（部分租金+运费）</span>
          </span>
        </cell>
        <cell title="总费用：">
          <span>
            <em>¥</em>{{detail.deposit+detail.rent+detail.deliveryPrice|ToThousands}}</span>
          <span class="cost-comment">（押金+租金+运费）</span>
          </span>
        </cell>
      </div>
    </div>
    <div class="cost-more"></div>
    <coupon v-model="couponShow" @on-confirm="couponConfirm"></coupon>
    <div class="order-action fixed-footer">
      <a class="submit" @click="submit">
        提交订单
      </a>
    </div>
  </div>
</template>
<script>
import { Cell } from '../base/cell'
import MyHeader from '@/components/header'
import Coupon from './selectcoupon.vue'
import http from '@/libs/httpUtil'
export default {
  name: 'order-detail',
  data() {
    return {
      id: '',
      couponShow: false,
      couponId: -1,
      couponAmount: 0
    }
  },
  computed: {
    detail() {
      return this.$store.state.selectPiano
    }
  },
  mounted() {
    let query = this.$store.state.route.query
    let id = query.id
    if (id) {
      this.id = id
    } else {
      this.$router.go(-1)
    }
  },
  beforeMount() {
    document.title = '订单详情'
  },
  components: {
    Cell,
    MyHeader,
    Coupon
  },
  methods: {
    couponConfirm(item) {
      if (item) {
        this.couponId = item.id
        this.couponAmount = item.amount
      }
    },
    showSelectCoupon() {
      this.couponShow = true
    },
    submit() {
      let loading = this.$ve.loading('处理中...')
      http
        .order(this.detail, this.id, this.couponId)
        .then(res => {
          loading.hide()
          if (res.errNo == 0) {
            this.$ve.alert('下单成功', () => {
              this.$router.push({
                name: 'order-settle',
                query: { id: res.data.id }
              })
            })
          } else {
            this.$ve.alert(res.errMsg)
          }
        })
        .catch(() => {
          loading.hide()
        })
    }
  }
}
</script>
<style lang="scss">
.cost {
  padding-left: 0.3rem;
  .title {
    position: relative;
    padding: 0.3rem 0;
    color: #323136;
    font-size: 0.32rem;
    @include bottomline(#ccc);
  }
  .cell {
    &:last-child {
      &:after {
        display: none;
      }
    }
    .cell-comment {
      font-size: 0.24rem;
      color: #bf3737;
    }
    .cell-hd {
      font-size: 0.3rem;
      color: #323136;
    }
    .cell-bd {
      font-size: 0.3rem;
      color: #323136;
      .cell-desc {
        font-size: 0.28rem;
        color: #ccc;
      }
    }
  }
}

.cost-more {
  height: 0.3rem;
}

.order-action {
  display: flex;
  height: 0.88rem;
  line-height: 0.88rem;
  .submit {
    flex: 1;
    background-color: #bf3737;
    text-align: center;
    font-size: 0.3rem;
    color: #fff;
  }
}
</style>


