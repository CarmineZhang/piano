<template>
  <div>
    <div class="form-wrapper">
      <div class="form-item">
        <div class="item-hd">+86</div>
        <input type="text" class="item-bd ipt" placeholder="手机号码">
      </div>
      <div class="form-item">
        <input type="tel" class="item-bd ipt" placeholder="请输入六位验证码">
        <button class="item-ft">获取验证码</button>
      </div>
      <div class="form-op">
        <a href="" class="btn btn-primary">下一步</a>
        <a href="" class="btn btn-default">取消</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'change-phone'
}
</script>
.<style lang="scss">
.form-wrapper {
  padding: .3rem .3rem 0;
}
</style>




