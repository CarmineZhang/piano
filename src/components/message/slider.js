import $ from '@/plugins/widget/util'
let arr = {}
export default {
  bind(el) {
    $(el).on('touchstart', function (e) {
      var targetObj = this,
        startX = e.targetTouches[0].pageX,
        startY = e.targetTouches[0].pageY
      arr[targetObj] = {
        x: startX,
        y: startY,
        el: $(this).find('ul'),
        left: $(this).find('ul').offset().left
      }
    })
    $(el).on('touchmove', function (e) {
      var currentObj = arr[this]
      var touches = event.targetTouches[0];
      if (currentObj) {
        var x = touches.pageX - currentObj.x
        var y = touches.pageY - currentObj.y
        if (Math.abs(x) > Math.abs(y)) {
          e.preventDefault();
        }
        var left = currentObj.left
        if (x < -70) {
          x = -70
        }
        if (left === 0 && x >= 0) {
          x = 0
        } else if (left < 0 && x > 0) {
          x = left + x
        }
        if (x > 0) {
          x = 0
        }
        currentObj.el.css({
          'transform': 'translateX(' + x + 'px)',
          'transition': 'transform 0s ease;'
        })
      }
    })
    $(el).on('touchend', function (e) {
      var endX = e.changedTouches[0].pageX;
      var currentObj = arr[this]
      if (currentObj) {
        var x = endX - currentObj.x;
        if (x === 0) {
          //点击事件也会出发touch事件
          return;
        }
        var left = currentObj.left
        if (x > 0 && left < 0) {
          //右滑
          currentObj.el.css({
            '-webkit-transform': `translate3d(0px,0, 0)`,
            'transform': `translate3d(0px, 0, 0)`,
            '-webkit-transition': `all 500ms ease`,
            'transition': `all 500ms ease`,
          })
        } else if (left === 0 && x < -50) {
          currentObj.el.css({
            '-webkit-transform': `translate3d(-70px,0, 0)`,
            'transform': `translate3d(-70px, 0, 0)`,
            '-webkit-transition': `all 500ms ease`,
            'transition': `all 500ms ease`,
          })
        } else {
          currentObj.el.css({
            '-webkit-transform': `translate3d(0px,0, 0)`,
            'transform': `translate3d(0px, 0, 0)`,
            '-webkit-transition': `all 500ms ease`,
            'transition': `all 500ms ease`,
          })
        }
      }
    })
  }
}
