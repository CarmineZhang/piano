<template>
  <div>
    <div class="coupon">
      <div class="coupon-item" v-for="(item,index) in list" :key="item.id" :class="{'coupon-item-blue':index%2==1}">
        <p class="ct">
          <span class="ct-symbol">¥</span>
          <span class="ct-price" v-text="item.amount"></span>
          <span class="ct-desc"></span>
        </p>
        <p class="comment" v-text="item.name"></p>
      </div>
    </div>
  </div>
</template>
<script>
import http from '@/libs/httpUtil'
export default {
  name: 'coupon',
  data() {
    return {
      list: []
    }
  },
  created() {
    this.getList()
  },
  beforeMount() {
    document.title = "优惠券"
  },
  methods: {
    getList() {
      http.getCouponMemberInfos(1, 10).then(res => {
        if (res.errNo == 0) {
          this.list = res.data.dataList
        }
      })
    }
  }
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

