<template>
  <div>
    <my-header content="优惠券"></my-header>
    <div class="coupon">
      <div class="coupon-item" v-for="(item,index) in list" :key="item.id" :class="getClass(item,index)">
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
import MyHeader from '../header'
export default {
  name: 'coupon',
  components: {
    MyHeader
  },
  data() {
    return {
      list: []
    }
  },
  created() {
    this.getList()
  },
  beforeMount() {
    document.title = '优惠券'
  },
  methods: {
    getClass(item, index) {
      let et = new Date(item.endTime)
      let overdue = new Date() > et
      if (overdue) {
        return 'coupon-item-overdue'
      } else {
        if (item.isUse == '1') {
          return 'coupon-item-used'
        } else if (item.isUse == '0' && index % 2 == 1) {
          return 'coupon-item-blue'
        } else if (item.isUse == '0' && index % 2 == 0) {
          return 'coupon-item-red'
        }
      }
    },
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
    margin-top: 0.3rem;
    position: relative;
    .ct {
      position: absolute;
      top: 10%;
      left: 15%;
      color: #fff;
      .ct-symbol {
        font-size: 0.4rem;
      }
      .ct-price {
        font-size: 0.6rem;
      }
      .ct-desc {
        font-size: 0.34rem;
      }
    }
    .comment {
      position: absolute;
      bottom: 20%;
      left: 15%;
      color: #fff;
      font-size: 0.28rem;
    }
  }
  .coupon-item-red {
    background: url('../../assets/coupon-1.png') no-repeat;
    background-size: 100%;
  }
  .coupon-item-blue {
    background: url('../../assets/coupon-2.png') no-repeat;
    background-size: 100%;
  }
  .coupon-item-used {
    background: url('../../assets/used.png') no-repeat;
    background-size: 100%;
  }
  .coupon-item-overdue {
    background: url('../../assets/overdue.png') no-repeat;
    background-size: 100%;
  }
}
</style>

