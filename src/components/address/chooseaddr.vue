<template>
  <div>
    <addr-list choose></addr-list>
    <div class="footer-action choose-addr-footer">
      <!-- <div class="desc">
                                                          合计：¥
                                                          <em class="price">{{deliverycost|ToThousands}}</em>
                                                        </div> -->
      <a class="action" @click="confirmAddr">确认地址</a>
    </div>
  </div>
</template>
<script>
import AddrList from './index'
import http from '@/libs/httpUtil'
export default {
  name: 'choose-addr',
  components: {
    AddrList
  },
  data() {
    return {
      deliverycost: 0
    }
  },
  computed: {
    selectPiano() {
      return this.$store.state.selectPiano
    },
    defaultAddrId() {
      return this.$store.getters.defaultAddrId
    }
  },
  methods: {
    confirmAddr() {
      if (this.defaultAddrId) {
        http.order(this.selectPiano, this.defaultAddrId).then(res => {
          if (res.errNo == 0) {
            this.$ve.alert('下单成功', () => {
              this.$router.push({ name: 'order-detail', query: { id: res.data.id } })
            })
          }
        })
      } else {
        this.$ve.alert('请选择一个地址')
      }
    }
  }
}
</script>
<style lang="scss">
.choose-addr-footer {
  .action {
    // flex: 0 0 1.8rem;
    flex: 1;
  }
  .desc {
    background-color: #7f7c8b;
    flex: 1;
    text-align: right;
    padding-right: 10px;
    height: .88rem;
    line-height: .88rem;
    font-size: .28rem;
    color: #fff;
    .price {
      font-size: .34rem;
    }
  }
}
</style>

