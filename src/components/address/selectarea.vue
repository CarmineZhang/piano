<template>
  <div class="ve-address">
    <transition name="ve-mask">
      <div class="mask mask-transparent" v-show="show"></div>
    </transition>
    <div class="mod-address-slide-main" :class="{'mod-address-slide-toggle': show}">
      <div class="mod-address-slide-header">
        选择地区
        <i class="close" @click="close"></i>
      </div>
      <div class="mod-address-slide-body">
        <ul class="mod-address-slide-tabs">
          <li :class="{'cur':level===index}" :data-level="index" v-for="(item,index) in header" :key="index" @click="changeArea">
            <span v-text="item.label"></span>
          </li>
        </ul>
        <ul class="mod-address-slide-list">
          <li :class="{'cur':item.areaCode==selectKey}" :data-level="level" v-for="(item, index) in data" :key="index" v-text="item.areaName" @click="change($event,item)"></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import http from '@/libs/httpUtil'
export default {
  name: 've-address',
  data() {
    return {
      show: false,
      data: [],
      province: 0, //省
      city: 0, //市
      county: 0, //县
      level: 0,
      result: [],
      header: [
        {
          label: '请选择',
          key: -1
        }
      ],
      selectKey: 0
    }
  },
  props: {
    value: Boolean
  },
  computed: {
    provinceList() {
      return this.$store.state.province
    },
    cityList() {
      return this.$store.state.city
    },
    countyList() {
      return this.$store.state.county
    }
  },
  watch: {
    value(val) {
      this.show = val
    },
    show(val) {
      this.$emit('input', val)
      if (val) {
        this.getProvince()
        this.province = 0
        this.city = 0
        this.county = 0
        this.level = 0
        this.result.splice(0)
        this.header.splice(0, this.header.length, {
          label: '请选择',
          key: -1
        })
        this.selectKey = 0
      }
    },
    level(val) {
      var temp = this.result[val]
      if (temp) {
        this.selectKey = temp.key
      } else {
        this.selectKey = 0
      }
    }
  },
  methods: {
    getProvince() {
      if (this.$store.state.province.length !== 0) {
        this.data = this.$store.state.province
      } else {
        http.getProvince().then(res => {
          if (res.errNo == 0) {
            this.$store.commit('receiveProvince', res.data)
            this.data = res.data
          }
        })
      }
    },
    close() {
      this.show = false
    },
    setResult(level, ob) {
      var len = this.result.length
      this.result.splice(level, len, ob)
    },
    setHeader(level, ob) {
      this.header.splice(level)
      this.header.push(ob, {
        label: '请选择',
        key: -1
      })
    },
    changeArea(e) {
      var target = e.currentTarget
      var ds = target.dataset
      var level = +ds.level
      if (level === this.level) {
        return
      } else if (level === 0) {
        this.data = this.provinceList
      } else if (level === 1) {
        this.data = this.cityList[this.province]
      } else if (level === 2) {
        this.data = this.countyList[this.city]
      }
      this.level = level
    },
    change(e, item) {
      var target = e.target
      var ds = target.dataset
      var level = +ds.level
      this.setResult(level, {
        key: item.areaCode,
        value: item.areaName
      })
      this.setHeader(level, {
        label: item.areaName,
        key: item.areaCode
      })
      if (level === 0) {
        this.province = item.areaCode
        this.level = level + 1
        if (this.cityList[this.province]) {
          this.data = this.cityList[this.province]
        } else {
          this.data.splice(0, this.data.length)
          http.getCity(this.province).then(res => {
            if (res.errNo == 0) {
              this.$store.commit('receiveCity', {
                pcode: this.province,
                list: [...res.data]
              })
              this.data = res.data
            }
          })
        }
      } else if (level === 1) {
        this.city = item.areaCode
        this.level = level + 1
        if (this.countyList[this.city]) {
          this.data = this.countyList[this.city]
        } else {
          this.data.splice(0, this.data.length)
          http.getCounty(this.city).then(res => {
            if (res.errNo == 0) {
              this.$store.commit('receiveCounty', {
                ccode: this.city,
                list: [...res.data]
              })
              this.data = res.data
            }
          })
        }
      } else if (level === 2) {
        this.county = item.areaCode
        this.level = level + 1
        this.show = false
        this.$emit('on-change', this.result)
      }
    }
  }
}
</script>
<style lang="scss">
.mod-address-slide {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 110;
  background-color: rgba(0, 0, 0, 0.7);
}

.mod-address-slide-main {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 5000;
  width: 100%;
  background-color: #ffffff;
  transform: translateY(100%);
  -webkit-transition: -webkit-transform 0.3s;
  transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
}

.mod-address-slide-toggle {
  transform: translateY(0);
}

.mod-address-slide-header {
  position: relative;
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  color: #333;
  background-color: #f3f2f8;
  text-align: center;
}

.mod-address-slide-header::after,
.mod-address-slide-tabs::after {
  background: #ddd;
  height: 1px;
  left: 0;
  right: 0;
  bottom: 0;
  content: '';
  position: absolute;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
.mod-address-slide-tabs {
  overflow: hidden;
  padding: 0 10px;
  position: relative;
  li {
    float: left;
    margin-right: 10px;
    font-size: 14px;
    span {
      position: relative;
      display: inline-block;
      height: 42px;
      line-height: 42px;
    }
  }
  li.cur {
    span {
      &:after {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        position: absolute;
        bottom: 0;
        left: 0;
        background: #e4393c;
        z-index: 2;
      }
    }
  }
}

.cur {
  color: #e4393c;
}

.mod-address-slide-list {
  padding: 5px 10px;
  font-size: 14px;
  height: 300px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  li {
    position: relative;
    padding: 10px 0;
  }
  li.on {
    color: #e4393c;
    &:after {
      content: '\20';
      display: block;
      width: 20px;
      height: 20px;
      position: absolute;
      right: 0;
      top: 50%;
      margin-top: -10px;
      background: url('../../assets/area.png') no-repeat;
      background-size: 20px 80px;
      background-position: 0 -20px;
    }
  }
}
</style>
