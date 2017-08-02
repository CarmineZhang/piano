<template>
  <div class="weui-cell">
    <div class="weui-cell__hd">
      <label class="weui-label" v-text="title"></label>
    </div>
    <div class="weui-cell__bd" @click="showSelect">
      <input class="weui-input" :value="currentValue" type="text" :placeholder="placeholder" readonly ref="input">
    </div>
    <div class="weui-cell__ft">
      <i class="weui-icon-warn" v-show="isValid"></i>
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
    selectData: Array,
    title: String,
    placeholder: String,
    value: [String, Number],
    isValid: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentValue: '',
      pickerShow: false,
    }
  },
  watch: {
    value(val) {
      this.currentValue = val
    }
  },
  methods: {
    showSelect() {
      // this.$emit('on-select')
      this.pickerShow = true
    },
    confirm(result) {
      if (result && result.length === 1) {
        var rt = result[0]
        this.currentValue = rt.label
        this.$emit('on-select', rt.value)
      }
    }
  }
}
</script>

