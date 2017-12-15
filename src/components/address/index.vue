<template>
  <div>
    <my-header content="地址管理"></my-header>
    <div class="addr-list">
      <div class="addr-item" v-for="item in list" :key="item.memberId">
        <div @click="setDefault(item.id)">
          <div class="addr-header">
            <div class="addr-user" v-text="item.name"></div>
            <div class="addr-tel" v-text="item.tel"></div>
          </div>
          <div class="addr-body" v-attr-detail="item">
          </div>
        </div>
        <div class="addr-footer" :class="{'addr-default':item.isDefault==1}">
          <a class="ft-left" @click="setDefault(item.id)" v-text="defaultText">默认地址</a>
          <div class="ft-right">
            <a class="ft-edit" @click="edit(item)">编辑</a>
            <a class="ft-delete" @click="del(item)">删除</a>
          </div>
        </div>
      </div>
      <div class="addr-new">
        <div class="addr-body">
          <a href="javascript:void(0)" @click="add">
            添加地址
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import http from '@/libs/httpUtil'
import MyHeader from '../header'
export default {
  name: 'my-address',
  components: {
    MyHeader
  },
  props: {
    choose: Boolean
  },
  data() {
    return {
      loading: null
    }
  },
  computed: {
    defaultText() {
      if (this.choose) {
        return '选择地址'
      }
      return '默认地址'
    },
    list() {
      return this.$store.state.addrlist
    }
  },
  created() {
    this.loading = this.$ve.loading('数据加载中')
    this.getList()
  },
  beforeMount() {
    document.title = '地址选择'
  },
  methods: {
    getList() {
      http
        .getAddressList()
        .then(res => {
          this.loading && this.loading.hide()
          this.loading = null
          if (res.errNo == 0) {
            this.$store.commit('recevieAddrList', res.data.addressList)
          } else {
            this.$ve.alert(res.errMsg)
          }
        })
        .catch(() => {
          this.loading && this.loading.hide()
          this.loading = null
          this.$ve.alert('服务器错误，请稍后重试')
        })
    },
    add() {
      this.$store.commit('recevieEditAddr', {})
      this.$router.push({ path: '/addaddress' })
    },
    edit(item) {
      this.$store.commit('recevieEditAddr', item)
      this.$router.push('/addaddress')
    },
    del(item) {
      if (item.isDefault === 1) {
        this.$ve.alert('默认地址不能删除')
      } else {
        let confirm = this.$ve.confirm('确定要删除此地址吗？', () => {
          http.deleteAddress(item.id).then(res => {
            if (res.errNo == 0) {
              confirm.hide(() => {
                this.$ve.alert('删除成功', () => {
                  this.getList()
                })
              })
            } else {
              confirm.hide(() => {
                this.$ve.alert(res.errMsg)
              })
            }
          })
          return false
        })
      }
    },
    setDefault(id) {
      let loading = this.$ve.loading('加载中...')
      http.setAddressDefault(id).then(res => {
        loading.hide()
        if (res.errNo == 0) {
          this.getList()
        }
      })
    }
  }
}
</script>
<style lang="scss">
.addr-list {
  background-color: #eaeaea;
  width: 7.5rem;
  margin-bottom: 0.3rem;
  .addr-item {
    box-sizing: border-box;
    background-color: #fff;
    box-sizing: border-box;
    padding: 0 0.3rem;
    margin-bottom: 0.3rem;
    height: 2.64rem;
    .addr-header {
      padding: 0.3rem 0 0.3rem;
      line-height: 0.3rem;
      display: flex;
      .addr-user {
        flex: 1;
        font-size: 0.3rem;
        color: #323136;
        padding-left: 0.4rem;
        position: relative;
        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 0.26rem;
          height: 0.26rem;
          background-image: url('../../assets/icon-user.png');
          background-repeat: no-repeat;
          background-size: 0.26rem 0.26rem;
        }
      }
      .addr-tel {
        flex: 1;
        text-align: right;
        font-size: 0.28rem;
        color: #323136;
        position: relative;
      }
    }
    .addr-body {
      padding: 0 0 0.3rem;
      background-color: #fff;
      color: #1b1b1b;
      font-size: 0.28rem;
      word-wrap: break-word;
      position: relative;
      @include bottomline();
    }
    .addr-footer {
      position: relative;
      height: 0.88rem;
      line-height: 0.88rem;
      display: flex;
      font-size: 0.28rem;
      color: #323136;
      .ft-left {
        flex: 1;
        padding-left: 0.4rem;
        position: relative;
        &::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          width: 0.28rem;
          height: 0.28rem;
          background: url('../../assets/icon-nouse.png') no-repeat;
          background-size: 100%;
          transform: translateY(-50%);
        }
      }
      .ft-right {
        flex: 1;
        display: flex;
        .ft-edit {
          flex: 1;
          padding-left: 0.4rem;
          position: relative;
          &::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 0;
            width: 0.24rem;
            height: 0.24rem;
            background: url('../../assets/icon-edit.png') no-repeat;
            background-size: 100%;
            transform: translateY(-50%);
          }
        }
        .ft-delete {
          flex: 1;
          padding-left: 0.4rem;
          position: relative;
          &::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 0;
            width: 0.26rem;
            height: 0.27rem;
            background: url('../../assets/icon-delete.png') no-repeat;
            background-size: 100%;
            transform: translateY(-50%);
          }
        }
      }

      @include bottomline();
    }
    .addr-default {
      .ft-left {
        &::before {
          background: url('../../assets/icon-use.png') no-repeat;
          background-size: 100%;
        }
      }
    }
  }
}

.addr-new {
  background-color: #eaeaea;
  padding-bottom: 0.6rem;
  .addr-body {
    height: 2.64rem;
    background-color: #fff;
    display: flex;
    a {
      display: block;
      flex: 1;
      width: 100%;
      font-size: 0.28rem;
      color: #928f9c;
      text-align: center;
      &::before {
        content: '';
        display: block;
        height: 50%;
        background-position: 50% 90%;
        background-repeat: no-repeat;
        background-size: 0.45rem 0.45rem;
        background-image: url('../../assets/icon-add.png');
      }
    }
  }
}
</style>

