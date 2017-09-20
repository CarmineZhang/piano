<template>
  <div class="message">
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
            <span>{{item.creatTime|dateformate}}</span>
          </div>
          <div class="msg-main" :class="{'msg-main-read':item.state=='1'}" v-slider>
            <div class="msg-slider">
              <p class="msg-m-header" v-text="item.title"></p>
              <div>
                <p class="msg-m-content" v-text="item.msgInfo"></p>
              </div>
              <p class="msg-actions">
                <a @click="showDetail(item.id)">查看详情>></a>
              </p>
            </div>
            <p class="msg-action-del" @click="del(item.id)">
              <span>删除</span>
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
import slider from './slider'
export default {
  name: 'message',
  components: {
    MyHeader,
    ScrollLoad
  },
  directives: {
    slider: slider
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
      this.$ve.confirm('确定要删除此消息吗？', () => {
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
      })
    }
  }
}
</script>
<style lang="scss">
.message {
  background-color: #eee;
}

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
  width: 6.9rem;
  margin: 0 auto;
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
      position: relative;
      overflow: hidden;
      border-radius: .22rem;
      .msg-slider {
        background: #fff;
        padding: .3rem;
        border-radius: .22rem;
        position: relative;
        background-color: #fff;
        z-index: 2;
        .msg-m-header {
          font-size: .32rem;
          color: #323136;
        }
        .msg-m-content {
          font-size: .24rem;
          color: #928f9c;
          text-indent: 2em;
        }
        .msg-actions {
          font-size: .24rem;
          text-align: right;
          a {
            display: inline-block;
            color: #928f9c;
            text-decoration: underline;
          }
        }
      }
      .msg-action-del {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        margin-left: 10px;
        border-radius: .22rem;
        background-color: #fff;
        width: 95px;
        display: flex;
        justify-content: center;
        align-items: center;
        span {
          flex: 1;
          font-size: .3rem;
          color: #323136;
          text-align: center;
        }
      }
    }
  }
  .msg-main-read {
    .msg-m-header {
      color: #d4d4d4;
    }
    .msg-m-content {
      color: #d4d4d4;
    }
    .msg-actions {
      a {
        color: #d4d4d4;
      }
    }
  }
}
</style>

