import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/home'
// import ProductList from '@/components/productlist'
// import ProductDetail from '@/components/productdetail'
// import SelectAddress from '@/components/address'
import CostDetail from '@/components/costdetail'
// import OrderComplete from '@/components/ordercomplete'
// import OrderList from '@/components/orderlist'
import Login from '@/components/login'
import UserCenter from '@/components/usercenter'
// import Coupon from '@/components/coupon'
// import News from '@/components/news'
import Account from '@/components/account'
import AddAddress from '@/components/address/add'
import ChangePhone from '@/components/account/changephone'
import Test from '@/components/Test'
import Widget from '@/plugins/widget'
Vue.use(Router)
Vue.use(Widget)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Test
  }, {
    path: '/account',
    component: Account
  }, {
    path: '/usercenter',
    component: UserCenter
  }, {
    path: '/costdetail',
    component: CostDetail
  }, {
    path: '/login',
    component: Login
  }, {
    path: '/addaddress',
    component: AddAddress
  }, {
    path: '/changephone',
    component: ChangePhone
  }, {
    path: '/test',
    component: Test
  }]
})
