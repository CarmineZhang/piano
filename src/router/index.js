import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/home'
import ProductList from '@/components/productlist'
import Test from '@/components/Test'
import Widget from '@/plugins/widget'
Vue.use(Router)
Vue.use(Widget)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: ProductList,
  }, {
    path: '/test',
    component: Test
  }]
})
