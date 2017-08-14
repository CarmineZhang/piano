<template>
  <button class="count-down" v-text='content' :disabled="disabled||!isClick" @click="onClick">
    获取验证码</button>
</template>
<script>
export default {
  name: 'count-down',
  props: {
    time: {
      type: Number,
      default: 10
    },
    disabled: {
      type: Boolean,
      default: true
    },
    value: Boolean
  },
  data() {
    return {
      timerId: null,
      isClick: true,
      downtime: 10,
      initText: '获取验证码'
    }
  },
  computed: {
    content() {
      if (this.isClick) {
        return this.initText
      } else {
        return `${this.downtime} s后获取`
      }
    }
  },
  watch: {
    value(val) {
      if (val) {
        if (this.timerId) {
          clearTimeout(this.timerId)
        }
        this.isClick = false
        this.downtime = this.time
        this.countDown()
      }
    }
  },
  methods: {
    countDown() {
      this.downtime = this.downtime - 1
      if (this.downtime > 0) {
        this.timerId = setTimeout(this.countDown, 1000)
      } else {
        this.$emit('input', false)
        this.isClick = true
      }
    },
    onClick() {
      this.$emit('on-click')
    }
  }
}
</script>

