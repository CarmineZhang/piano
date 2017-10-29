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
          <span class="pledge">原价押金：</span>
          <span class="pledge txt-line">¥ {{item.marketPrices}}</span>
        </p>
        <p class="price">
          <span class="pledge">原价租金：</span>
          <span class="pledge txt-line" v-if="rentType=='month'">¥ {{item.longRentOld}} / 月</span>
          <span class="pledge txt-line" v-else>¥ {{item.shortRentOld}} / 日</span>
        </p>
        <p class="price">
          <span class="tit">现价押金：</span>
          <span class="ct" v-if="rentType=='month'">¥ {{item.longTermDeposit}}</span>
          <span class="ct" v-else>¥ {{item.shortTermDeposit}}</span>
        </p>
         <p class="price">
          <span class="tit">现价租金：</span>
          <span class="ct" v-if="rentType=='month'">¥ {{item.longRentActive}} / 月</span>
          <span class="ct" v-else>¥ {{item.shortRentActive}} / 日</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'product-list',
  props: {
    data: Array,
    rentType: String
  },
  methods: {
    showDetail(id) {
      this.$router.push({ path: '/productdetail', query: { id: id } })
    }
  }
}
</script>


