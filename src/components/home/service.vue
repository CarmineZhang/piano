<template>
  <div class="se">
    <div class="se-bg">
      <img src="../../assets/service-bg.png" alt="">
    </div>
    <div class="se-front">
      <div class="se-title">
        行龙服务
      </div>
      <div>
        <img src="../../assets/service-front.png" alt="">
      </div>
      <div class="se-desc-wrap">
        <span class="se-desc">
          XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'service'
}
</script>
<style lang="scss">
@import '../../sass/mixin';
.se {
  position: relative;
  height: 7.53rem;
  .se-bg {
    position: absolute;
    top: 0;
    left: 0;
    height: auto;
    z-index: 1;
    img {
      width: 100%;
    }
  }

  .se-front {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    .se-title {
      padding: .3rem 0 .3rem .3rem;
      font-size: .3rem;
      color: #fff;
    }
    img {
      width: 5.78rem;
      height: 5rem;
    }
    .se-desc-wrap {
      position: relative;
      margin: .3rem 0 0 .3rem;
      .se-desc {
        display: inline-block;
        width: 5.78rem - 0.3rem;
        font-size: .24rem;
        color: #999;
        word-wrap: break-word;
      }
      @include arrow-right();
      &:after {
        right: 40px;
      }
    }
  }
}
</style>


