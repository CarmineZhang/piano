import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    direction: 'forward',
    addrlist: [],
    editaddr: null,
    selectPiano: null,
    province: [],
    city: {},
    county: {},
    backUrl: ''
  },
  getters: {
    defaultAddrId(state) {
      let ret = state.addrlist.filter(item => {
        return item.isDefault == 1
      })
      if (ret.length > 0) {
        return ret[0].id
      }
      return 0
    }
  },
  mutations: {
    updateBackUrl(state, payload) {
      state.backUrl = payload.backUrl
    },
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
    },
    receiveProvince(state, list) {
      state.province = [...list]
    },
    receiveCity(state, {
      pcode,
      list
    }) {
      state.city[pcode] = list
    },
    receiveCounty(state, {
      ccode,
      list
    }) {
      state.county[ccode] = list
    }
  }
})
