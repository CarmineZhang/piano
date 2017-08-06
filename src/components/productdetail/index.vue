<template>
  <div>
    <swiper :list="swipers"></swiper>
    <div class="pt-detail">
      <p class="title">雅马哈钢琴</p>
      <div class="flexbox">
        <span class="s2">市场价：</span>
        <span class="flex-item s2">22,000</span>
      </div>
      <div class="flexbox">
        <span class="s1">租赁方式：</span>
        <div class="flex-ite2 s2">
          <span class="cur">月租</span>
          <span>日租</span>
        </div>
      </div>
      <div class="flexbox">
        <span class="s1">租赁时长：</span>
        <div class="flex-item s2" @click="selectRentTime">
          <span :class="{'cur':rentTime===1}" data-key="1">1个月</span>
          <span :class="{'cur':rentTime===2}" data-key="2">3个月</span>
          <span :class="{'cur':rentTime===3}" data-key="3">6个月</span>
          <span :class="{'cur':rentTime===4}" data-key="4">9个月</span>
          <span :class="{'cur':rentTime===5}" data-key="5">12个月</span>
        </div>
      </div>
      <div class="flexbox">
        <span class="s1">押金：</span>
        <span class="flex-item s1">20,000*20%</span>
      </div>
      <div class="flexbox">
        <span class="s1">租金：</span>
        <span class="flex-item s1">300</span>
      </div>
      <div class="flexbox">
        <span class="s1">押金+租金费用：</span>
        <span class="flex-item total-price">4,300</span>
      </div>
      <div class="flexbox">
        <span class="s3">运费：</span>
        <div class="flex-item s3">
          <span>根据配送距离收取不同费用</span>
          <span class="s4">（同城免运费）</span>
        </div>
      </div>
      <div class="flexbox">
        <span class="s3">押金：</span>
        <div class="flex-item s3">
          <span>线上预付总押金的</span>
          <span style="color:#bf3737">20%</span>
          <span>,钢琴送到后，再付剩余押金</span>
        </div>
      </div>
      <div class="flexbox">
        <span class="s4">附加服务：</span>
        <span class="flex-item s4">该商品提供一次免费的上门调律与免费上门维修</span>
      </div>
    </div>
    <div class="more">
    </div>
    <div class="pt-action">
      <a href="" class="act-rent">立即租赁</a>
      <a href="" class="act-collect"></a>
    </div>
  </div>
</template>
<script>
import Swiper from '../base/swiper'
import bannerSrc from '../../assets/banner.png'
export default {
  name: 'product-detail',
  components: {
    Swiper
  },
  mounted() {
    document.title = '商品详情'
  },
  data() {
    return {
      swipers: [{
        href: '',
        img: bannerSrc
      }, {
        href: '',
        img: bannerSrc
      }, {
        href: '',
        img: bannerSrc
      }],
      rentTime: 1
    }
  },
  methods: {
    selectRentTime(event) {
      var t = event.target
      if (t.nodeName === 'SPAN') {
        this.rentTime = +t.dataset.key
      }
    }
  }
}
</script>
<style lang="scss">
.pt-detail {
  padding: .3rem 0 0 .3rem;
  .flexbox {
    display: flex;
    line-height: 2;
    .flex-item {
      flex: 1;
      word-wrap: break-word;
    }
  }
  .title {
    font-size: .3rem;
    color: #323136;
  }
  .group {
    display: inline-block;
  }
  .total-price {
    font-size: .32rem;
    color: #bf3737;
  }
  .s1 {

    font-size: .28rem;
    color: #323136;
  }
  .s2 {

    font-size: .28rem;
    color: #928f9c;
  }
  .s3 {

    font-size: .24rem;
    color: #323136;
  }
  .s4 {

    font-size: .24rem;
    color: #928f9c;
  }
  .cur {
    color: #fff;
    background-color: #bf3737;
    border-radius: .1rem+.06rem;
    padding: 3px 5px;
  }
}

.pt-action {
  display: flex;
  height: .88rem;
  .act-rent {
    flex: 1;
    font-size: .3rem;
    color: #fff;
    background-color: #bf3737;
    text-align: center;
    line-height: .88rem;
  }
  .act-collect {
    width: .88rem;
    background-color: #7f7c8b;
    background-image: url('../../assets/collect.png');
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: .4rem .36rem;
  }
}
</style>


