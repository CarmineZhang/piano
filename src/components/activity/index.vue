<template>
  <div>
    <top class="fixed"></top>
    <div class="activity">
      <img src="../../assets/banner3.png">
      <ul class="coupon-list">
        <li class="list-item" v-for="item in list" :key="item.id">
          <p class="content">
            <span class="item-name" v-text="item.name"></span>
            <span class="item-price">
              <em>¥</em>
              <strong v-text="item.amount"></strong>
            </span>
          </p>
          <p class="action">
            <a @click="receive(item.id)">领取</a>
          </p>
        </li>
      </ul>
      <div class="ins">
        <p>说明：</p>
        <p>1、本优惠券有效期为：1个月，超出有效期不得使用；</p>
        <p>2、优惠券不得与其他优惠券同时使用，每单只能使用一 张优惠券；
        </p>
        <p>3、使用优惠券支付订单，如果退货优惠券抵扣金额不能 退还，只退还实际支付商品金额；
        </p>
        <p>4、行龙乐器在法律范围内保留对优惠券使用明细的最终 解释权。
        </p>
      </div>
    </div>
    <ve-footer></ve-footer>
  </div>
</template>
<script>
import http from '@/libs/httpUtil'
import Top from '../top'
import VeFooter from '../footer'
export default {
  name: 'about-us',
  components: {
    Top,
    VeFooter
  },
  data() {
    return {
      list: []
    }
  },
  beforeMount() {
    this.getCoupons()
  },
  methods: {
    getCoupons() {
      http.getCoupons().then(res => {
        if (res.errNo == 0) {
          this.list = res.data.couponList
        }
      })
    },
    receive(id) {
      http.receiveCoupon(id).then(res => {
        if (res.errNo == 0) {
          let flag = res.data.flag,
            msg = ''
          if (flag === 'true') {
            msg = '领取成功'
          } else if (flag === 'exist') {
            msg = '已领取'
          } else {
            msg = '领取失败'
          }
          this.$ve.alert(msg, () => {
            this.getCoupons()
          })
        } else {
          this.$ve.alert(res.errMsg)
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 0.88rem;
}
.activity {
  padding-top: 0.88rem;
  img {
    display: block;
    width: 100%;
  }
}
.coupon-list {
  background-color: #eee;
  padding: 10px;
  .list-item {
    background-color: #fff;
    padding: 10px 10px 0;
    margin-bottom: 10px;
    display: flex;
    .content {
      flex: 1;
      span {
        display: block;
      }
      .item-name {
        font-size: 0.3rem;
        color: #323136;
      }
      .item-price {
        color: #bf3737;
        em {
          display: inline-block;
          font-size: 14px;
          vertical-align: 10px;
        }
        strong {
          font-size: 30px;
        }
      }
    }
    .action {
      position: relative;
      width: 1.6rem;
      a {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: inline-block;
        width: 1.2rem;
        line-height: 0.6rem;
        height: 0.6rem;
        background-color: #bf3737;
        border-radius: 5px;
        color: #fff;
        font-size: 0.28rem;
        text-align: center;
      }
    }
  }
}
.ins {
  padding: 0 10px 10px;
  font-size: 0.24rem;
  color: #323136;
}
</style>
