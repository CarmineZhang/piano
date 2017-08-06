import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/home'
// import ProductList from '@/components/productlist'
// import ProductDetail from '@/components/productdetail'
// import SelectAddress from '@/components/address'
// import CostDetail from '@/components/costdetail'
import OrderComplete from '@/components/ordercomplete'
import Test from '@/components/Test'
import Widget from '@/plugins/widget'
Vue.use(Router)
Vue.use(Widget)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: OrderComplete,
  }, {
    path: '/test',
    component: Test
  }]
})
