var tpl = `<div class="<%= className %>">
    <div class="mask-transparent"></div>
    <div class="toast">
        <i class="icon-toast weui-loading"></i>
        <p class="toast-content"><%=content%></p>
    </div>
</div>`
import $ from '../util'

let _sington;

/**
 * loading
 * @param {string} content loading的文字
 * @param {object=} options 配置项
 * @param {string=} options.className 自定义类名
 *
 * @example
 * var loading = weui.loading('loading', {
 *     className: 'custom-classname'
 * });
 * setTimeout(function () {
 *     loading.hide(function() {
 *          console.log('`loading` has been hidden');
 *      });
 * }, 3000);
 */
function loading(content = '', options = {}) {
  if (_sington) return _sington;

  options = $.extend({
    content: content,
    className: ''
  }, options);

  const $loadingWrap = $($.render(tpl, options));
  const $loading = $loadingWrap.find('.toast');
  const $mask = $loadingWrap.find('.mask');

  var _hide = function (callback) {
    _hide = $.noop; // 防止二次调用导致报错

    $mask.addClass('animate-fade-out');
    $loading
      .addClass('animate-fade-out')
      .on('animationend webkitAnimationEnd', function () {
        $loadingWrap.remove();
        _sington = false;
        callback && callback();
      });
  }

  function hide(callback) {
    _hide(callback);
  }

  $('body').append($loadingWrap);
  $loading.addClass('animate-fade-in');
  $mask.addClass('animate-fade-in');

  _sington = $loadingWrap[0];
  _sington.hide = hide;
  return _sington;
}
export default loading;
