<template>
  <div>
    <transition name="ve-fade">
      <div class="pl-mask" v-show="maskShow" @click="maskClick"></div>
    </transition>
    <div class="pl-search">
      <flexbox class="pl-select">
        <a class="ve-flexbox-item" @click="showPurpose" :class="{'pl-select-up':show===4}">
          <span>用途</span>
        </a>
        <a class="ve-flexbox-item" @click="showBrand" :class="{'pl-select-up':show===1}">
          <span>品牌</span>
        </a>
        <a class="ve-flexbox-item" @click="showType" :class="{'pl-select-up':show===2}">
          <span>租期</span>
        </a>
        <a class="ve-flexbox-item" @click="showRent" :class="{'pl-select-up':show===3}">
          <span>租金</span>
        </a>
      </flexbox>
      <div class="options">
        <transition name="fade-down">
          <ul class="brand" v-show="show===4">
            <li :class="{'selected':purpose&&item.dicValue===purpose.dicValue}" v-for="(item,index) in purposeDic" :key="index" @click="selectPurpose(item)">{{item.dicName}}</li>
          </ul>
        </transition>
        <transition name="fade-down">
          <ul class="brand" v-show="show===1">
            <li :class="{'selected':brank&&item.dicValue===brank.dicValue}" v-for="(item,index) in brandDic" :key="index" @click="selectBrand(item)">{{item.dicName}}</li>
          </ul>
        </transition>
        <transition name="fade-down">
          <ul class="brand" v-show="show===2">
            <li :class="{'selected':rentType&&rentType.dicValue==='day'}" @click="dayrent">短租</li>
            <li :class="{'selected':rentType&&rentType.dicValue==='month'}" @click="monthrent">长租</li>
          </ul>
        </transition>
        <transition name="fade-down">
          <ul class="brand" v-show="show===3">
            <li :class="{'selected':rent&&item.dicValue===rent.dicValue}" v-for="(item,index) in rentList" :key="index" @click="selectRent(item)">{{item.dicName}}</li>
          </ul>
        </transition>
      </div>
    </div>
    <div class="filter" v-show="filterShow">
      <span class="filter-item" v-show="brank!==null" @click="delBrankFilter">{{brank&&brank.dicName}}</span>
      <span class="filter-item" v-show="rentType!==null" @click="delTypeFilter">{{rentType&&rentType.dicName}}</span>
      <span class="filter-item" v-show="rent!==null" @click="delRentFilter">{{rent&&rent.dicName}}</span>
      <span class="filter-item" v-show="purpose!==null" @click="delPurposeFilter">{{purpose&&purpose.dicName}}</span>
    </div>
  </div>
</template>
<script>
import { Flexbox } from '../base/flexbox'
export default {
  name: 'select',
  props: {
    purposeDic: Array,
    brandDic: Array,
    rentDay: Array,
    rentMonth: Array,
    defaultPurpose: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      show: -1,
      maskShow: false,
      rentList: [],
      purpose: null,
      rentType: null,
      brank: null,
      rent: null
    }
  },
  computed: {
    filterShow() {
      let ret = !!this.brank || !!this.rentType || !!this.rent || !!this.purpose
      this.$emit('on-showfilter', ret)
      return ret
    }
  },
  watch: {
    purposeDic: {
      handler: function(val) {
        if (val) {
          let list = val.filter(item => item.dicValue === this.defaultPurpose)
          if (list.length === 1) {
            this.purpose = list[0]
          }
        }
      },
      immediate: true
    }
  },
  components: {
    Flexbox
  },
  methods: {
    showPurpose() {
      this.show === 4 ? (this.show = -1) : (this.show = 4)
      this.maskShow = !this.maskShow
    },
    showBrand() {
      this.show === 1 ? (this.show = -1) : (this.show = 1)
      this.maskShow = !this.maskShow
    },
    showType() {
      this.show === 2 ? (this.show = -1) : (this.show = 2)
      this.maskShow = !this.maskShow
    },
    showRent() {
      if (this.rentList.length > 0) {
        this.show === 3 ? (this.show = -1) : (this.show = 3)
        this.maskShow = !this.maskShow
      }
    },
    maskClick() {
      this.maskShow = false
      this.show = -1
    },
    dayrent() {
      this.rentType = { dicValue: 'day', dicName: '短租' }
      this.rentList = this.rentDay
      this.show = -1
      this.maskShow = false
      this.$emit('on-rent-type', 'day')
    },
    monthrent() {
      this.rentType = { dicValue: 'month', dicName: '长租' }
      this.rentList = this.rentMonth
      this.show = -1
      this.maskShow = false
      this.$emit('on-rent-type', 'month')
    },
    selectBrand(item) {
      this.brank = item
      this.rent = null
      this.show = -1
      this.maskShow = false
      this.$emit('on-brand', item.dicValue)
    },
    selectRent(item) {
      this.rent = item
      this.show = -1
      this.maskShow = false
      this.$emit('on-rent', item.dicValue)
    },
    selectPurpose(item) {
      this.purpose = item
      this.show = -1
      this.maskShow = false
      this.$emit('on-purpose', item.dicValue)
    },
    delBrankFilter() {
      this.brank = null
      this.$emit('on-brand', '')
    },
    delTypeFilter() {
      this.rentType = null
      this.rent = null
      this.$emit('on-rent-type', '')
    },
    delRentFilter() {
      this.rent = null
      this.$emit('on-rent', '')
    },
    delPurposeFilter() {
      this.purpose = null
      this.$emit('on-purpose', '')
    }
  }
}
</script>
<style lang="scss">
.pl-search {
  height: 0.88rem;
  .options {
    position: relative;
    z-index: 1;
  }
}

.pl-select {
  height: 0.88rem;
  line-height: 0.88rem;
  font-size: 0.28rem;
  color: #fff;
  background-color: #7c7c8b;
  span {
    position: relative;
    display: inline-block;
    padding-right: 20px;
    &:after {
      transition: transform 0.3s, -webkit-transform 0.3s;
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
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 0.28rem;
    color: #fff;
    padding: 0 35px 0 20px;
    @include topline();
  }
  li.selected {
    &:after {
      content: '';
      width: 12px;
      height: 12px;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAUCAMAAACgaw2xAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA8UExURUdwTOQ6OtQqKuQ4O/8AAOM4O+Q4POI4OuM4O+Q4O+M4O+M5POQ4O+M4O+U4OuU2POQ4POQ4O+Q5O+Q5POG6XjYAAAATdFJOUwAvBl4BstwRzseW9XvrRR2+iVGqKQ+qAAAAaUlEQVQY023PSQ6AIBBEUSZpBhGTuv9dnRAiVq869VdPKXZmj3RXCTxYlMp2nbGxXTxWtrsFi2NhhRe2b8ia7bXAUllEam+M8pWZNyAIlUkY5SsbZZa95S9rhcjuQmVX4bKzdNlcuuy5A/z7BLUpU+pnAAAAAElFTkSuQmCC)
        no-repeat;
      background-size: 12px auto;
      position: absolute;
      right: 10px;
      top: 50%;
      margin-top: -6px;
    }
  }
}

.filter {
  height: 0.55rem;
  background-color: #eaeaea;
  padding: 0.075rem 0 0.075rem 0.3rem;
  .filter-item {
    font-size: 0.24rem;
    color: #928f9c;
    border: 1px solid #7f7c8b;
    border-radius: 0.19rem;
    height: 0.38rem;
    line-height: 0.38rem;
    margin-right: 0.1rem;
    position: relative;
    display: inline-block;
    padding: 0 0.6rem 0 0.3rem;
    &:after {
      content: '';
      position: absolute;
      top: 50%;
      right: 10px;
      width: 12px;
      height: 12px;
      margin-top: -6px;
      background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeBAMAAADJHrORAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN0S+bUAAAANdFJOU00ARgwYLAUnEg40OzwIOFrEAAAAvklEQVQY02MQBAHXQww6IWAWAxCLFTGAgHoilO/EAAEqEL4oAwwEgvkL4HwuEB8hDVLAIOiAxGcRZBBTQOIzJTKIMyCDQgYhkLImIKEB0qjIACI5hBUYmAwbQDIMASBthkYMypIgg1gZNoC0KQsrGU4CMbgZwMYzGRpLQhhQc5UFJ6HYoyxoBGVB1U8WhqqHmCepZGgEMQ9i3ySgFRD7wO6RRLgH3b3o/kH3L3p4YIQXenhihDd6fGDEF3J8AgDkYx3BeW71dAAAAABJRU5ErkJggg==');
      background-size: 12px;
    }
  }
}

.pl-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
}
</style>


