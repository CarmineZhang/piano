/**
 * 简单的localstorage方法
 */
function localStorage() {
  return window.localStorage
}

function read(key) {
  return localStorage().getItem(key)
}

function write(key, data) {
  return localStorage().setItem(key, data)
}

function remove(key) {
  return localStorage().removeItem(key)
}

function clearAll() {
  return localStorage().clear()
}

function serialize(obj) {
  return JSON.stringify(obj)
}

function deserialize(strVal, defaultVal) {
  if (!strVal) {
    return defaultVal
  }
  var val = ''
  try {
    val = JSON.parse(strVal)
  } catch (e) {
    val = strVal
  }
  return (val !== undefined ? val : defaultVal)
}


const store = {
  set(key, value) {
    if (value === undefined) {
      return this.remove(key)
    }
    write(key, serialize(value))
    return value
  },
  get(key, defaultVal) {
    var data = read(key)
    return deserialize(data, defaultVal)
  },
  clear(key) {
    remove(key)
  },
  clearAll() {
    clearAll()
  }
}

export default store
