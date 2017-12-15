<template>
  <div>
    <div class="addr-add">
      <div class="addr-title">新增地址</div>
      <div class="addr-add-body">
        <div class="form-item">
          <input type="text" class="item-bd ipt" v-model="receiverName" placeholder="收货人姓名">
        </div>
        <div class="form-item">
          <div class="item-hd">+86</div>
          <input type="tel" class="item-bd ipt" maxlength="11" v-model="phone" placeholder="手机号码">
        </div>
        <!-- <div class="form-item">
          <input type="text" class="item-bd ipt" maxlength="6" v-model="postcode" placeholder="邮政编码">
        </div> -->
        <div class="form-item" @click="showArea">
          <input type="text" class="item-bd ipt" placeholder="收货地址" readonly :value="addrtext">
        </div>
        <div class="form-item">
          <input type="text" class="item-bd ipt" v-model="detail" placeholder="详细地址">
        </div>
        <div class="addr-default">
          <div class="item-bd">
            是否设为默认地址
          </div>
          <ve-switch :checked="isDefault==1" @on-change="setDefault"></ve-switch>
        </div>
      </div>
      <div class="addr-op">
        <a class="btn btn-primary" @click="beforeAdd">确定</a>
        <a class="btn btn-default" @click="back">取消</a>
      </div>
    </div>
    <select-area v-model="areaShow" @on-change="changeArea"></select-area>
  </div>
</template>
<script>
import VeSwitch from '../base/switch/'
import SelectArea from './selectarea'
import http from '@/libs/httpUtil'
export default {
  name: 'add-address',
  components: {
    VeSwitch,
    SelectArea
  },
  validator: {
    receiverName: [
      {
        test: 'required',
        message: '请填写收货人姓名'
      },
      {
        test: val => {
          let temp = val.replace(/[^\x00-\xff]/g, 'aaa')
          return temp.length >= 3
        },
        message: '收货人姓名太短，请输入正确的姓名'
      },
      {
        test: val => {
          let temp = val.replace(/[^\x00-\xff]/g, 'aaa')
          return temp.length <= 30
        },
        message: '收货人姓名必须少于等于10个汉字'
      },
      {
        test: val => {
          let temp = val.replace(/[^\x00-\xff]/g, 'aaa')
          return /^[\A-Za-z·]{3,30}$/.test(temp)
        },
        message: '收货人姓名只能输入中文和字母'
      }
    ],
    phone: [
      {
        test: 'required',
        message: '请填写手机号码'
      },
      'mobile'
    ],
    // postcode: {
    //   test: /\d{6}/, message: '请输入正确的邮政编码'
    // },
    addrtext: { test: 'required', message: '请选择省市区县信息' },
    detail: [
      {
        test: 'required',
        message: '请填写详细地址'
      },
      {
        test: val => {
          let temp = val.replace(/[^\x00-\xff]/g, 'aaa')
          return temp.length <= 255
        },
        message: '详细地址太长，不能超过85个汉字'
      }
    ]
  },
  computed: {
    getEditAddr() {
      return this.$store.state.editaddr
    },
    addrtext() {
      return '' + this.province + this.city + this.area
    }
  },
  beforeMount() {
    document.title = '新增地址'
  },
  created() {
    let addr = this.getEditAddr
    if (addr) {
      this.receiverName = addr.name || ''
      this.phone = addr.phone || ''
      // this.postcode = addr.postcode
      this.province = addr.provinceName || ''
      this.pcode = addr.province || ''
      this.city = addr.cityName || ''
      this.ccode = addr.city || ''
      this.area = addr.areaName || ''
      this.acode = addr.area || ''
      this.detail = addr.detail || ''
      this.isDefault = addr.isDefault || 0
      this.id = addr.id || 0
    }
  },
  data() {
    return {
      receiverName: '',
      phone: '',
      // postcode: '',
      province: '',
      pcode: '',
      city: '',
      ccode: '',
      area: '',
      acode: '',
      detail: '',
      areaShow: false,
      isDefault: 0,
      id: 0
    }
  },
  methods: {
    changeArea(ret) {
      this.province = ret[0].value
      this.pcode = ret[0].key
      this.city = ret[1].value
      this.ccode = ret[1].key
      this.area = ret[2].value
      this.acode = ret[2].key
    },
    showArea() {
      this.areaShow = true
    },
    setDefault(val) {
      this.isDefault = +val
    },
    beforeAdd() {
      if (this.$validator.valid) {
        this.add()
      } else {
        let errors = this.$validator.$errors
        this.$ve.alert(
          errors.receiverName ||
            errors.phone ||
            // errors.postcode ||
            errors.addrtext ||
            errors.detail
        )
      }
    },
    add() {
      var addr = {
        name: this.receiverName,
        phone: this.phone,
        // postcode: this.postcode,
        province: this.pcode,
        city: this.ccode,
        area: this.acode,
        detail: this.detail,
        isDefault: this.isDefault
      }
      if (this.id) {
        addr.id = this.id
      }
      let loading = this.$ve.loading('处理中')
      if (this.id === 0) {
        http.addAddress(addr).then(res => {
          loading.hide()
          if (res.errNo == 0) {
            this.$ve.toast('添加成功', {
              duration: 1000,
              callback: () => {
                this.$router.go(-1)
              }
            })
          }
        })
      } else {
        http.editAddress(addr).then(res => {
          loading.hide()
          if (res.errNo == 0) {
            this.$ve.toast('修改成功', {
              duration: 1000,
              callback: () => {
                this.$router.go(-1)
              }
            })
          }
        })
      }
    },
    back() {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss">
.addr-add {
  width: 6.9rem;
  margin: 0 auto;
  padding-bottom: 20px;
  .addr-title {
    padding: 0.3rem 0 0.3rem 0.6rem;
    font-size: 0.3rem;
    color: #323136;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      width: 0.32rem;
      height: 0.32rem;
      background: url('../../assets/addr-add.png') no-repeat;
      background-size: 100%;
      margin-top: -0.16rem;
    }
  }
  .form-item {
    .ipt {
      font-size: 0.28rem;
      color: #928f9c;
      z-index: 1;
    }
  }
  .addr-default {
    display: flex;
    padding-top: 0.1rem;
    font-size: 0.28rem;
    color: #928f9c;
    .item-bd {
      line-height: 0.6rem;
      flex: 1;
    }
  }
  .addr-op {
    margin-top: 1.2rem;
  }
}
</style>

