import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import ProductList from '@/components/productlist'
import ProductDetail from '@/components/productdetail'
import Address from '@/components/address'
import OrderDetail from '@/components/orderdetail'
import OrderComplete from '@/components/ordercomplete'
import OrderList from '@/components/orderlist'
import Login from '@/components/login'
import UserCenter from '@/components/usercenter'
import Coupon from '@/components/coupon'
import News from '@/components/news'
import Account from '@/components/account'
import AddAddress from '@/components/address/add'
import ChangePhone from '@/components/account/changephone'
import ChangePhoneCompleted from '@/components/account/changephone/completed'
import EditPwd from '@/components/account/editpwd'
import EditPwdCompleted from '@/components/account/editpwd/completed'
import Favorite from '@/components/favorite'
import Test from '@/components/Test'
import Widget from '@/plugins/widget'
import Register from '@/components/register'
import RegisterNext from '@/components/register/setpwd'
import RegisterSuccess from '@/components/register/success'
import Article from '@/components/home/article'
import FindPwd from '@/components/findpwd'
import FindPwdNext from '@/components/findpwd/setpwd'
import ChooseAddr from '@/components/address/chooseaddr'
import NotFoundComponent from '@/components/notfound'
import AliPayResult from '@/components/orderdetail/alipay'
import WxPay from '@/components/orderdetail/wxpay'
import WxPayResult from '@/components/orderdetail/wxpay/result'
import Message from '@/components/message'
import MessageDetail from '@/components/message/detail'
import WxLogon from '@/components/login/wxlogon'
import SmsLogin from '@/components/login/smslogon'
import Feature from '@/components/feature'
import AboutUs from '@/components/aboutus'
import ContactUs from '@/components/contactus'
import Activity from '@/components/activity'
import PianoInfo from '@/components/pianoinfo'
import Settle from '@/components/orderdetail/settle'
import Services from '@/components/services'
Vue.use(Router)
Vue.use(Widget)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      component: NotFoundComponent
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      alias: '/index.html'
    },
    {
      path: '/productlist',
      name: 'product-list',
      component: ProductList
    },
    {
      path: '/productdetail',
      component: ProductDetail
    },
    {
      path: '/orderlist',
      component: OrderList
    },
    {
      path: '/ordercomplete',
      component: OrderComplete
    },
    {
      path: '/feature',
      name: 'feature',
      component: Feature
    },
    {
      path: '/news',
      component: News
    },
    {
      path: '/coupon',
      component: Coupon
    },
    {
      path: '/account',
      component: Account
    },
    {
      path: '/usercenter',
      component: UserCenter
    },
    {
      path: '/orderdetail',
      name: 'order-detail',
      component: OrderDetail
    },
    {
      path: '/chooseaddr',
      component: ChooseAddr
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/wxlogon',
      component: WxLogon
    },
    {
      path: '/smslogon',
      component: SmsLogin
    },
    {
      path: '/addaddress',
      component: AddAddress
    },
    {
      path: '/changephone',
      component: ChangePhone
    },
    {
      path: '/changephone/completed',
      name: 'change-phone-completed',
      component: ChangePhoneCompleted
    },
    {
      path: '/editpwd',
      component: EditPwd
    },
    {
      path: '/editpwd/completed',
      name: 'editpwd-completed',
      component: EditPwdCompleted
    },
    {
      path: '/address',
      component: Address
    },
    {
      path: '/favorite',
      component: Favorite
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/registernext',
      name: 'registernext',
      component: RegisterNext
    },
    {
      path: '/registersuccess',
      component: RegisterSuccess
    },
    {
      path: '/findpwd',
      component: FindPwd
    },
    {
      path: '/findpwdnext',
      name: 'findpwdnext',
      component: FindPwdNext
    },
    {
      path: '/article',
      component: Article
    },
    {
      path: '/test',
      component: Test
    },
    {
      path: '/ailpay/result',
      component: AliPayResult
    },
    {
      path: '/wxpay/result',
      component: WxPayResult
    },
    {
      path: '/wxpay',
      component: WxPay
    },
    {
      path: '/message',
      component: Message
    },
    {
      path: '/message/detail',
      name: 'message-detail',
      component: MessageDetail
    },
    {
      path: '/aboutus',
      component: AboutUs
    },
    {
      path: '/contactus',
      component: ContactUs
    },
    {
      path: '/activity',
      component: Activity
    },
    {
      path: '/pianoinfo',
      component: PianoInfo
    },
    {
      path: '/settle',
      name: 'order-settle',
      component: Settle
    },
    {
      path: '/services',
      component: Services
    }
  ]
})
