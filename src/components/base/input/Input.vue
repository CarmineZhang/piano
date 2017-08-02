<template>
  <div class="weui-cell">
    <div class="weui-cell__hd" v-if="title!==undefined">
      <label class="weui-label" v-text="title"></label>
    </div>
    <div class="weui-cell__bd">
      <input v-if="type === 'text'" class="weui-input" v-model="currentValue" type="text" :placeholder="placeholder" :readonly="readonly" ref="input">
      <input v-if="type === 'password'" class="weui-input" v-model="currentValue" type="password" :placeholder="placeholder" :readonly="readonly" ref="input">
      <input v-if="type === 'number'" class="weui-input" v-model="currentValue" type="tel" :placeholder="placeholder" :readonly="readonly" ref="input">
    </div>
    <div class="weui-cell__ft">
      <i class="weui-icon-clear" v-show="isShowClear" @click="clear"></i>
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
    type: {
      type: String,
      default: 'text'
    },
    title: String,
    placeholder: String,
    readonly: Boolean,
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
      currentValue: ''
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

