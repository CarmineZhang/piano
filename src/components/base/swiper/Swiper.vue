<template>
  <div class="ve-slider">
    <div class="ve-slider-hold">
      <div class="ve-slider-list">
        <div class="ve-slider-item">
          <a>
            <img :src="firstItem" alt="">
          </a>
        </div>
        <div class="ve-slider-item" v-for="(item,index) in list" :key="index">
          <a>
            <img :src="item" alt="">
          </a>
        </div>
        <div class="ve-slider-item">
          <a>
            <img :src="lastItem" alt="">
          </a>
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

