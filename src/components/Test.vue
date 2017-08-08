<template>
  <div class="main">
    <!-- <div style="padding:10px;">
                                                                                                  <swiper :list="swiperlist"></swiper>
                                                                                                  <search-bar @on-change="searchBar"></search-bar>
                                                                                                  <button class="ve-button ve-button-default" @click="showAlert">测试alert</button>
                                                                                                  <button class="ve-button ve-button-default" @click="showConfirm">测试confirm</button>
                                                                                                  <button class="ve-button ve-button-default" @click="showToast">测试toast</button>
                                                                                                  <button class="ve-button ve-button-default" @click="showPicker">测试picker</button>
                                                                                                  <input type="text" v-model="phone">
                                                                                                  <input type="text" v-model.lazy="username">
                                                                                                  <div class="cell">
                                                                                                    <div class="cell-hd">
                                                                                                      <label class="weui-label">qq</label>
                                                                                                    </div>
                                                                                                    <div class="cell-bd">
                                                                                                      <input class="weui-input" type="number" :readonly="re" placeholder="请输入qq号">
                                                                                                    </div>
                                                                                                  </div>
                                                                                                  <ul>
                                                                                                    <li v-for="(value,key) in errors" :key="key" v-text="value"></li>
                                                                                                  </ul>
                                                                                                  <cell-box>
                                                                                                    <cell title="接收通知" content="已开启"></cell>
                                                                                                    <cell title="标题一" :link="true"></cell>
                                                                                                  </cell-box>
                                                                                              
                                                                                                  <ve-input title="用户名" v-model="username"></ve-input>
                                                                                                  <ve-input title="密码" type="password"></ve-input>
                                                                                                  <ve-input title="手机验证码" type="number"></ve-input>
                                                                                                  <ve-input title="readonly" :readonly='true' v-model="username"></ve-input>
                                                                                                </div> -->
    <!-- <ve-footer></ve-footer> -->
    <cell to="/account">
      账户管理
    </cell>
    <cell to="/usercenter">
      个人中心
    </cell>
    <cell to="/costdetail">
      费用详情
    </cell>
    <cell to="/login">
      登录
    </cell>
    <cell to="/addaddress">
      新添地址
    </cell>
    <cell to="/selectaddress">
      地址选择
    </cell>
  </div>
</template>

<script>
import SearchBar from './base/searchbar'
import Swiper from './base/swiper'
import { Cell, CellBox } from './base/cell'
import VeInput from './base/input'
export default {
  name: 'home',
  components: {
    SearchBar,
    Swiper,
    Cell,
    CellBox,
    VeInput
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      show: false,
      depth: 2,
      confirmShow: false,
      toastshow: false,
      actionShow: false,
      pickerShow: false,
      datepickerShow: false,
      addressShow: false,
      phone: '',
      username: '',
      re: false,
      pickerData: [
        {
          label: '飞机票',
          value: 0,
          children: [
            {
              label: '经济舱',
              value: 1
            },
            {
              label: '商务舱',
              value: 2
            }
          ]
        },
        {
          label: '火车票',
          value: 1,
          children: [
            {
              label: '卧铺',
              value: 1,
              disabled: true // 不可用
            },
            {
              label: '坐票',
              value: 2
            },
            {
              label: '站票',
              value: 3
            }
          ]
        },
        {
          label: '汽车票',
          value: 3,
          children: [
            {
              label: '快班',
              value: 1
            },
            {
              label: '普通',
              value: 2
            }
          ]
        }
      ],
      menus: {
        photo: '拍照',
        select: '从相册选择'
      },
      swiperlist: [{
        href: '',
        img: 'https://m.360buyimg.com/mobilecms/s720x322_jfs/t5695/103/7555664231/112188/7f5a47e7/5971decfN3c8d772f.jpg!q70.jpg'
      }, {
        href: '',
        img: 'https://img1.360buyimg.com/da/jfs/t6121/221/6082109939/93242/8d73b35f/597072a5Nfb136ad8.jpg'
      }, {
        href: '',
        img: 'https://img1.360buyimg.com/da/jfs/t5644/127/7616359806/97652/a99edb5f/59720fc4Nb1723554.jpg'
      }]
    }
  },
  validator: {
    phone: 'mobile',
    username: ['required', { test: /^[a-zA-Z0-9]{6,12}$/, message: '用户名必须是6-12的数字和字母组合' }]
  },
  computed: {
    dateNow() {
      var d = new Date()
      return [d.getFullYear(), d.getMonth() + 1, d.getDate()]
    },
    errors() {
      return this.$validator.$errors
    }
  },
  methods: {
    showToast() {
      this.$ve.toast('操作成功')
    },
    showAlert() {
      this.$ve.alert('测试alert')
    },
    showConfirm() {
      this.$ve.confirm('普通的confirm');
    },
    showPicker() {
      this.$ve.picker([
        {
          label: '飞机票',
          value: 0,
          disabled: true // 不可用
        },
        {
          label: '火车票',
          value: 1
        },
        {
          label: '汽车票',
          value: 3
        },
        {
          label: '公车票',
          value: 4,
        }
      ], {
          className: 'custom-classname',
          container: 'body',
          defaultValue: [3],
          onChange: function (result) {
            console.log(result)
          },
          onConfirm: function (result) {
            console.log(result)
          },
          id: 'singleLinePicker'
        });
    },
    confirm() {
      console.log('ok')
    },
    hidetoast() {
      console.log('上传成功')
    },
    loading() {
      var loading = this.$ve.loading('数据加载中', () => {
        this.confirm()
      })

      setTimeout(function () {
        loading.hide()
      }, 2000)
    },
    actionSheet() {
      this.actionShow = true
    },
    clickMenu(key) {
      console.log(key)
    },
    picker() {
      this.pickerShow = true
    },
    searchBar(val) {
      console.log(val)
    },
    toptip() {
      this.$ve.toptip('测试toptip')
    },
    datepicker() {
      this.datepickerShow = true
    },
    datePickerChange(val) {
      console.log(val)
    },
    address() {
      this.addressShow = true
    },
    addressChange(result) {
      console.log(result)
    }
  }
}
</script>
