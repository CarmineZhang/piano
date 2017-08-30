<template>
  <div>
    <div class="pl-item" v-for="item in data" :key="item.id">
      <div class="pl-item-img" @click="showDetail(item.id)">
        <img :src="item.coverUrl" alt="">
      </div>
      <div class="pl-item-content">
        <p class="title" v-text="item.pianoName"></p>
        <p class="area">北京</p>
        <p class="price">
          <span class="tit">租金：</span>
          <span class="ct">¥ {{item.longRentActive}} / 天</span>
          <span class="pledge">押金：</span>
          <span class="pledge">¥ {{item.longTermDeposit}}</span>
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
  },
  methods: {
    showDetail(id) {
      this.$router.push({ path: '/productdetail', query: { id: id } })
    }
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
    img {
      width: 100%;
      vertical-align: middle;
    }
  }
  .pl-item-content {
    flex: 1;
    padding: .3rem 0 10px .3rem;
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

