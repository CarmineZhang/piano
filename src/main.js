// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import {
//   sync
// } from 'vuex-router-sync'
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

// sync(store, router)

var pageManager = {
  _pageStack: [],
  _pageIndex: 1,
  init() {
    this._pageStack.length = 0;
  },
  find(path) {
    var found = null;
    for (var i = this._pageStack.length - 1; i >= 0; i--) {
      var stack = this._pageStack[i];
      if (stack.path === path) {
        found = stack;
        break;
      }
    }
    return found;
  },
  pageIndex() {
    return this._pageIndex
  },
  push(ob) {
    this._pageStack.push(ob)
    this._pageIndex++;
  },
  pop() {
    this._pageIndex--;
    var stack = this._pageStack.pop();
    if (!stack) {
      return;
    }
  }
}
pageManager.init()

router.beforeEach((to, from, next) => {
  console.log(to.path)
  var page = pageManager.find(to.path)
  if (!page) {
    store.commit('updateDirection', {
      direction: 'forward'
    })
    pageManager.push({
      'path': to.path,
      'pageIndex': pageManager.pageIndex()
    })
  } else if (page.pageIndex < pageManager.pageIndex()) {
    store.commit('updateDirection', {
      direction: 'reverse'
    })
    pageManager.pop()
  } else {
    store.commit('updateDirection', {
      direction: 'forward'
    })
    pageManager.push({
      'path': to.path,
      'pageIndex': pageManager.pageIndex()
    })
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
