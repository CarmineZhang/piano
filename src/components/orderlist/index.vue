<template>
  <div>
    <my-header content="订单"></my-header>
    <div class="order-list">
      <div class="order-no-pay">
        <div class="title" @click="showNoPayList" :class="{'hide-title':!noPayFlag}">
          <span>待支付订单({{noPaylist.length}})</span>
        </div>
        <div class="list" v-show="noPayFlag">
          <div v-for="item in noPaylist" :key="item.id">
            <div class="order-date" v-text="item.orderTime"></div>
            <div class="order-detail">
              <div class="order-wrapper">
                <div class="order-detail-addr">
                  <p>
                    <span>收件人：</span>
                    <span v-text="item.receiverPerson"></span>
                  </p>
                  <p>
                    <span>地址：</span>
                    <span v-text="item.receiverAddress"></span>
                  </p>
                  <p>
                    <span>联系方式：</span>
                    <span v-text="item.phone"></span>
                  </p>
                </div>
                <div class="order-detail-o">
                  <p>
                    <span>钢琴：</span>
                    <span v-text="item.pianoName"></span>
                  </p>
                  <p>
                    <span>租期：</span>
                    <span v-text="item.leaseNum"></span>
                  </p>
                  <p class="price">
                    <span>总费用:</span>
                    <span>线上支付
                      <b>¥{{item.downPayment|ToThousands}}</b>+货到付款
                      <b>¥{{item.stillPay||ToThousands}}</b>
                    </span>
                    <span class="desc">(剩余押金)</span>
                  </p>
                </div>
                <div class="order-detail-op">
                  <div class="status">
                    <span>状态：</span>
                    <span class="desc">未支付</span>
                  </div>
                  <a class="op" @click="pay(item)">
                    继续支付
                  </a>
                </div>
              </div>
              <div class="more"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="order-distribution">
        <div class="title" @click="showDeliveryList" :class="{'hide-title':!deliveryFlag}">
          <span>配送中({{deliverylist.length}})</span>
        </div>
        <div class="list" v-show="deliveryFlag">
          <div v-for="item in deliverylist" :key="item.id">
            <div class="order-date" v-text="item.orderTime"></div>
            <div class="order-detail">
              <div class="order-wrapper">
                <div class="order-detail-addr">
                  <p>
                    <span>收件人：</span>
                    <span v-text="item.receiverPerson"></span>
                  </p>
                  <p>
                    <span>地址：</span>
                    <span v-text="item.receiverAddress"></span>
                  </p>
                  <p>
                    <span>联系方式：</span>
                    <span v-text="item.phone"></span>
                  </p>
                </div>
                <div class="order-detail-o">
                  <p>
                    <span>钢琴：</span>
                    <span v-text="item.pianoName"></span>
                  </p>
                  <p>
                    <span>租期：</span>
                    <span v-text="item.leaseNum"></span>
                  </p>
                  <p class="price">
                    <span>总费用:</span>
                    <span>线上支付
                      <b>¥{{item.downPayment|ToThousands}}</b>+货到付款
                      <b>¥{{item.stillPay||ToThousands}}</b>
                    </span>
                    <span class="desc">(剩余押金)</span>
                  </p>
                </div>
                <div class="order-detail-op">
                  <div class="status">
                    <span>状态：</span>
                    <span class="desc">配送中</span>
                  </div>
                  <a class="op">
                    取消订单
                  </a>
                </div>
              </div>
              <div class="more"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="order-used">
        <div class="title" @click="showUsedList" :class="{'hide-title':!usedFlag}">
          <span>使用中({{usedlist.length}})</span>
        </div>
        <div class="list" v-show="usedFlag">
          <div v-for="item in usedlist" :key="item.id">
            <div class="order-date" v-text="item.orderTime"></div>
            <div class="order-detail">
              <div class="order-wrapper">
                <div class="order-detail-addr">
                  <p>
                    <span>收件人：</span>
                    <span v-text="item.receiverPerson"></span>
                  </p>
                  <p>
                    <span>地址：</span>
                    <span v-text="item.receiverAddress"></span>
                  </p>
                  <p>
                    <span>联系方式：</span>
                    <span v-text="item.phone"></span>
                  </p>
                </div>
                <div class="order-detail-o">
                  <p>
                    <span>钢琴：</span>
                    <span v-text="item.pianoName"></span>
                  </p>
                  <p>
                    <span>租期：</span>
                    <span v-text="item.leaseNum"></span>
                  </p>
                  <p class="price">
                    <span>总费用:</span>
                    <span>线上支付
                      <b>¥{{item.downPayment|ToThousands}}</b>+货到付款
                      <b>¥{{item.stillPay||ToThousands}}</b>
                    </span>
                    <span class="desc">(剩余押金)</span>
                  </p>
                </div>
                <div class="order-detail-op">
                  <div class="status">
                    <span>状态：</span>
                    <span class="desc">使用中</span>
                  </div>
                  <!-- <a class="op">
                                                                                      延长租期
                                                                                    </a> -->
                </div>
              </div>
              <div class="more"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="order-completed">
        <div class="title" @click="showHistoryList" :class="{'hide-title':!hisFlag}">
          <span>历史订单({{completedlist.length}})</span>
        </div>
        <div class="list" v-show="hisFlag">
          <div v-for="item in completedlist" :key="item.id">
            <div class="order-date" v-text="item.orderTime"></div>
            <div class="order-detail">
              <div class="order-wrapper">
                <div class="order-detail-addr">
                  <p>
                    <span>收件人：</span>
                    <span v-text="item.receiverPerson"></span>
                  </p>
                  <p>
                    <span>地址：</span>
                    <span v-text="item.receiverAddress"></span>
                  </p>
                  <p>
                    <span>联系方式：</span>
                    <span v-text="item.phone"></span>
                  </p>
                </div>
                <div class="order-detail-o">
                  <p>
                    <span>钢琴：</span>
                    <span v-text="item.pianoName"></span>
                  </p>
                  <p>
                    <span>租期：</span>
                    <span v-text="item.leaseNum"></span>
                  </p>
                  <p class="price">
                    <span>总费用:</span>
                    <span>线上支付
                      <b>¥{{item.downPayment|ToThousands}}</b>+货到付款
                      <b>¥{{item.stillPay||ToThousands}}</b>
                    </span>
                    <span class="desc">(剩余押金)</span>
                  </p>
                </div>
                <div class="order-detail-op">
                  <div class="status">
                    <span>状态：</span>
                    <span class="desc">已结束</span>
                  </div>
                  <a class="op">
                    继续租赁
                  </a>
                </div>
              </div>
              <div class="more"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import http from '@/libs/httpUtil'
import MyHeader from '../header'
export default {
  name: 'order-list',
  components: {
    MyHeader
  },
  data() {
    return {
      list: {},
      noPayFlag: true,
      deliveryFlag: false,
      usedFlag: false,
      hisFlag: false
    }
  },
  computed: {
    noPaylist() {
      return this.list['status0']
    },
    noDeliverylist() {
      return this.list['status1']
    },
    deliverylist() {
      return this.list['status2']
    },
    deliveryCompleted() {
      return this.list['status3']
    },
    usedlist() {
      return this.list['status4']
    },
    canceledlist() {
      return this.list['status5']
    },
    completedlist() {
      return this.list['status6']
    }
  },
  created() {
    http.orderlist().then(res => {
      if (res.errNo == 0) {
        this.list = res.data
      }
    })
  },
  beforeMount() {
    document.title = '订单列表'
  },
  methods: {
    pay(item) {
      this.$router.push({ name: 'order-detail', query: { id: item.id } })
    },
    showNoPayList() {
      this.noPayFlag = !this.noPayFlag
    },
    showDeliveryList() {
      this.deliveryFlag = !this.deliveryFlag
    },
    showUsedList() {
      this.usedFlag = !this.usedFlag
    },
    showHistoryList() {
      this.hisFlag = !this.hisFlag
    }
  }
}
</script>
<style lang="scss">
.order-list {
  .title {
    height: .88rem;
    line-height: .88rem;
    font-size: .3rem;
    color: #fff;
    padding-left: .3rem;

    span {
      position: relative;
      display: inline-block;
      padding-right: .3rem;
      &:after {
        transition: transform .3s,
        -webkit-transform .3s;
      }
      @include arrow-down(6px, white);
    }
  }
  .hide-title {
    span {
      @include arrow-right(6px, white);
    }
  }
  .list {
    box-sizing: border-box;
    background-color: #eee;
    .order-date {
      padding: .3rem .3rem .15rem;
      color: #928f9c;
      font-size: .28rem;
      background-color: #fff;
    }
    .order-detail {
      background-color: #fff;
      .order-wrapper {
        margin: 0 .3rem .3rem;
        border: 1px dashed #7F7C8B;
        padding: .15rem .3rem 0;
        color: #323136;
        font-size: .28rem;
        .order-detail-addr {
          padding-bottom: .3rem;
          position: relative;
          @include bottomline();
        }
        .order-detail-o {
          padding: .3rem 0 .6rem;
          .price {
            b {
              color: #bf3737;
            }
          }
          .desc {
            font-size: .24rem;
            color: #928f9c;
          }
        }
        .order-detail-op {
          display: flex;
          line-height: .88rem;
          .status {
            flex: 1;
            .desc {
              color: #bf3737
            }
          }
          .op {
            margin-right: -.3rem;
            display: block;
            height: .88rem;
            width: 2rem;
            background-color: #bf3737;
            font-size: .3rem;
            color: #fff;
            text-align: center;
          }
        }
      }
    }
  }
  .order-no-pay {
    .title {
      background-color: #bf3737;
    }
  }
  .order-distribution {
    .title {
      background-color: #507ea1;
    }
    .list {
      .status {
        .desc {
          color: #507ea1 !important;
        }
      }
      .op {
        background-color: #507ea1 !important;
      }
    }
  }
  .order-used {
    .title {
      background-color: #928f9c !important;
    }
    .list {
      .status {
        .desc {
          color: #928f9c !important;
        }
      }
      .op {
        background-color: #928f9c !important;
      }
    }
  }
  .order-completed {
    .title {
      background-color: #999;
    }
    .list {
      .status {
        .desc {
          color: #999 !important;
        }
      }
      .op {
        background-color: #999 !important;
      }
    }
  }
}

.more {
  height: .3rem;
}
</style>


