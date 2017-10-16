<template>
  <div>
    <div class="search-head" :class="{'show-filter':filterShow}">
      <div class="fixed-head" :style="style">
        <top></top>
        <search-bar @on-search="search" @on-change="search" :default-value="pianoName"></search-bar>
        <ve-select @on-showfilter="showFilter" :default-purpose="purpose" :purpose-dic="purposeDic" :brand-dic="brandDic" :rent-day="rentDay" :rent-month="rentMonth" @on-brand="selectBrand" @on-rent-type="selectRentType" @on-rent="selectRent" @on-purpose="selectPurpose"></ve-select>
      </div>
    </div>
    <scroll-load @load-more="loadmore" v-model="allowload">
      <list :data="list" :rent-type="rentType"></list>
    </scroll-load>
  </div>
</template>
<script>
import Top from '../top/'
import SearchBar from '../base/searchbar'
import VeSelect from './select'
import List from './list'
import http from '@/libs/httpUtil'
import ScrollLoad from '@/components/base/scrollload'
export default {
  name: 'product-list',
  components: {
    Top,
    SearchBar,
    VeSelect,
    List,
    ScrollLoad
  },
  data() {
    return {
      maskShow: false,
      style: null,
      list: [],
      purposeDic: [],
      brandDic: [],
      rentDay: [],
      rentMonth: [],
      index: 1,
      size: 10,
      allowload: true,
      brand: '',
      rentType: 'month',
      rent: '',
      pianoName: '',
      purpose: '',
      filterShow: false
    }
  },
  created() {
    let key = this.$store.state.route.params.key
    if (key) {
      this.pianoName = key
    }
    let purpose = this.$store.state.route.query.purpose
    if (purpose) {
      this.purpose = purpose
    }
    this.getList()
  },
  beforeMount() {
    document.title = "钢琴列表"
    var self = this
    window.onscroll = function() {
      var top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (top > 50) {
        self.style = { transform: 'translateY(-1.72rem)', transition: '0.5s ease 0s' }
      } else {
        self.style = { transform: 'translateY(0px)', transition: '0.5s ease 0s' }
      }
    }
  },
  beforeDestroy() {
    window.onscroll = null
  },
  methods: {
    showFilter(val) {
      this.filterShow = val
    },
    selectBrand(brand) {
      this.brand = brand
      this.getList()
    },
    selectRentType(type) {
      this.rentType = type
      if (this.rentType === '') {
        this.rentType = 'month'
      }
      this.rent = ''
      this.getList()
    },
    selectRent(rent) {
      this.rent = rent
    },
    selectPurpose(purpose) {
      this.purpose = purpose
      this.getList()
    },
    search(val) {
      this.pianoName = val
      this.getList()
    },
    getList() {
      this.index = 1
      http.getPiano(this.index, this.size, this.brand, this.rentType, this.rent, this.pianoName, this.purpose).then((res) => {
        if (res.errNo == 0) {
          this.list = res.data.list
          this.purposeDic = res.data.purposeDic
          this.brandDic = res.data.brandDic
          this.rentDay = res.data.rentDay
          this.rentMonth = res.data.rentMonth
          if (this.list.length < this.size) {
            this.allowload = false
          } else {
            this.allowload = true
          }
        }
      })
    },
    loadmore() {
      this.index = this.index + 1
      http.getPiano(this.index, this.size, this.brand, this.rentType, this.rent, this.pianoName, this.purpose).then((res) => {
        if (res.errNo == 0) {
          let list = res.data.list
          this.brandDic = res.data.brandDic
          this.rentDay = res.data.rentDay
          this.rentMonth = res.data.rentMonth
          if (list.length < this.size) {
            this.allowload = false
          } else {
            this.allowload = true
          }
          this.list = this.list.concat(list)
        }
      })
    }
  }
}
</script>
<style lang="scss">
.search-head {
  height: .88rem * 2+0.84rem;
  .fixed-head {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 104;
  }
}

.show-filter {
  height: .88rem * 2+0.84rem+0.55rem;
}
</style>

