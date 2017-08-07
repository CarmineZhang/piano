<template>
  <div class="news-list">
    <div class="news-item" v-for="item in list" :key="item">
      <div class="item-title" v-text="item.title"></div>
      <div class="item-date" v-text="item.date"></div>
      <div class="item-img">
        <img :src="item.img" alt="">
        <div class="item-img-desc" v-text="item.desc"></div>
      </div>
    </div>
  </div>
</template>
<script>
import newsSrc from '../../assets/new3.png'
export default {
  name: 'news-list',
  data() {
    return {
      list: [{
        title: '行龙乐器正式上线',
        date: '2017-8-1',
        img: newsSrc,
        desc: '行龙乐器正式上线，优质进口的钢琴给您带来不一样的体验。'
      }, {
        title: '行龙乐器正式上线',
        date: '2017-8-1',
        img: newsSrc,
        desc: '行龙乐器正式上线，优质进口的钢琴给您带来不一样的体验。'
      }, {
        title: '行龙乐器正式上线',
        date: '2017-8-1',
        img: newsSrc,
        desc: '行龙乐器正式上线，优质进口的钢琴给您带来不一样的体验。'
      }, {
        title: '行龙乐器正式上线',
        date: '2017-8-1',
        img: newsSrc,
        desc: '行龙乐器正式上线，优质进口的钢琴给您带来不一样的体验。'
      }, {
        title: '行龙乐器正式上线',
        date: '2017-8-1',
        img: newsSrc,
        desc: '行龙乐器正式上线，优质进口的钢琴给您带来不一样的体验。'
      }, {
        title: '行龙乐器正式上线',
        date: '2017-8-1',
        img: newsSrc,
        desc: '行龙乐器正式上线，优质进口的钢琴给您带来不一样的体验。'
      }]
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
      margin-top: .2rem;
      height: 3rem;
      position: relative;
      img {
        width: 100%;
      }
      .item-img-desc {
        position: absolute;
        bottom: 0;
        left: 0;
        height: .88rem;
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

