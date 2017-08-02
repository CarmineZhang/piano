var tpl = `<div class="<%= className %>">
    <div class="mask-transparent"></div>
    <div class="toast">
        <i class="icon-toast weui-icon-success-no-circle"></i>
        <p class="toast-content"><%=content%></p>
    </div>
</div>`
import $ from '../util'

let _sington;

/**
 * toast 一般用于操作成功时的提示场景
 * @param {string} content toast的文字
 * @param {Object|function=} options 配置项或回调
 * @param {number=} [options.duration=3000] 多少毫秒后关闭toast
 * @param {function=} options.callback 关闭后的回调
 * @param {string=} options.className 自定义类名
 *
 * @example
 * weui.toast('操作成功', 3000);
 * weui.toast('操作成功', {
 *     duration: 3000,
 *     className: 'custom-classname',
 *     callback: function(){ console.log('close') }
 * });
 */
function toast(content = '', options = {}) {
  if (_sington) return _sington;

  if (typeof options === 'number') {
    options = {
      duration: options
    };
  }
  if (typeof options === 'function') {
    options = {
      callback: options
    };
  }

  options = $.extend({
    content: content,
    duration: 2000,
    callback: $.noop,
    className: ''
  }, options);

  const $toastWrap = $($.render(tpl, options));
  const $toast = $toastWrap.find('.toast');
  const $mask = $toastWrap.find('.mask');

  $('body').append($toastWrap);
  $toast.addClass('animate-fade-in');
  $mask.addClass('animate-fade-in');

  setTimeout(() => {
    $mask.addClass('animate-fade-out');
    $toast
      .addClass('animate-fade-out')
      .on('animationend webkitAnimationEnd', function () {
        $toastWrap.remove();
        _sington = false;
        options.callback();
      });
  }, options.duration);

  _sington = $toastWrap[0];
  return $toastWrap[0];
}
export default toast;
