<template>
  <div class="weui-cell  weui-cell_vcode">
    <div class="weui-cell__hd" v-if="title!==undefined">
      <label class="weui-label" v-text="title"></label>
    </div>
    <div class="weui-cell__bd">
      <input class="weui-input" v-model="currentValue" type="text" :placeholder="placeholder" ref="input">
    </div>
    <div class="weui-cell__ft">
      <i class="weui-icon-clear" v-show="isShowClear" @click="clear"></i>
      <i class="weui-icon-warn" v-show="isValid"></i>
      <img :src="data" class="weui-vcode-img">
    </div>
  </div>
</template>
<script>
export default {
  name: 've-input',
  created() {
    this.currentValue = (this.value === undefined || this.value === null) ? '' : this.value
  },
  props: {
    title: String,
    placeholder: String,
    value: [String, Number],
    showClear: {
      type: Boolean,
      default: true
    },
    isValid: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentValue: '',
      data: ''
    }
  },
  computed: {
    isShowClear() {
      return this.showClear && !this.readonly && this.currentValue !== ''
    }
  },
  watch: {
    value(val) {
      this.currentValue = val
    },
    currentValue(newVal) {
      this.$emit('input', newVal)
    }
  },
  methods: {
    clear() {
      this.currentValue = ''
      this.$refs.input.focus()
    }
  }
}
</script>

