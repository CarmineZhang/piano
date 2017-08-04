<template>
  <div>
    <div class="re-pd" :class="{'re-pd-dark':index%2==1}" v-for="(item,index) in list" :key="item">
      <div class="re-img">
        <img :src="item.img" alt="">
      </div>
      <p class="re-title" v-text="item.title"></p>
      <p class="re-sub-title" v-text="item.subTitle"></p>
      <p class="re-desc" v-html="item.desc"></p>
      <p class="re-price">
        <span class="re-price-title">最低租金：</span>
        <span class="re-price-ct">
          ¥{{item.price}} / 天
        </span>
      </p>
    </div>
  </div>
</template>
<script>
import re1 from '../../assets/re1.png'
import re2 from '../../assets/re2.png'
import re3 from '../../assets/re3.png'

export default {
  name: 'recommend',
  data() {
    return {
      list: [
        {
          img: re1,
          title: '施坦威',
          subTitle: 'STEINWAY',
          desc: '拥有一架施坦威钢琴，<br>不仅可以享受无语伦比的音乐体验，<br>还可以作为及其珍贵的投资力作。',
          price: 2.5
        }, {
          img: re2,
          title: '雅马哈',
          subTitle: 'YAMAHA',
          desc: '一台伟大的钢琴，<br>是能够令你对听众产生深厚情感影响的钢琴，<br>雅马哈创造了这样的钢琴。',
          price: 2.5
        }, {
          img: re3,
          title: '卡瓦依',
          subTitle: 'KAWAI',
          desc: '绝妙的音色与触手极佳的手感，<br>对于SK-EX这架珍贵的琴中逸品，<br>唯有一个词语形容-无与伦比。',
          price: 2.5
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.re-pd {
  position: relative;
  .re-img {
    padding-top: (670/750)*100%;
    img {
      width: 100%;
      height: auto;
      position: absolute;
      left: 0;
      top: 0;
    }
  }
  p {
    text-align: center;
  }
  .re-title {
    margin-top: .3rem;
    font-size: .34rem;
    color: #1b1b1b;
  }
  .re-sub-title {
    font-size: .24rem;
    color: #928f9c;
  }
  .re-desc {
    margin-top: .3rem;
    font-size: .24rem;
    color: #323136;
  }
  .re-price {
    margin-top: .3rem;
    line-height: .3rem;
    .re-price-title {
      font-size: .24rem;
      color: #323136;
    }
    .re-price-ct {
      font-size: .3rem;
      color: #bf3737;
    }
  }
}

.re-pd-dark {
  background-color: #1C1C1C;
  .re-title {
    color: #fff;
  }
  .re-desc {
    color: #999;
  }
  .re-price {
    .re-price-title {
      color: #999;
    }
    .re-price-ct {
      color: #fff;
    }
  }
}
</style>

