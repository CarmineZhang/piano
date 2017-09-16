<template>
  <div class="header-wrapper">
    <a class="header-back" @click="back"></a>
    <div class="header-info" v-text="content"></div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'header',
  props: {
    content: String
  },
  methods: {
    back() {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss">
.header-wrapper {
  display: flex;
  background: #000;
  position: relative;
  .header-back {
    display: block;
    width: 40px;
    position: relative;
    @include arrow-left(10px, #fff);
  }
  .header-info {
    flex: 1;
    text-align: center;
    color: #fff;
    height: 40px;
    line-height: 40px;
    margin-left: -40px;
  }
}
</style>


