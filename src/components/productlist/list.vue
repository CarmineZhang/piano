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
