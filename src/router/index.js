import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/home'
// import ProductList from '@/components/productlist'
// import ProductDetail from '@/components/productdetail'
import SelectAddress from '@/components/address'
import Test from '@/components/Test'
import Widget from '@/plugins/widget'
Vue.use(Router)
Vue.use(Widget)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: SelectAddress,
  }, {
    path: '/test',
    component: Test
  }]
})
