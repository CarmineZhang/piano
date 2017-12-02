<template>
  <div>
    <transition name='ve-mask'>
      <div class="mask" v-if="show" @click="close"></div>
    </transition>
    <transition name="ve-slide">
      <div class="st-deposit" v-if="show">
        <div class="sd-header">选择优惠券
          <span class="unuse" @click="close">暂不使用</span>
        </div>
        <div class="sd-body">
          <div class="sd-item" @click="select(item)" v-for="item in list" :key="item.id">
            <div class="sd-item-bd">
              <span>{{item.name}}</span>
              <span>
                <em>¥</em>
                <strong>{{item.amount}}</strong>
              </span>
            </div>
            <div class="sd-item-ft" :class="{'sd-item-default':couponId==item.id}"></div>
          </div>
        </div>
        <div class="sd-footer">
          <a href="javascript:void(0)" class="btn btn-primary" @click="confirm">确定</a>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import http from '@/libs/httpUtil'
export default {
  name: 'select-deposit',
  props: {
    value: Boolean
  },
  data() {
    return {
      show: false,
      selectCoupon: null,
      couponId: 0,
      list: []
    }
  },
  beforeMount() {
    this.getCoupons()
  },
  watch: {
    value(val) {
      this.show = val
    },
    show(val) {
      this.$emit('input', val)
    }
  },
  methods: {
    confirm() {
      if (!this.selectCoupon) {
        this.$ve.alert('请选择优惠券')
      } else {
        this.show = false
        this.$emit('on-confirm', this.selectCoupon)
      }
    },
    getCoupons() {
      http.getPayCoupons().then(res => {
        if (res.errNo == 0) {
          this.list = res.data.couponList
        }
      })
    },
    select(item) {
      this.selectCoupon = item
      this.couponId = item.id
    },
    close() {
      this.show = false
      this.couponId = 0
      this.$emit('on-confirm')
    }
  }
}
</script>
<style lang="scss">
.st-deposit {
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: #fff;
  width: 100%;
  height: 8rem;
  z-index: 1001;
  .sd-header {
    line-height: 40px;
    text-align: center;
    font-size: 0.3rem;
    color: #323136;
    position: relative;
  }
  .unuse {
    position: absolute;
    top: 0;
    right: 10px;
    height: 40px;
    line-height: 40px;
    width: 60px;
    font-size: 0.28rem;
    color: #666;
  }
  .sd-body {
    width: 7.2rem;
    margin: 0 auto;
    .sd-item {
      height: 0.88rem;
      line-height: 0.88rem;
      position: relative;
      display: flex;
      @include bottomline(#ccc);
      .sd-item-bd {
        flex: 1;
        font-size: 0.28rem;
        color: #323136;
      }
      .sd-item-ft {
        padding-left: 0.8rem;
        position: relative;
        &::before {
          content: '';
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
          background: url('../../assets/select-no-check.png') no-repeat;
          background-position: 0 50%;
          background-size: 0.4rem;
        }
      }
      .sd-item-default {
        &::before {
          background: url('../../assets/select-checked.png') no-repeat;
          background-position: 0 50%;
          background-size: 0.4rem;
        }
      }
    }
  }
  .sd-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0.88rem;
  }
}
</style>

