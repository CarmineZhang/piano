<template>
  <div>
    <div class="pl-item" v-for="(item,index) in data" :key="index">
      <div class="pl-item-img">
        <img src="" alt="">
      </div>
      <div class="pl-item-content">
        <p class="title" v-text="item.title"></p>
        <p class="area" v-text="item.area"></p>
        <p class="price">
          <span class="tit">租金：</span>
          <span class="ct">¥ {{item.price}} / 天</span>
          <span class="pledge">押金：</span>
          <span class="pledge">¥ {{item.pledge}}</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'product-list',
  props: {
    data: Array
  }
}
</script>
<style lang="scss">
.pl-item {
  display: flex;
  padding: 5px 0;
  position: relative;
  @include bottomline();
  .pl-item-img {
    width: 2.5rem;
    height: 2.5rem;
    line-height: 2.5rem;
    img {
      width: 100%;
      vertical-align: middle;
    }
  }
  .pl-item-content {
    flex: 1;
    padding: .3rem, 0, 0, .3rem;
    .title {
      font-family: .28rem;
      color: #323136;
      word-wrap: break-word;
    }
    .area {
      margin-top: .3rem;
      font-size: .24rem;
      color: #928f9c;
    }
    .price {
      margin-top: .3rem;
      .tit {
        color: #323136;
        font-size: .24rem;
      }
      .ct {
        color: #bf3737;
        font-size: .34rem;
      }
      .pledge {
        color: #928f9c;
        font-size: .24rem;
      }
    }
  }
}
</style>

