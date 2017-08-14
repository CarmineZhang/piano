import objectAssign from 'object-assign'
import $ from '@/libs/domUtil'
/**
 * 暂时只支持横向滑动
 */
class Swiper {
  constructor(options) {
    this._default = {
      container: '.ve-slider',
      sliderlist: '.ve-slider-list',
      sliderItem: '.ve-slider-item',
      navbar: '.nav-bar',
      interval: 3000,
      duration: 300,
      loop: true
    }
    this._options = objectAssign(this._default, options)
    this.$container = $(this._options.container)
    this.$sliderlist = this.$container.find(this._options.sliderlist)
    this.$sliderItem = this.$sliderlist.find(this._options.sliderItem)
    this.$navbar = this.$container.find(this._options.navbar)
    this.$navbarItem = this.$navbar.find('b')
    this.current = 1
    this.navcurrent = 0
    this.count = this._options.count
    this.realCount = this.count + 2
    this.start = {}
    this.end = {}
    this.move = {}
    this._init()
    this._bind()
    this._auto()
  }
  _init() {
    this.width = parseInt($.getStyle(document.querySelector(this._options.container), 'width'))
    this._setPosition()
    this._setTransition()
  }
  _bind() {
    var me = this
    me.touchstartHandler = (e) => {
      e.preventDefault()
      me.stop()
      me.start.x = e.changedTouches[0].pageX
      me.start.y = e.changedTouches[0].pageY
    }
    // me.touchMoveHandler = (e) => {
    //   me.move.x = e.changedTouches[0].pageX
    //   me.move.y = e.changedTouches[0].pageY
    //   let distanceX = me.move.x - me.start.x
    //   let distanceY = me.move.y - me.start.y
    //   let noScrollerY = Math.abs(distanceX) > Math.abs(distanceY)
    //   if (noScrollerY) {
    //     me.next()
    //   }
    //   noScrollerY && e.preventDefault()
    // }

    me.touchEndHandler = (e) => {
      e.preventDefault()
      me.end.x = e.changedTouches[0].pageX
      me.end.y = e.changedTouches[0].pageY

      let distance = me.end.x - me.start.x
      if (distance === 0) {
        me._auto()
      } else {
        me.next(distance < 0 ? 1 : -1)
      }
    }
    me.$sliderlist.on('touchstart', me.touchstartHandler)
    me.$sliderlist.on('touchend', me.touchEndHandler)
    me.$sliderlist.on('transitionend webkitTransitionEnd', (e) => {
      e.preventDefault()
      if (me.current === me.realCount - 1) {
        me.current = 1;
        let distance = -me.current * me.width
        me.$sliderlist.css({
          '-webkit-transform': `translate3d(${distance}px,0, 0)`,
          'transform': `translate3d(${distance}px, 0, 0)`,
          'transition': `0ms`,
          '-webkit-transition': `0ms`
        })
      } else if (me.current === 0) {
        me.current = me.current + this.count;
        let distance = -me.current * me.width
        me.$sliderlist.css({
          '-webkit-transform': `translate3d(${distance}px,0, 0)`,
          'transform': `translate3d(${distance}px, 0, 0)`,
          'transition': `0ms`,
          '-webkit-transition': `0ms`
        })
      }
    })
  }
  _setPosition() {
    for (let i = 0; i < this.realCount; i++) {
      this.$sliderItem.eq(i).css({
        left: i * 100 + '%'
      })
    }
  }
  _setTransition() {
    let distance = -this.current * this.width
    this.$sliderlist.css({
      '-webkit-transform': `translate3d(${distance}px,0, 0)`,
      'transform': `translate3d(${distance}px, 0, 0)`,
      'transition': `all ${this._options.duration}ms ease`,
      '-webkit-transition': `all ${this._options.duration}ms ease`
    })
    if (this.navcurrent === this.count) {
      this.navcurrent = 0
    }
    this.$navbarItem.removeClass('cur').eq(this.navcurrent).addClass('cur')
  }
  _auto() {
    const me = this
    me.stop()
    me.timer = setTimeout(() => {
      me.next(1)
    }, me._options.interval)
  }
  destory() {
    this.$sliderlist.offAll()
  }
  stop() {
    this.timer && clearTimeout(this.timer)
  }
  _moveIndex(num) {
    if (num !== 0) {
      this.current += this.realCount
      this.current += num
      this.current %= this.realCount

      this.navcurrent += this.count
      this.navcurrent += num
      this.navcurrent %= this.count

    }
  }
  next(num) {
    this._moveIndex(num)
    this._setTransition()
    this._auto()
  }
}

export default Swiper
