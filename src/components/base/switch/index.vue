<template>
  <input class="switch-ipt" type="checkbox" :checked="isDefault" @click="chkClick">
</template>
<script>
export default {
  name: 'my-switch',
  props: {
    checked: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isDefault: this.checked
    }
  },
  watch: {
    checked(val) {
      this.isDefault = val
    }
  },
  methods: {
    chkClick() {
      this.isDefault = !this.isDefault
      this.$emit('on-change', this.isDefault)
    }
  }
}
</script>
<style lang="scss">
.switch-ipt {
  position: relative;
  width: 1rem;
  height: 0.6rem;
  border: 1px solid #dfdfdf;
  outline: 0;
  border-radius: 0.32rem;
  box-sizing: content-box;
  background-color: #dfdfdf;
  -webkit-appearance: none;
  transition: background-color 0.1s, border 0.1s;
  &::before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 1rem;
    height: 0.6rem;
    border-radius: 0.3rem;
    background-color: #fdfdfd;
    -webkit-transition: -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
    transition: -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
    transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
    transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1),
      -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
  }
  &::after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 0.3rem;
    background-color: #ffffff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
    -webkit-transition: -webkit-transform 0.35s
      cubic-bezier(0.4, 0.4, 0.25, 1.35);
    transition: -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
    transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
    transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35),
      -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
  }

  &:checked {
    border-color: #04be02;
    background-color: #04be02;
    &::before {
      transform: scale(0);
    }
    &::after {
      transform: translateX(0.4rem);
    }
  }
}
</style>

