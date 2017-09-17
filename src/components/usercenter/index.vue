<template>
  <div>
    <my-header content="我的">
      <i class="icon-message" @click="showMessage" :class="{'icon-new-message':isNewMsg}"></i>
    </my-header>
    <div class="user-header">
      <p class="tit">当前账户</p>
      <p class="ct">
        <span>手机号：</span>
        <span v-text="phone"></span>
      </p>
    </div>
    <div class="more more-mini"></div>
    <div class="user-body">
      <cell to="/favorite">
        <div class="cell-hd cell-collect" slot="hd"></div>
        <p>收藏</p>
      </cell>
      <cell to="/orderlist">
        <div class="cell-hd cell-order" slot="hd"></div>
        <p>订单</p>
      </cell>
      <cell to="/coupon">
        <div class="cell-hd cell-coupon" slot="hd"></div>
        <p>优惠券</p>
      </cell>
      <cell to="/address">
        <div class="cell-hd cell-addr" slot="hd"></div>
        <p>地址管理</p>
      </cell>
      <cell to="/account">
        <div class="cell-hd cell-account" slot="hd"></div>
        <p>账户管理</p>
      </cell>
    </div>
    <div class="more"></div>
    <a class="btn btn-default" @click="logout">退出</a>
  </div>
</template>
<script>
import { Cell } from '../base/cell'
import http from '@/libs/httpUtil'
import storage from '@/libs/storage'
import MyHeader from '../header'
export default {
  name: 'user-center',
  components: {
    Cell,
    MyHeader
  },
  data() {
    return {
      phone: '',
      isNewMsg: false
    }
  },
  created() {
    this.getUnReadMessage()
  },
  beforeMount() {
    document.title = '我的'
    this.phone = storage.get('phone')
  },
  methods: {
    getUnReadMessage() {
      http.getUnReadMessage().then(res => {
        if (res.errNo == 0) {
          this.isNewMsg = +res.data.unreadCount > 0
        }
      })
    },
    showMessage() {
      this.$router.push('/message')
    },
    logout() {
      let loading = this.$ve.loading('处理中...')
      http.logout().then(res => {
        loading.hide()
        if (res.errNo == 0) {
          storage.clear('access-token')
          storage.clear('phone')
          this.$ve.toast('登出成功', {
            duration: 1000, callback: () => {
              this.$router.push('/')
            }
          })
        } else {
          this.$ve.alert(res.errMsg)
        }
      })
    }
  }
}
</script>
<style lang="scss">
.icon-message {
  width: 40px;
  background: url('../../assets/message.png') no-repeat;
  background-position: 50%;
  background-size: 15px;
  position: relative;
}

.icon-new-message {
  &::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 24px;
    width: 6px;
    height: 6px;
    border-radius: 3px;
    background-color: red;
  }
}

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
  padding-left: .3rem;
  .cell {
    &:last-child {
      &:after {
        display: none;
      }
    }
  }
  .cell-hd {
    margin-left: -.3rem;
    width: .6rem;
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
}

.more-mini {
  height: .3rem;
}
</style>

