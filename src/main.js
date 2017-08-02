// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import {
//   sync
// } from 'vuex-router-sync'
import App from './App'
// import store from './store'
import router from './router'
import Validator from '@/plugins/validator'
import mixins from '@/mixins'
import './sass/main.scss'
Vue.config.productionTip = false

Vue.use(Validator)
Vue.mixin(mixins)

// sync(store, router)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  render: h => h(App)
})
