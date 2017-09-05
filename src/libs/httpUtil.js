import axios from 'axios'
import {
  signature
} from './comUtil'
import qs from 'qs'
import storage from './storage'
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

function ajax(url, data) {
  var signData = qs.stringify(signature(data))
  return axios.post('/api/' + url, signData)
}

function sendCode(phone) {
  var data = {
    phone: phone
  }
  return ajax('account/sendCode', data)
}

function login(phone, pwd) {
  return ajax('account/login', {
    phone: phone,
    password: pwd
  })
}

function confirmCode(phone, code) {
  return ajax('account/confirmCode', {
    phone: phone,
    code: code
  })
}

function setUserPwd(phone, pwd) {
  return ajax('account/setUserPassWord', {
    phone: phone,
    password: pwd
  })
}

function logout() {
  return ajax('account/logout', {
    memberToken: storage.get('access-token')
  })
}

function getInformations(no, size) {
  return ajax('infomation/getInfomations', {
    pageNo: no,
    pageSize: size
  })
}

function getArticle(id) {
  return ajax('infomation/getInfomationDetails', {
    id: id
  })
}

function getPiano(no = 1, size = 10, brand = '', rentTyp = '', priceDic = '') {
  return ajax('mall/pianos', {
    pageNo: no,
    pageSize: size,
    brand: brand,
    rentTyp: rentTyp,
    priceDic: priceDic
  })
}

function getAddressList() {
  return ajax('address/list', {
    memberToken: storage.get('access-token')
  })
}

function addAddress(address) {
  return ajax('address/add', {
    memberToken: storage.get('access-token'),
    name: address.name,
    phone: address.phone,
    postcode: address.postcode,
    province: address.province,
    city: address.city,
    area: address.area,
    detail: address.detail,
    isDefault: address.isDefault
  })
}

function editAddress(address) {
  return ajax('address/edit', {
    memberToken: storage.get('access-token'),
    id: address.id,
    name: address.name,
    phone: address.phone,
    postcode: address.postcode,
    province: address.province,
    city: address.city,
    area: address.area,
    detail: address.detail,
    isDefault: address.isDefault
  })
}

function deleteAddress(id) {
  return ajax('address/del', {
    memberToken: storage.get('access-token'),
    addressId: id
  })
}

function setAddressDefault(id) {
  return ajax('address/chooseDefault', {
    memberToken: storage.get('access-token'),
    addressId: id
  })
}

function getCouponMemberInfos(no = 1, size = 10) {
  return ajax('membercoupon/getCouponMemberInfos', {
    pageNo: no,
    pageSize: size,
    memberToken: storage.get('access-token')
  })
}

function getRecomments() {
  return ajax('recomment/recomments', {
    brand: ''
  })
}

function getPianoInfo(id) {
  return ajax('mall/pianoInfo', {
    pianoId: id
  })
}

function order(pianoId, leaseNum, deliveryPrice, leaseType, receiverId) {
  return ajax('order/create', {
    memberToken: storage.get('access-token'),
    pianoId: pianoId,
    leaseNum: leaseNum,
    deliveryPrice: deliveryPrice,
    leaseType: leaseType,
    receiverId: receiverId,
    channelType: 'web'
  })
}

function getProvince() {
  return ajax('area/getProvinces', {})
}

function getCity(pCode) {
  return ajax('area/getCitysByPro', {
    proCode: pCode
  })
}

function getCounty(cCode) {
  return ajax('area/getCountysByCity', {
    cityCode: cCode
  })
}

export default {
  sendCode,
  login,
  confirmCode,
  setUserPwd,
  logout,
  getInformations,
  getArticle,
  getPiano,
  getAddressList,
  addAddress,
  editAddress,
  deleteAddress,
  setAddressDefault,
  getCouponMemberInfos,
  getRecomments,
  getPianoInfo,
  order,
  getProvince,
  getCity,
  getCounty
}
