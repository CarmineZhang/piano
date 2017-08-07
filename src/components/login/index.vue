<template>
  <div>
    <div class="login-img">
      <img src="../../assets/logo.png" alt="">
    </div>
    <div class="login-form">
      <div class="login-wrapper">
        <div class="login-item">
          <div class="item-hd">+86</div>
          <input type="text" class="item-bd ipt" placeholder="手机号码">
        </div>
        <div class="login-item">
          <input type="tel" class="item-bd ipt" placeholder="请输入六位验证码">
          <button class="item-ft">获取验证码</button>
        </div>
        <div class="login-op-wrapper">
          <a class="btn btn-primary">
            登录
          </a>
        </div>
        <div class="login-comment">
          首次登录即注册成功
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login'
}
</script>
<style lang="scss">
.login-img {
  position: relative;
  height: 0;
  padding-top: (410/750)*100%;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
}

.login-form {
  background-color: #fff;
  padding: .5rem 0 0;
  .login-wrapper {
    width: 6.9rem;
    margin: 0 auto;
    .login-item {
      // border: 1px solid #878787;
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
      .item-ft {
        width: 1.76rem;
        height: .88rem;
        line-height: .88rem;
        background-color: #bf3737;
        color: #fff;
        font-size: .28rem;
        text-align: center;
        z-index: 1;
      }
    }
    .login-op-wrapper {
      overflow: hidden;
      margin-top: .6rem;
    }
    .login-comment {
      padding: .2rem 0;
      font-size: .28rem;
      color: #999;
    }
  }
}
</style>

