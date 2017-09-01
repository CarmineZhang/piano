import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    direction: 'forward',
    addrlist: [],
    editaddr: {},
    selectPiano: {}
  },
  getters: {
    defaultAddr(state) {
      let ret = state.addrlist.filter(item => {
        return item.isDefault === 1
      })
      if (ret.length > 0) {
        return ret[0]
      }
      return null
    }
  },
  mutations: {
    updateDirection(state, payload) {
      state.direction = payload.direction
    },
    selectPiano(state, payload) {
      state.selectPiano = payload
    },
    recevieAddrList(state, list) {
      state.addrlist = list
    },
    recevieEditAddr(state, addr) {
      state.editaddr = addr
    }
  }
})
