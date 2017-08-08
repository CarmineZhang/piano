<template>
  <flexbox class="footer-nav fixed-footer">
    <a href="" class="nav-about ve-flexbox-item">关于行龙</a>
    <a href="" class="nav-news ve-flexbox-item">行龙资讯</a>
    <a href="" class="nav-contact ve-flexbox-item">联系我们</a>
  </flexbox>
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
.footer-nav {
  height: 1.5rem;
  background-color: #1b1b1b;
  a {
    position: relative;
    display: block;
    font-size: .28rem;
    color: #666;
    line-height: 1.5;
    &:before {
      content: "";
      display: block;
      width: 20px;
      height: 20px;
      margin: 10px auto 10px;
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: 100%;
    }
  }
  .nav-about {
    &:before {
      background-image: url('../../assets/about.png')
    }
  }
  .nav-news {
    &:before {
      background-image: url('../../assets/news.png')
    }
  }
  .nav-contact {
    &::before {
      background-image: url('../../assets/contactus.png')
    }
  }
}
</style>


