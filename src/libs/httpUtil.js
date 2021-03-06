import axios from 'axios'
import { signature } from './comUtil'
import qs from 'qs'
import router from '../router'
import store from '../store'
import storage from './storage'
axios.interceptors.response.use(
  response => {
    // console.dir(response)
    let status = response.status
    if (status === 200) {
      let resData = response.data
      if (typeof resData === 'string') {
        try {
          return JSON.parse(resData)
        } catch (e) {
          console.log(e)
        }
      } else if (resData != null) {
        return resData
      }
    }
    return {
      errNo: '-99999',
      errMsg: '服务器异常'
    }
  },
  error => {
    if (error.response) {
      console.log(error.response)
    }
    return Promise.reject(error.response.data) // 返回接口返回的错误信息
  }
)

axios.interceptors.response.use(res => {
  if (res.errNo && res.errNo == 50000) {
    store.commit('updateBackUrl', {
      backUrl: router.currentRoute.fullPath
    })
    storage.set('updateBackUrl', router.currentRoute.fullPath)
    router.replace('/login')
    return res
  } else {
    return res
  }
})

function ajax(url, data) {
  if (storage.get('cid')) {
    data.cid = storage.get('cid')
  }
  var signData = qs.stringify(signature(data))
  return axios.post('/platform-longing-web/' + url, signData)
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

function uptatePassword(phone, pwd) {
  return ajax('account/uptatePassword', {
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
    pageSize: size,
    ftuType: '2'
  })
}

function getArticle(id) {
  return ajax('infomation/getInfomationDetails', {
    id: id
  })
}

function getPiano(
  no = 1,
  size = 10,
  brand = '',
  rentTyp = '',
  priceDic = '',
  pianoName = '',
  purpose = ''
) {
  return ajax('mall/pianos', {
    pageNo: no,
    pageSize: size,
    brand: brand,
    rentTyp: rentTyp,
    priceDic: priceDic,
    ftuType: '2',
    pianoName: pianoName,
    purpose: purpose
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
    brand: '',
    ftuType: '2'
  })
}

function getPianoInfo(id) {
  return ajax('mall/pianoInfo', {
    pianoId: id
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

function saveCollection(pianoId) {
  return ajax('collect/saveCollection', {
    pianoId: pianoId,
    memberToken: storage.get('access-token')
  })
}

function getCollections(no, size = 10) {
  return ajax('collect/getCollections', {
    pageNo: no,
    pageSize: size,
    memberToken: storage.get('access-token')
  })
}

function deleteCollection(id) {
  return ajax('collect/deleteCollection', {
    id: id
  })
}

function checkCollection(id) {
  return ajax('collect/checkCollection', {
    memberToken: storage.get('access-token'),
    pianoId: id
  })
}

function order(piano, receiverId, couponId) {
  let req = {
    memberToken: storage.get('access-token'),
    pianoId: piano.id,
    leaseNum: piano.leaseNum,
    leaseType: piano.leaseType,
    receiverId: receiverId,
    channelType: 'web'
  }
  if (couponId !== -1) {
    req.couponId = couponId
  }
  return ajax('order/create', req)
}

function oderInfo(id) {
  return ajax('order/info', {
    memberToken: storage.get('access-token'),
    orderId: id
  })
}

function orderlist() {
  return ajax('order/orders', {
    memberToken: storage.get('access-token')
  })
}

function wxPay(no, total, body, id, couponId) {
  let ob = {
    memberToken: storage.get('access-token'),
    body: body,
    totalFee: total,
    outTradeNo: no,
    returnUrl:
      'http://m.pianoshare.cn/settle?id=' +
      id +
      '&tradeno=' +
      no +
      '&paytype=wx',
    type: '1'
  }
  if (couponId !== -1) {
    ob.couponId = couponId
  }
  return ajax('wechatpay/unifiedOrder', ob)
}

function aliPay(no, total, subject, body, id, couponId) {
  let ob = {
    memberToken: storage.get('access-token'),
    totalAmount: total,
    outTradeNo: no,
    subject: subject,
    body: body,
    returnUrl:
      'http://m.pianoshare.cn/settle?id=' +
      id +
      '&tradeno=' +
      no +
      '&paytype=ali',
    payType: '1'
  }
  if (couponId !== -1) {
    ob.couponId = couponId
  }
  return ajax('alipay/pay', ob)
}

function getAliPayResult(no) {
  return ajax('alipay/alipayTradeResult', {
    memberToken: storage.get('access-token'),
    outTradeNo: no
  })
}

function wxGzhPay(body, total, no, code, couponId) {
  let ob = {
    memberToken: storage.get('access-token'),
    body: body,
    totalFee: total,
    outTradeNo: no,
    code: code
  }
  if (couponId !== -1) {
    ob.couponId = couponId
  }
  return ajax('wechatpay/jsPay', ob)
}

function getWxPayResult(no) {
  return ajax('wechatpay/wechatPayResult', {
    outTradeNo: no
  })
}

function changeMemberPhone(phone) {
  return ajax('account/changeMemberPhone', {
    memberToken: storage.get('access-token'),
    phone: phone
  })
}

function getMessageList(no, size, type) {
  return ajax('msg/getMessages', {
    memberToken: storage.get('access-token'),
    pageNo: no,
    pageSize: size,
    type: type
  })
}

function getMessageDetial(id) {
  return ajax('msg/getMessageDetail', {
    memberToken: storage.get('access-token'),
    messageId: id
  })
}

function delMessage(id) {
  return ajax('msg/deleteMessage', {
    memberToken: storage.get('access-token'),
    messageId: id
  })
}

function updateMessage(id) {
  return ajax('msg/updaeMessage', {
    memberToken: storage.get('access-token'),
    messageId: id
  })
}

function getUnReadMessage() {
  return ajax('msg/unreadMsg', {
    memberToken: storage.get('access-token')
  })
}

function orderOperator(orderId, event) {
  return ajax('order/orderOperate', {
    memberToken: storage.get('access-token'),
    orderId: orderId,
    event: event
  })
}

function wxLogin(code) {
  return ajax('login/wechat', {
    code: code
  })
}

function sendSms(phone) {
  return ajax('login/code', {
    phone: phone
  })
}

function smsLogon(phone, code) {
  return ajax('login/phone', {
    phone: phone,
    code: code
  })
}

function getCoupons() {
  return ajax('membercoupon/getCouponMemberInfosForHome', {})
}

function getPayCoupons() {
  return ajax('membercoupon/getPayCoupons', {
    memberToken: storage.get('access-token')
  })
}

function receiveCoupon(id) {
  return ajax('membercoupon/receviceCoupon', {
    memberToken: storage.get('access-token'),
    couponId: id
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
  getProvince,
  getCity,
  getCounty,
  saveCollection,
  getCollections,
  deleteCollection,
  order,
  oderInfo,
  orderlist,
  wxPay,
  changeMemberPhone,
  uptatePassword,
  checkCollection,
  aliPay,
  getAliPayResult,
  getMessageList,
  getMessageDetial,
  delMessage,
  updateMessage,
  getUnReadMessage,
  orderOperator,
  getWxPayResult,
  wxGzhPay,
  wxLogin,
  smsLogon,
  sendSms,
  getCoupons,
  receiveCoupon,
  getPayCoupons
}
