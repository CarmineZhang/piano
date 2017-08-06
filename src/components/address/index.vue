<template>
  <div>
    <div class="addr-list">
      <div class="addr-item" v-for="item in list" :key="item">
        <div class="addr-header">
          <div class="addr-user" v-text="item.name"></div>
          <div class="addr-select">使用地址</div>
        </div>
        <div class="addr-body">
          <div class="addr-body-area" v-text="item.area"></div>
          <div class="addr-body-detail" v-text="item.detail"></div>
          <div class="addr-body-tel">
            <span>电话：</span>
            <span v-text="item.tel"></span>
          </div>
        </div>
      </div>
      <div class="addr-new">
        <div class="addr-header">
          <div class="addr-user">姓名</div>
        </div>
        <div class="addr-body">
          <a href="">
            添加地址
          </a>
        </div>
      </div>
      <p class="comment">
        注：地址确认后,配送地址不得修改。
      </p>
    </div>
    <div class="addr-action">
      <div class="order-cost">
        <span class="tit">合计运费：</span>
        <span class="ct">¥2,000</span>
      </div>
      <a href="" class="addr-ok">
        确认地址
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'address',
  data() {
    return {
      list: [{
        name: '周杰',
        area: '北京',
        detail: '海淀区中关村大街188号创意大厦A座11层2002室',
        tel: '13687654325'
      }, {
        name: '周杰',
        area: '北京',
        detail: '海淀区中关村大街188号创意大厦A座11层2002室',
        tel: '13687654325'
      }]
    }
  }
}
</script>
<style lang="scss">
.addr-list {
  width: 7.5rem;
  margin-bottom: .3rem;
  .addr-item,
  .addr-new {
    box-sizing: border-box;
    width: 7rem;
    margin: .3rem auto;
    border: 1px dashed #bf3737;
    padding: .3rem .3rem;
    .addr-header {
      padding: .3rem 0;
      line-height: .3rem;
      display: flex;
      .addr-user {
        flex: 1;
        font-size: .3rem;
        color: #323136;
        padding-left: .4rem;
        position: relative;
        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: .26rem;
          height: .26rem;
          background-image: url('../../assets/icon-user.png');
          background-repeat: no-repeat;
          background-size: .26rem .26rem;
        }
      }
      .addr-select {
        flex: 1;
        text-align: right;
        font-size: .28rem;
        color: #928f9c;
        position: relative;
        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          width: .26rem;
          height: .26rem;
          background-image: url('../../assets/icon-use.png');
          background-repeat: no-repeat;
          background-size: .26rem .26rem;
        }
      }
    }
    .addr-body {
      padding-top: .3rem;
      background-color: #bf3737;
      height: 2.7rem;
      color: #fff;
      >div {
        margin: 8px 0;
      }
      .addr-body-area {
        padding-left: .6rem;
        font-size: .3rem;
        position: relative;
        &::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 10px;
          width: .28rem;
          height: .28rem;
          background: url('../../assets/icon-location.png') no-repeat;
          background-size: .28rem .28rem;
          margin-top: -(.28rem /2)
        }
      }
      .addr-body-detail {
        padding-left: .6rem;
        font-size: .28rem;
        word-wrap: break-word;
      }
      .addr-body-tel {
        padding-left: .6rem;
        font-size: .28rem;
        position: relative;
        &::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 10px;
          width: .27rem;
          height: .27rem;
          background: url('../../assets/icon-phone.png') no-repeat;
          background-size: .27rem .27rem;
          margin-top: -(.27rem /2)
        }
      }
    }
  }
  .addr-new {
    border: 1px dashed #928f9c;
    .addr-body {
      padding-top: 0;
      background-color: #928f9c;
      display: flex;
      a {
        display: block;
        flex: 1;
        width: 100%;
        font-size: .3rem;
        color: #fff;
        text-align: center;
        &::before {
          content: "";
          display: block;
          height: 50%;
          background-position: 50% 90%;
          background-repeat: no-repeat;
          background-size: .57rem .56rem;
          background-image: url('../../assets/icon-add.png')
        }
      }
    }
  }
}

.comment {
  width: 7rem;
  padding: 0 .3rem;
  color: #928f9c;
  font-size: .24rem;
}

.addr-action {
  display: flex;
  height: .88rem;
  line-height: .88rem;
  .order-cost {
    flex: 1;
    font-size: .28rem;
    background-color: #7f7c8b;
    text-align: center;
    color: #fff;
    .tit {
      font-size: .28rem;
    }
    .ct {
      font-size: .34rem;
    }
  }
  .addr-ok {
    width: 1.8rem;
    background-color: #bf3737;
    text-align: center;
    font-size: .3rem;
    color: #fff;
  }
}
</style>

