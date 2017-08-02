<template>
  <div class="ve-slider" v-if="len>0">
    <div class="ve-slider-hold">
      <div class="ve-slider-list">
        <div class="ve-slider-item">
          <a :href="firstItem.href">
            <img :src="firstItem.img" alt="">
          </a>
        </div>
        <div class="ve-slider-item" v-for="item in list" :key="item">
          <a :href="item.href">
            <img :src="item.img" alt="">
          </a>
        </div>
        <div class="ve-slider-item">
          <a :href="lastItem.href">
            <img :src="lastItem.img" alt="">
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
      console.log(this.list)
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

