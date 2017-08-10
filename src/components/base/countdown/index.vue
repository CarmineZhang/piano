<template>
  <button class="count-down" v-text='content' :disabled="disabled" @click="onClick">
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
    value: Boolean
  },
  data() {
    return {
      timerId: null,
      disabled: false,
      downtime: 10,
      initText: '获取验证码'
    }
  },
  computed: {
    content() {
      if (!this.disabled) {
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
        this.disabled = true
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
        this.disabled = false
      }
    },
    onClick() {
      this.$emit('on-click')
    }
  }
}
</script>

