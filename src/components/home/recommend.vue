<template>
  <div>
    <div class="re-header">
      行龙推荐
    </div>
    <div class="re-pd" :class="{'re-pd-dark':index%2==1}" v-for="(item,index) in list" :key="index" @click="gotoDetail(item.purpose)">
      <div class="re-img">
        <img :src="item.coverUrl" alt="">
      </div>
      <!-- <p class="re-title" v-text="item.pianoName"></p>
      <p class="re-sub-title" v-text="item.brand"></p> -->
      <p class="re-desc" v-html="item.summary"></p>
      <p class="re-price">
        <span class="re-price-title">租金：</span>
        <span class="re-price-ct">
          ¥{{item.rentActive}} / 月
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
    gotoDetail(purpose) {
      this.$router.push({ name: 'product-list', query: { purpose: purpose } })
    }
  }
}
</script>
<style lang="scss">
.re-header {
  background-color: #fff;
  padding: 0.3rem;
  font-size: 0.3rem;
  color: #323136;
}

.re-pd {
  position: relative;
  background: #fff;
  height: 9rem;
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
    margin-top: 0.15rem;
    font-size: 0.34rem;
    color: #1b1b1b;
  }
  .re-sub-title {
    font-size: 0.24rem;
    color: #928f9c;
  }
  .re-desc {
    margin-top: 0.2rem;
    font-size: 0.24rem;
    color: #323136;
  }
  .re-price {
    margin-top: 0.2rem;
    line-height: 0.3rem;
    .re-price-title {
      font-size: 0.24rem;
      color: #323136;
    }
    .re-price-ct {
      font-size: 0.3rem;
      color: #bf3737;
    }
  }
}

.re-pd-dark {
  background-color: #1c1c1c;
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

