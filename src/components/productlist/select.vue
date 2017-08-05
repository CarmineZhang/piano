<template>
  <div>
    <div class="pl-search">
      <flexbox class="pl-select">
        <a class="ve-flexbox-item" @click="showBrand" :class="{'pl-select-up':brandShow}">
          <span>品牌</span>
        </a>
        <a class="ve-flexbox-item">
          <span>租期</span>
        </a>
        <a class="ve-flexbox-item">
          <span>租金</span>
        </a>
      </flexbox>
      <div class="options">
        <transition name="fade-down">
          <ul class="brand" v-show="brandShow">
            <li class="selected">斯坦威</li>
            <li>雅马哈</li>
            <li>卡瓦依</li>
          </ul>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import { Flexbox } from '../base/flexbox'
export default {
  name: 'select',
  data() {
    return {
      brandShow: false
    }
  },
  components: {
    Flexbox
  },
  methods: {
    showBrand() {
      this.brandShow = !this.brandShow;
      this.$emit('on-select-show', this.brandShow)
    }
  }
}
</script>
<style lang="scss">
.pl-search {
  height: .88rem;
  z-index: 104;
}

.pl-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .3);
  z-index: 103;
}

.pl-select {
  height: .88rem;
  line-height: .88rem;
  font-size: .28rem;
  color: #fff;
  background-color: #7c7c8b;
  span {
    position: relative;
    display: inline-block;
    padding-right: 20px;
    &:after {
      transition: transform .3s,
      -webkit-transform .3s;
    }
    @include arrow-down(6px, white);
  }
}

.pl-select-up {
  span {
    @include arrow-up(6px, white);
  }
}

.brand {
  background-color: #7c7c8b;
  li {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: relative;
    box-sizing: border-box;
    height: .8rem;
    line-height: .8rem;
    font-size: .28rem;
    color: #fff;
    padding: 0 35px 0 20px;
    @include topline();
  }
  li.selected {
    &:after {
      content: '';
      width: 12px;
      height: 12px;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAUCAMAAACgaw2xAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA8UExURUdwTOQ6OtQqKuQ4O/8AAOM4O+Q4POI4OuM4O+Q4O+M4O+M5POQ4O+M4O+U4OuU2POQ4POQ4O+Q5O+Q5POG6XjYAAAATdFJOUwAvBl4BstwRzseW9XvrRR2+iVGqKQ+qAAAAaUlEQVQY023PSQ6AIBBEUSZpBhGTuv9dnRAiVq869VdPKXZmj3RXCTxYlMp2nbGxXTxWtrsFi2NhhRe2b8ia7bXAUllEam+M8pWZNyAIlUkY5SsbZZa95S9rhcjuQmVX4bKzdNlcuuy5A/z7BLUpU+pnAAAAAElFTkSuQmCC) no-repeat;
      background-size: 12px auto;
      position: absolute;
      right: 10px;
      top: 50%;
      margin-top: -6px;
    }
  }
}
</style>


