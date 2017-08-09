<template>
  <div class="news">
    <div class="news-title">行龙资讯</div>
    <div class="news-list">
      <div class="list-item">
        <div class="news-item" :class="{'news-item-1':index%2==1}" v-for="(item,index) in even" :key="index">
          <img :src="item.img" alt="">
          <div class="item">
            <div class="item-title" v-text="item.title"></div>
            <div class="item-content" v-text="item.content"></div>
            <div class="item-time" v-text="item.time"></div>
          </div>
        </div>
      </div>
      <div class="list-item">
        <div class="news-item" :class="{'news-item-1':index%2==0}" v-for="(item,index) in odd" :key="index">
          <img :src="item.img" alt="">
          <div class="item">
            <div class="item-title" v-text="item.title"></div>
            <div class="item-content" v-text="item.content"></div>
            <div class="item-time" v-text="item.time"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import new1Src from '../../assets/new1.png'
import new2Src from '../../assets/new2.png'

export default {
  name: 'news',
  data() {
    return {
      list: [{
        img: new1Src,
        title: '资讯标题一',
        content: '资讯内容一资讯内容一资讯内容一资讯内容一资讯内容一资讯内容一',
        time: '2017-7-30'
      }, {
        img: new2Src,
        title: '资讯标题二',
        content: '资讯内容二资讯内容二资讯内容二资讯内容二资讯内容二资讯内容二资讯内容二',
        time: '2017-7-30'
      }, {
        img: new2Src,
        title: '资讯标题三',
        content: '资讯内容三资讯内容三资讯内容三资讯内容三资讯内容三资讯内容三资讯内容三资讯内容三',
        time: '2017-7-30'
      }, {
        img: new1Src,
        title: '资讯标题四',
        content: '资讯内容四资讯内容四资讯内容四资讯内容四资讯内容四资讯内容四资讯内容四资讯内容四',
        time: '2017-7-30'
      }]
    }
  },
  computed: {
    even() {
      return this.list.filter((item, index) => {
        return index % 2 == 0
      })
    },
    odd() {
      return this.list.filter((item, index) => {
        return index % 2 == 1
      })
    }
  }
}
</script>
<style lang="scss">
@import '../../sass/mixin';
.news {
  padding: 0 .3rem;
  .news-title {
    padding-top: .3rem;
    font-size: .3rem;
  }
  .news-list {
    display: flex;
    justify-content: space-between;
  }
  .news-item {
    width: 3.3rem;
    height: 3.3rem;
    color: #fff;
    margin-bottom: .3rem;
    position: relative;
    img {
      width: 100%;
    }
    .item {
      position: absolute;
      left: 2px;
      bottom: 5px;
      right: 2px;
      .item-title {
        font-size: .3rem;
      }
      .item-content {
        font-size: .24rem;
        @include ellipsisLn(2);
      }
      .item-time {
        text-align: right;
        font-size: .24rem;
        margin-top: .15rem;
      }
    }
  }
  .news-item-1 {
    height: 5.6rem;
  }
}
</style>


