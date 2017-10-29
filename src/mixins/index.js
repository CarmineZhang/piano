import storage from '@/libs/storage'
var focus = {
  inserted: function(el, binding) {
    if (binding.value) el.focus()
    else el.blur()
  },

  componentUpdated: function(el, binding) {
    if (binding.modifiers.lazy) {
      if (Boolean(binding.value) === Boolean(binding.oldValue)) {
        return
      }
    }

    if (binding.value) el.focus()
    else el.blur()
  }
}

export default {
  beforeMount() {
    let id = this.$store.state.route.query.cid
    if (!storage.get('cid') && id) {
      storage.set('cid', id)
    }
  },
  directives: {
    focus: focus
  }
}
