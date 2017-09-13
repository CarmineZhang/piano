<template>
  <div class="drop-wrapper">
    <slot></slot>
    <div class="dropload" v-show="show">
      <span class="loading"></span>加载中...</div>
  </div>
</template>
<script>
import throttle from '@/libs/throttle'
export default {
  name: 'scroll-load',
  props: {
    threshold: {
      type: Number,
      default: 20
    },
    value: Boolean
  },
  watch: {
    value(val) {
      this.show = val
      this.loading = !val
    }
  },
  mounted() {
    this.clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    window.onscroll = throttle(this.scroll, 200)
  },
  data() {
    return {
      show: false,
      loading: false
    }
  },
  methods: {
    scroll() {
      if (!this.loading) {
        let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
        let scrollTop = window.pageYOffset
        if ((scrollHeight - this.threshold) <= (this.clientHeight + scrollTop)) {
          this.show = true
          this.loading = true
          this.$emit('input', false)
          this.$emit('load-more')
        }
      }
    }
  }
}
</script>
<style lang="scss">
.drop-wrapper {
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.dropload {
  height: 30px;
  line-height: 30px;
  text-align: center;
}

.dropload .loading {
  display: inline-block;
  height: 10px;
  width: 10px;
  border-radius: 100%;
  margin: 5px;
  border: 2px solid #666;
  border-bottom-color: transparent;
  vertical-align: middle;
  -webkit-animation: rotate 0.75s linear infinite;
  animation: rotate 0.75s linear infinite;
}

@-webkit-keyframes rotate {
  0% {
    -webkit-transform: rotate(0deg);
  }

  50% {
    -webkit-transform: rotate(180deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes rotate {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  50% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>


