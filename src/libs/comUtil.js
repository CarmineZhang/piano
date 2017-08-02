import objectAssign from 'object-assign'

const _toString = Object.prototype.toString

export function is(type, val) {
  return _toString.call(val) === `[object ${type}]`
}


/**
 * Parse simple path.
 */
const bailRE = /[^\w.$]/
export function parsePath(path) {
  if (bailRE.test(path)) {
    return
  } else {
    const segments = path.split('.')
    return function (obj) {
      for (let i = 0; i < segments.length; i++) {
        if (!obj) return
        obj = obj[segments[i]]
      }
      return obj
    }
  }
}

export const assign = objectAssign
