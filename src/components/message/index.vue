<template>
  <div>
    <div class="msg-top">
      <div class="msg-wrapper">
        <my-header content="消息"></my-header>
        <div class="msg-header">
          <ul class="msg-nav">
            <li :class="{'cur':type=='1'}" @click="showOderMessage">
              <span>订单消息</span>
            </li>
            <li :class="{'cur':type=='2'}" @click="showSystemMessage">
              <span>系统消息</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <scroll-load @load-more="loadmore" v-model="allowload">
      <div class="msg-list">
        <div class="msg-item" v-for="item in allList " :key="item.id">
          <div class="msg-time">
            <span v-text="item.creatTime"></span>
          </div>
          <div class="msg-main">
            <p class="msg-m-header" v-text="item.title"></p>
            <p class="msg-m-content"></p>
            <p class="msg-options">
              <div class="action">
                <a @click="del(item.id)">删除</a>
              </div>
              <div class="action detail-action">
                <a @click="showDetail(item.id)">查看详情>></a>
              </div>
            </p>
          </div>
        </div>
      </div>
    </scroll-load>
  </div>
</template>
<script>
import MyHeader from '../header'
import http from '@/libs/httpUtil'
import ScrollLoad from '@/components/base/scrollload'
export default {
  name: 'message',
  components: {
    MyHeader,
    ScrollLoad
  },
  data() {
    return {
      allowload: true,
      index: 1,
      size: 100,
      allList: [],
      type: '1'
    }
  },
  created() {
    this.getList()
  },
  methods: {
    loadmore() {
      this.index = this.index + 1
      http.getMessageList(this.index, this.size, this.type).then(res => {
        if (res.errNo == 0) {
          let list = res.data.dataList
          if (list.length < this.size) {
            this.allowload = false
          } else {
            this.allowload = true
          }
          this.allList = this.allList.concat(list)
        }
      })
    },
    showOderMessage() {
      this.type = "1"
      this.getList()
    },
    showSystemMessage() {
      this.type = "2"
      this.getList()
    },
    getList() {
      this.index = 1
      this.allowload = true
      http.getMessageList(this.index, this.size, this.type).then(res => {
        if (res.errNo == 0) {
          let list = res.data.dataList
          if (list.length < this.size) {
            this.allowload = false
          } else {
            this.allowload = true
          }
          this.allList = list
        }
      })
    },
    showDetail(id) {
      this.$router.push({ name: 'message-detail', query: { id: id } })
    },
    del(id) {
      let loading = this.$ve.loading('处理中...')
      http.delMessage(id).then(res => {
        loading.hide()
        if (res.errNo == 0) {
          this.$ve.alert('删除成功', () => {
            this.getList()
          })
        }
      }).catch(() => {
        loading.hide()
      })
    }
  }
}
</script>
<style lang="scss">
.msg-top {
  height: 80px;
  .msg-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
  }
}

.msg-header {
  height: 40px;
  .msg-nav {
    background-color: #7c7c8b;
    font-size: .28rem;
    color: #cfccd7;
    display: flex;
    li {
      flex: 1;
      text-align: center;
      span {
        display: inline-block;
        padding: 0 15px;
        position: relative;
        line-height: 40px;
      }
    }
    li.cur {
      span {
        color: #fff;
        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background-color: #fff;
        }
      }
    }
  }
}

.msg-list {
  padding: 0 .3rem;
  .msg-item {
    .msg-time {
      padding: .3rem 0;
      text-align: center;
      span {
        color: #928f9c;
        font-size: .24rem;
      }
    }
    .msg-main {
      background: #fff;
      padding: .3rem;
      border-radius: 15px;
      .msg-m-header {
        font-size: .32rem;
        color: #323136;
      }
      .msg-m-content {
        font-size: .24rem;
        color: #928f9c;
        text-indent: 2em;
      }
      .msg-options {
        font-size: .24rem;
        display: flex;
        .action {
          flex: 1;
          a {
            display: inline-block;
            color: #928f9c;
            text-decoration: underline;
          }
        }
        .detail-action {
          text-align: right;
        }
      }
    }
  }
}
</style>

