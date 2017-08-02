export default {
  required: {
    test: /\S+/,
    message: '必填项',
  },
  mobile: {
    test: /^1(3|4|5|7|8)\d{9}$/,
    message: '不是有效的手机号码'
  }
}
