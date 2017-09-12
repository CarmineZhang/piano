<template>
  <div class="news-list">
    <div class="news-item" v-for="item in list" :key="item.id" @click="showNew(item.id)">
      <div class="item-title" v-text="item.title"></div>
      <div class="item-date">{{item.beginTime | dateformate}}</div>
      <div class="item-img">
        <img :src="item.imageAddr" alt="">
        <div class="item-img-desc" v-text="item.summary"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'news-list',
  props: {
    list: Array
  },
  methods: {
    showNew(id) {
      this.$router.push({ path: '/article', query: { id: id } })
    }
  }
}
</script>
<style lang="scss">
.news-list {
  .news-item {
    padding: .3rem;
    position: relative;
    @include bottomline();
    .item-title {
      font-size: .28rem;
      color: #323136;
    }
    .item-date {
      font-size: .24rem;
      color: #928f9c;
    }
    .item-img {
      margin-top: .2rem; // height: 3rem;
      position: relative;
      img {
        width: 100%; // height: 100%;
      }
      .item-img-desc {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0; // height: .88rem;
        background-color: #323136;
        opacity: .6;
        font-size: .24rem;
        color: #fff;
        text-indent: 2em;
        padding: 5px;
        @include ellipsisLn(2);
      }
    }
  }
}
</style>

