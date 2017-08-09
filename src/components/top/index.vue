<template>
  <div class="header">
    <flexbox class="top-nav">
      <a class="nav-rent  ve-flexbox-item">
        <img src="../../assets/rent.png" alt="">
      </a>
      <a class="nav-index  ve-flexbox-item">
        <img src="../../assets/index.png" alt="">
      </a>
      <a class="nav-me  ve-flexbox-item">
        <img src="../../assets/me.png" alt="">
      </a>
    </flexbox>
  </div>
</template>
<script>
import { Flexbox, FlexboxItem } from '../base/flexbox'
export default {
  name: 'top',
  components: {
    Flexbox,
    FlexboxItem
  }
}
</script>
<style lang="scss">
.top-nav {
  height: .88rem;
  line-height: .88rem;
  font-size: 0;
  background-color: #1b1b1b;
  .nav-rent {
    padding-left: .3rem;
    text-align: left;
    img {
      vertical-align: middle;
      width: .41rem;
      height: .37rem;
    }
  }
  .nav-index {
    img {
      vertical-align: middle;
      width: .33rem;
      height: .52rem;
    }
  }
  .nav-me {
    padding-right: .3rem;
    text-align: right;
    img {
      vertical-align: middle;
      width: .36rem;
      height: .41rem;
    }
  }
}
</style>


