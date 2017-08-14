import axios from 'axios'
import {
  signature
} from './comUtil'
import qs from 'qs'
axios.interceptors.response.use(
  response => {
    console.dir(response)
    let status = response.status
    if (status === 200) {
      let resData = response.data
      if (typeof resData === 'string') {
        try {
          return JSON.parse(resData);
        } catch (e) {
          console.log(e)
        }
      } else if (resData != null) {
        return resData
      }
    }
    return {
      "errNo": "-99999",
      "errMsg": "服务器异常"
    }
  },
  error => {
    if (error.response) {
      console.log(error.response)
    }
    return Promise.reject(error.response.data) // 返回接口返回的错误信息
  }
);

function sendCode(phone) {
  var data = {
    phone: phone
  }
  var signStr = qs.stringify(signature(data))
  return axios.post('account/sendCode', signStr)
}


export {
  sendCode
}