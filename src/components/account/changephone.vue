<template>
  <div>
    <div class="form-wrapper">
      <div class="form-item">
        <div class="item-hd">+86</div>
        <input type="text" class="item-bd ipt" placeholder="手机号码">
      </div>
      <div class="form-item">
        <input type="tel" class="item-bd ipt" placeholder="请输入六位验证码">
        <count-down v-model="start" @on-click="startCountDown"></count-down>
      </div>
      <div class="form-op">
        <a href="" class="btn btn-primary">下一步</a>
        <a href="" class="btn btn-default">取消</a>
      </div>
    </div>
  </div>
</template>
<script>
import CountDown from '../base/countdown'
export default {
  name: 'change-phone',
  components: {
    CountDown
  },
  data() {
    return {
      start: false
    }
  },
  methods: {
    startCountDown() {
      this.start = true
    }
  }
}
</script>
.<style lang="scss">
.form-wrapper {
  padding: .3rem .3rem 0;
}
</style>




