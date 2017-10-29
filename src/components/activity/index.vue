<template>
  <div class="activity">
    <top></top>
    <div>
      <img src="../../assets/banner3.png">
    </div>
    <ul class="coupon-list">
      <li class="list-item" v-for="item in list" :key="item.id">
        <p class="content">
          <span class="item-name" v-text="item.name"></span>
          <span class="item-price"><em>¥</em><strong v-text="item.amount"></strong></span>
        </p>
        <p class="action">
          <a @click="receive(item.id)">领取</a>
        </p>
      </li>
    </ul>
    <ve-footer class="footer-fixed"></ve-footer>
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
          this.$ve.alert('领取成功', () => {
            this.getCoupons()
          })
        }else{
          this.$ve.alert(res.errMsg)
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.footer-fixed {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1.5rem;
}
.activity {
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
  }
}
.coupon-list {
  background-color: #eee;
  padding: 20px 10px;
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
</style>
