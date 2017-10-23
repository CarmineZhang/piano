<template>
  <div class="ve-slider">
    <div class="ve-slider-hold">
      <div class="ve-slider-list">
        <div class="ve-slider-item">
          <router-link :to="firstItem.url">
            <img :src="firstItem.img" alt="">
          </router-link>
        </div>
        <div class="ve-slider-item" v-for="(item,index) in list" :key="index">
          <router-link :to="item.url">
            <img :src="item.img" alt="">
          </router-link>
        </div>
        <div class="ve-slider-item">
          <router-link :to="lastItem.url">
            <img :src="lastItem.img" alt="">
          </router-link>
        </div>
      </div>
    </div>
    <div class="ve-slider-nav">
      <div class="nav-bar">
        <b v-for="n in len" :key="n"></b>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from './swiper'
export default {
  name: 've-swiper',
  mounted() {
    this.$nextTick(() => {
      this.render()
    })
  },
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    },
    showDots: {
      type: Boolean,
      default: true
    },
    loop: Boolean,
    interval: {
      type: Number,
      default: 3000
    },
    duration: {
      type: Number,
      default: 300
    }
  },
  computed: {
    len() {
      return this.list.length
    },
    firstItem() {
      if (this.len) {
        return this.list[this.len - 1]
      }
      return null
    },
    lastItem() {
      if (this.len) {
        return this.list[0]
      }
      return null
    }
  },
  watch: {
    len() {
      this.$nextTick(() => {
        this.render()
      })
    }
  },
  methods: {
    render() {
      this.swiper && this.swiper.destory()
      this.swiper = new Swiper({
        count: this.len
      })
    }
  }
}
</script>

