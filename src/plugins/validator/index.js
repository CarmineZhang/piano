import {
  is,
  parsePath,
  assign
} from '@/libs/comUtil'
import rules from './rules'
let Vue
class Validator {
  constructor(vm) {
    this.vm = vm
    Vue.util.defineReactive(this, '$errors', {})
    Vue.util.defineReactive(this, 'invalid', true)
    Vue.util.defineReactive(this, 'valid', false)
  }
  check(fields) {
    const vm = this.vm
    const rules = vm.$options.validator

    fields = fields || Object.keys(rules)

    return fields.map(field =>
      check.call(vm, rules[field], field, parsePath(field)(vm))
    ).indexOf(false) === -1
  }
  clear() {
    this.$errors = {}
    return this
  }
}

function check(rule, field, value) {
  if (Array.isArray(rule)) {
    for (let i = 0, len = rule.length; i < len; i++) {
      if (!check.call(this, rule[i], field, value)) {
        return false
      }
    }
    return true
  }
  const $rules = this.$validator.$rules
  const $errors = this.$validator.$errors
  const $rule = is('String', rule) ? $rules[rule] : (is('String', rule.test) ? $rules[rule.test] : rule)
  if (!$rule || !$rule.test) {
    console.warn('[validator] rule does not exist: ' + (rule.test || rule))
    return
  }
  $rule.message = rule.message || $rule.message
  const valid = is('Function', $rule.test) ?
    $rule.test.call(this, value) :
    $rule.test.test(value)

  if (valid) {
    if ($errors[field]) {
      Vue.delete($errors, field)
    }
  } else {
    Vue.set($errors, field, $rule.message)
  }

  const hasError = Boolean(Object.keys($errors).length)

  this.$validator.valid = !hasError
  this.$validator.invalid = hasError

  return valid
}

const plugin = {
  install(_Vue) {
    Vue = _Vue
    Validator.prototype.$rules = assign({}, rules)
    Vue.mixin({
      created: function () {
        let rules = this.$options.validator
        if (!rules) return
        this.$validator = new Validator(this)
        Object.keys(rules).forEach((field) => {
          this.$watch(field, (newVal) => {
            check.call(this, rules[field], field, newVal)
          })
        })
        this.$validator.check()
      }
    })
  }
}

export default plugin
