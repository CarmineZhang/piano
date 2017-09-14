<template>
  <div>
    <my-header content="收藏"></my-header>
    <scroll-load @load-more="loadmore" v-model="allowload">
      <div class="pl-item" v-for="item in list" :key="item.id">
        <div class="pl-item-img" @click="showDetail(item.pianoId)">
          <img :src="item.coverUrl" alt="">
        </div>
        <div class="pl-item-content">
          <p class="title" v-text="item.pianoName"></p>
          <p class="price">
            <span class="tit">租金：</span>
            <span class="ct">¥ {{item.longRentActive}} / 天</span>
            <span class="pledge">押金：</span>
            <span class="pledge">¥ {{item.longTermDeposit}}</span>
          </p>
          <p class="fa-actions">
            <a class="action" @click="del(item.id)">删除</a>
          </p>
        </div>
      </div>
    </scroll-load>
  </div>
</template>
<script>
import ScrollLoad from '@/components/base/scrollload'
import http from '@/libs/httpUtil'
import MyHeader from '../header'
export default {
  name: 'favorite',
  components: {
    ScrollLoad,
    MyHeader
  },
  created() {
    this.getList()
  },
  beforeMount() {
    document.title = '收藏'
  },
  data() {
    return {
      list: [],
      index: 1,
      size: 0,
      allowload: true
    }
  },
  methods: {
    getList() {
      http.getCollections(this.index, this.size).then(res => {
        if (res.errNo == 0) {
          this.list = res.data.dataList
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
      http.getCollections(this.index, this.size).then(res => {
        if (res.errNo == 0) {
          let list = res.data.dataList
          if (list.length < this.size) {
            this.allowload = false
          } else {
            this.allowload = true
          }
          this.list = this.list.concat(list)
        }
      })
    },
    del(id) {
      let loading = this.$ve.loading('处理中...')
      http.deleteCollection(id).then(res => {
        loading.hide()
        if (res.errNo == 0) {
          this.$ve.alert('删除成功', () => {
            this.getList()
          })
        } else {
          this.$ve.alert(res.errMsg)
        }
      })
    }
  }
}
</script>
<style lang="scss">
.fav-title {
  padding-left: .3rem;
  height: .55rem;
  line-height: .55rem;
  font-size: .24rem;
  color: #1b1b1b;
  background-color: #eee;
}

.fa-actions {
  text-align: right;
  .action {
    margin-top: 10px;
    margin-right: 10px;
    height: 24px;
    line-height: 24px;
    display: inline-block;
    background-color: #bf3737;
    font-size: 12px;
    color: #fff;
    text-align: center;
    padding: 3px 10px;
    border-radius: 4px;
  }
}
</style>

