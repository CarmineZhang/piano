<template>
  <div>
    <div class="re-pd" :class="{'re-pd-dark':index%2==1}" v-for="(item,index) in list" :key="index" @click="gotoDetail(item.pianoId)">
      <div class="re-img">
        <img :src="item.coverUrl" alt="">
      </div>
      <p class="re-title" v-text="item.pianoName"></p>
      <p class="re-sub-title" v-text="item.brand"></p>
      <p class="re-desc" v-html="item.summary"></p>
      <p class="re-price">
        <span class="re-price-title">最低租金：</span>
        <span class="re-price-ct">
          ¥{{item.rentActive}} / 天
        </span>
      </p>
    </div>
  </div>
</template>
<script>
import http from '@/libs/httpUtil'
export default {
  name: 'recommend',
  data() {
    return {
      list: []
    }
  },
  created() {
    http.getRecomments().then(res => {
      if (res.errNo == 0) {
        this.list = res.data.list
      }
    })
  },
  methods: {
    gotoDetail(id) {
      this.$router.push({ path: '/productdetail', query: { id: id } })
    }
  }
}
</script>
<style lang="scss">
.re-pd {
  position: relative;
  height: 10rem;
  .re-img {
    padding-top: (670/750)*100%;
    img {
      width: 100%;
      height: 6.7rem;
      position: absolute;
      left: 0;
      top: 0;
    }
  }
  p {
    text-align: center;
  }
  .re-title {
    margin-top: .15rem;
    font-size: .34rem;
    color: #1b1b1b;
  }
  .re-sub-title {
    font-size: .24rem;
    color: #928f9c;
  }
  .re-desc {
    margin-top: .2rem;
    font-size: .24rem;
    color: #323136;
  }
  .re-price {
    margin-top: .2rem;
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

