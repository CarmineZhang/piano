<template>
  <div>
    <div class="addr-add">
      <div class="addr-title">新增地址</div>
      <div class="addr-add-body">
        <div class="form-item">
          <input type="text" class="item-bd ipt" v-model="receiverName" placeholder="收货人姓名">
        </div>
        <div class="form-item">
          <div class="item-hd">+86</div>
          <input type="tel" class="item-bd ipt" v-model="phone" placeholder="手机号码">
        </div>
        <div class="form-item">
          <input type="text" class="item-bd ipt" v-model="postcode" placeholder="邮政编码">
        </div>
        <div class="form-item" @click="showArea">
          <input type="text" class="item-bd ipt" placeholder="收货地址" readonly>
        </div>
        <div class="form-item">
          <input type="text" class="item-bd ipt" v-model="detail" placeholder="详细地址">
        </div>
        <div class="addr-default">
          <div class="item-bd">
            是否设为默认地址
          </div>
          <ve-switch @on-change="setDefault"></ve-switch>
        </div>
      </div>
      <div class="addr-op">
        <a class="btn btn-primary" @click="add">确定</a>
        <a class="btn btn-default" @click="back">取消</a>
      </div>
    </div>
    <select-area v-model="areaShow"></select-area>
  </div>
</template>
<script>
import VeSwitch from '../base/switch/'
import SelectArea from './selectarea'
import http from '@/libs/httpUtil'
export default {
  name: 'add-address',
  components: {
    VeSwitch,
    SelectArea
  },
  data() {
    return {
      receiverName: '',
      phone: '',
      postcode: '',
      area: '北京海淀',
      detail: '',
      areaShow: false,
      isDefault: 1
    }
  },
  methods: {
    showArea() {
      this.areaShow = true
    },
    setDefault(val) {
      this.isDefault = +val
    },
    add() {
      http.addAddress(this.receiverName, this.phone, this.postcode, this.area, this.detail, this.isDefault).then((res) => {
        if (res.errNo == 0) {
          this.$ve.toast('添加成功', {
            duration: 1000, callback: () => {
              this.$router.go(-1)
            }
          });
        }
      })
    },
    back() {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss">
.addr-add {
  width: 6.9rem;
  margin: 0 auto;
  .addr-title {
    padding: .3rem 0 .3rem .6rem;
    font-size: .3rem;
    color: #323136;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      width: .32rem;
      height: .32rem;
      background: url('../../assets/addr-add.png') no-repeat;
      background-size: 100%;
      margin-top: -0.16rem;
    }
  }
  .form-item {
    .ipt {
      font-size: .28rem;
      color: #928f9c;
      z-index: 1;
    }
  }
  .addr-default {
    display: flex;
    padding-top: .1rem;
    font-size: .28rem;
    color: #928f9c;
    .item-bd {
      line-height: .6rem;
      flex: 1;
    }
  }
  .addr-op {
    margin-top: 1.2rem;
  }
}
</style>

