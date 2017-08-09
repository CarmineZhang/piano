<template>
  <div class="order-list">
    <div class="order-no-pay">
      <div class="title">
        <span>待支付订单</span>
      </div>
      <div class="list">
        <div class="order-date">2017-8-6</div>
        <div class="order-detail">
          <div class="order-wrapper">
            <div class="order-detail-addr">
              <p>
                <span>收件人：</span>
                <span>张三</span>
              </p>
              <p>
                <span>地址：</span>
                <span>北京市海淀区中关村大厦</span>
              </p>
              <p>
                <span>联系方式：</span>
                <span>13682345674</span>
              </p>
            </div>
            <div class="order-detail-o">
              <p>
                <span>钢琴：</span>
                <span>日产进口雅马哈</span>
              </p>
              <p>
                <span>租期：</span>
                <span>30天</span>
              </p>
              <p class="price">
                <span>总费用:</span>
                <span>线上支付
                  <b>¥2,000</b>+货到付款
                  <b>¥16,000</b>
                </span>
                <span class="desc">(剩余押金)</span>
              </p>
            </div>
            <div class="order-detail-op">
              <div class="status">
                <span>状态：</span>
                <span class="desc">未支付</span>
              </div>
              <a class="op">
                继续支付
              </a>
            </div>
          </div>
          <div class="more"></div>
        </div>
      </div>
    </div>
    <div class="order-distribution">
      <div class="title">
        <span>配送中</span>
      </div>
      <div class="list">
        <div class="order-date">2017-8-6</div>
        <div class="order-detail">
          <div class="order-wrapper">
            <div class="order-detail-addr">
              <p>
                <span>收件人：</span>
                <span>张三</span>
              </p>
              <p>
                <span>地址：</span>
                <span>北京市海淀区中关村大厦</span>
              </p>
              <p>
                <span>联系方式：</span>
                <span>13682345674</span>
              </p>
            </div>
            <div class="order-detail-o">
              <p>
                <span>钢琴：</span>
                <span>日产进口雅马哈</span>
              </p>
              <p>
                <span>租期：</span>
                <span>30天</span>
              </p>
              <p class="price">
                <span>总费用:</span>
                <span>线上支付
                  <b>¥2,000</b>+货到付款
                  <b>¥16,000</b>
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
    <div class="order-used">
      <div class="title">
        <span>使用中</span>
      </div>
      <div class="list">
        <div class="order-date">2017-8-6</div>
        <div class="order-detail">
          <div class="order-wrapper">
            <div class="order-detail-addr">
              <p>
                <span>收件人：</span>
                <span>张三</span>
              </p>
              <p>
                <span>地址：</span>
                <span>北京市海淀区中关村大厦</span>
              </p>
              <p>
                <span>联系方式：</span>
                <span>13682345674</span>
              </p>
            </div>
            <div class="order-detail-o">
              <p>
                <span>钢琴：</span>
                <span>日产进口雅马哈</span>
              </p>
              <p>
                <span>租期：</span>
                <span>30天</span>
              </p>
              <p class="price">
                <span>总费用:</span>
                <span>线上支付
                  <b>¥2,000</b>+货到付款
                  <b>¥16,000</b>
                </span>
                <span class="desc">(剩余押金)</span>
              </p>
            </div>
            <div class="order-detail-op">
              <div class="status">
                <span>状态：</span>
                <span class="desc">使用中</span>
              </div>
              <a class="op">
                延长租期
              </a>
            </div>
          </div>
          <div class="more"></div>
        </div>
      </div>
    </div>
    <div class="order-completed">
      <div class="title">
        <span>历史订单</span>
      </div>
      <div class="list">
        <div class="order-date">2017-8-6</div>
        <div class="order-detail">
          <div class="order-wrapper">
            <div class="order-detail-addr">
              <p>
                <span>收件人：</span>
                <span>张三</span>
              </p>
              <p>
                <span>地址：</span>
                <span>北京市海淀区中关村大厦</span>
              </p>
              <p>
                <span>联系方式：</span>
                <span>13682345674</span>
              </p>
            </div>
            <div class="order-detail-o">
              <p>
                <span>钢琴：</span>
                <span>日产进口雅马哈</span>
              </p>
              <p>
                <span>租期：</span>
                <span>30天</span>
              </p>
              <p class="price">
                <span>总费用:</span>
                <span>线上支付
                  <b>¥2,000</b>+货到付款
                  <b>¥16,000</b>
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
</template>
<script>
export default {
  name: 'order-list'
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


