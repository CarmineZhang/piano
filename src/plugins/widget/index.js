import alert from './alert/'
import confirm from './confirm'
import toast from './toast/'
import loading from './loading'
import {
  picker,
  datePicker
} from './picker'

const plugin = {
  install(Vue) {
    Vue.$ve = {
      alert,
      confirm,
      toast,
      loading,
      picker,
      datePicker
    }
    Vue.mixin({
      created: function () {
        this.$ve = Vue.$ve
      }
    })
  }
}

export default plugin
