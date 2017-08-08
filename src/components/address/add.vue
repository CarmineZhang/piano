<template>
  <div>
    <div class="addr-add">
      <div class="addr-title">新增地址</div>
      <div class="addr-add-body">
        <div class="form-item">
          <input type="text" class="item-bd ipt" placeholder="收货人姓名">
        </div>
        <div class="form-item">
          <div class="item-hd">+86</div>
          <input type="text" class="item-bd ipt" placeholder="手机号码">
        </div>
        <div class="form-item">
          <input type="text" class="item-bd ipt" placeholder="收货地址">
        </div>
        <div class="form-item">
          <input type="text" class="item-bd ipt" placeholder="详细地址">
        </div>
        <div class="addr-default">
          <div class="item-bd">
            是否设为默认地址
          </div>
          <ve-switch></ve-switch>
        </div>
      </div>
      <div class="addr-op">
        <a href="" class="btn btn-primary">确定</a>
        <a href="" class="btn btn-default">取消</a>
      </div>
    </div>
  </div>
</template>
<script>
import VeSwitch from '../base/switch/'
export default {
  name: 'add-address',
  components: {
    VeSwitch
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
      flex: 1;
    }
  }
  .addr-op {
    margin-top: 1.2rem;
  }
}
</style>

