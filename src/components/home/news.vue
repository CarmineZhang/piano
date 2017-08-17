<template>
  <div class="news">
    <div class="news-title">行龙资讯</div>
    <div class="news-list">
      <div class="list-item">
        <div class="news-item" :class="{'news-item-1':index%2==1}" v-for="(item,index) in even" :key="item.id" @click="showNew(item.id)">
          <img :src="item.imageAddr" alt="">
          <div class="item">
            <div class="item-title" v-text="item.title"></div>
            <div class="item-content" v-text="item.summary"></div>
            <div class="item-time">{{item.beginTime | dateformate}}</div>
          </div>
        </div>
      </div>
      <div class="list-item">
        <div class="news-item" :class="{'news-item-1':index%2==0}" v-for="(item,index) in odd" :key="item.id" @click="showNew(item.id)">
          <img :src="item.imageAddr" alt="">
          <div class="item">
            <div class="item-title" v-text="item.title"></div>
            <div class="item-content" v-text="item.summary"></div>
            <div class="item-time">{{item.beginTime | dateformate}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import http from '@/libs/httpUtil'
export default {
  name: 'news',
  data() {
    return {
      list: []
    }
  },
  beforeCreate() {
    http.getInformations(1, 4).then(res => {
      if (res.errNo == 0) {
        this.list = res.data.dataList
      }
    })
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
  },
  methods: {
    showNew(id) {
      this.$router.push({ path: '/article', query: { id: id } })
    }
  }
}
</script>
<style lang="scss">
@import '../../sass/mixin';
.news {
  background-color: #fff;
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
      height: 100%;
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


