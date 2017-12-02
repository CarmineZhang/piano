// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './App'
import store from './store'
import router from './router'
import Validator from '@/plugins/validator'
import mixins from '@/mixins'
import Widget from '@/plugins/widget'
import './sass/main.scss'
Vue.config.productionTip = false

Vue.use(Validator)
Vue.use(Widget)
Vue.mixin(mixins)

sync(store, router)

Vue.filter('dateformate', val => {
  if (typeof val === 'string') {
    return val.substring(0, 11)
  }
})
Vue.filter('ToThousands', val => {
  if (typeof val === 'undefined' || isNaN(val)) {
    return ''
  }
  let ret = val
  if (typeof val === 'number') {
    ret = val.toFixed(0)
  }
  return ret
})

Vue.directive('attrDetail', (el, binding) => {
  var item = binding.value
  let ret = ''
  if (item && item.provinceName) {
    ret += item.provinceName
  }
  if (item && item.cityName) {
    ret += item.cityName
  }
  if (item && item.areaName) {
    ret += item.areaName
  }
  if (item && item.detail) {
    ret += item.detail
  }
  el.innerHTML = ret
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
