import objectAssign from 'object-assign'
import {
  hex_md5
} from './md5'
const _toString = Object.prototype.toString

export function is(type, val) {
  return _toString.call(val) === `[object ${type}]`
}


export function signature(obj) {
  var arr = new Array();
  for (let key in obj) {
    arr.push(key);
  }
  arr.sort();
  var str = "";
  for (var i = 0; i < arr.length; i++) {
    let key = arr[i];
    str += key + "=" + obj[key] + "&";
  }
  var key = getPassword();
  str += "key=" + key;
  var sign = hex_md5(str);
  obj.sign = sign;
  return obj;
}

function getPassword() {
  return "c1aa88d36d59d7ee14102c7fb632c3a5";
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
