<template>
  <input class="switch-ipt" type="checkbox" :checked="checked" @click="chkClick">
</template>
<script>
export default {
  name: 'switch',
  data() {
    return {
      checked: false
    }
  },
  methods: {
    chkClick() {
      this.checked = !this.checked
      this.$emit('on-change', this.checked)
    }
  }
}
</script>
<style lang="scss">
.switch-ipt {
  position: relative;
  width: 1rem;
  height: .6rem;
  border: 1px solid #DFDFDF;
  outline: 0;
  border-radius: .32rem;
  box-sizing: content-box;
  background-color: #DFDFDF;
  -webkit-appearance: none;
  transition: background-color 0.1s, border 0.1s;
  &::before {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 1rem;
    height: .6rem;
    border-radius: .3rem;
    background-color: #FDFDFD;
    -webkit-transition: -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
    transition: -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
    transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
    transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1), -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
  }
  &::after {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: .6rem;
    height: .6rem;
    border-radius: .3rem;
    background-color: #FFFFFF;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
    -webkit-transition: -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
    transition: -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
    transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
    transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35), -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
  }

  &:checked {
    border-color: #04BE02;
    background-color: #04BE02;
    &::before {
      transform: scale(0);
    }
    &::after {
      transform: translateX(.4rem);
    }
  }
}
</style>

