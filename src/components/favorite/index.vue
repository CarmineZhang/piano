<template>
  <div>
    <div class="fav-title">
      近一个月收藏
    </div>
    <list :data="list"></list>
  </div>
</template>
<script>
import List from '../productlist/list'
export default {
  name: 'favorite',
  components: {
    List
  },
  data() {
    return {
      list: [{
        title: '雅马哈钢琴 YAMAHA 日本进口 YM131X',
        area: '北京',
        price: 150,
        pledge: 30000
      }, {
        title: '雅马哈钢琴 YAMAHA 日本进口 YM131X',
        area: '北京',
        price: 150,
        pledge: 30000
      }, {
        title: '雅马哈钢琴 YAMAHA 日本进口 YM131X',
        area: '北京',
        price: 150,
        pledge: 30000
      }, {
        title: '雅马哈钢琴 YAMAHA 日本进口 YM131X',
        area: '北京',
        price: 150,
        pledge: 30000
      }, {
        title: '雅马哈钢琴 YAMAHA 日本进口 YM131X',
        area: '北京',
        price: 150,
        pledge: 30000
      }, {
        title: '雅马哈钢琴 YAMAHA 日本进口 YM131X',
        area: '北京',
        price: 150,
        pledge: 30000
      }, {
        title: '雅马哈钢琴 YAMAHA 日本进口 YM131X',
        area: '北京',
        price: 150,
        pledge: 30000
      }, {
        title: '雅马哈钢琴 YAMAHA 日本进口 YM131X',
        area: '北京',
        price: 150,
        pledge: 30000
      }, {
        title: '雅马哈钢琴 YAMAHA 日本进口 YM131X',
        area: '北京',
        price: 150,
        pledge: 30000
      }]
    }
  }
}
</script>
<style lang="scss">
.fav-title {
  padding-left: .3rem;
  height: .55rem;
  line-height: .55rem;
  font-size: .24rem;
  color: #1b1b1b;
  background-color: #eee;
}
</style>

