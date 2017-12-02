<template>
  <div>
    <addr-list choose></addr-list>
    <div class="footer-action choose-addr-footer">
      <a class="action" @click="confirmAddr">确认地址</a>
    </div>
  </div>
</template>
<script>
import AddrList from './index'
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
    defaultAddr() {
      return this.$store.getters.defaultAddr
    }
  },
  methods: {
    confirmAddr() {
      if (this.defaultAddr) {
        this.$store.commit('updateSelectedPiano', {
          deliveryPrice: this.defaultAddr.deliveryPrice
        })
        this.$router.push({
          name: 'order-detail',
          query: { id: this.defaultAddr.id }
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
    flex: 1;
  }
  .desc {
    background-color: #7f7c8b;
    flex: 1;
    text-align: right;
    padding-right: 10px;
    height: 0.88rem;
    line-height: 0.88rem;
    font-size: 0.28rem;
    color: #fff;
    .price {
      font-size: 0.34rem;
    }
  }
}
</style>

