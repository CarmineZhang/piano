<template>
  <div class="addr-add">
    <div class="addr-title">新增地址</div>
    <div class="addr-add-body">
      <div class="add-item">
        <input type="text" class="ipt" placeholder="收货人姓名">
      </div>
      <div class="add-item">
        <div class="item-hd">+86</div>
        <input type="text" class="item-bd ipt" placeholder="手机号码">
      </div>
      <div class="add-item">
        <input type="text" class="item-bd ipt" placeholder="收货地址">
      </div>
      <div class="add-item">
        <input type="text" class="item-bd ipt" placeholder="详细地址">
      </div>
    </div>
    <div class="addr-op">
      <a href="" class="btn btn-primary">确定</a>
      <a href="" class="btn btn-default">取消</a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'add-address'
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
  .add-item {
    display: flex;
    height: .88rem;
    margin-bottom: .3rem;
    position: relative;
    &::after {
      content: '';
      box-sizing: border-box;
      position: absolute;
      top: 0;
      left: 0;
      width: 200%;
      height: 200%;
      border: 1px solid #878787;
      transform-origin: 0 0;
      transform: scale(.5);
    }
    .item-hd {
      width: .88rem;
      height: .88rem;
      line-height: .88rem;
      background-color: #878787;
      color: #fff;
      font-size: .28rem;
      text-align: center;
      z-index: 1;
    }
    .item-bd {
      flex: 1;
      z-index: 1;
    }
    .ipt {
      font-size: .28rem;
      color: #928f9c;
      z-index: 1;
    }
  }
  .addr-op {
    margin-top: 1.2rem;
  }
}
</style>

