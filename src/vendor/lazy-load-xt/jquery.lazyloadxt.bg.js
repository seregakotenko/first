(function ($) {
  var options = $.lazyLoadXT,
    bgAttr = options.bgAttr || 'data-bg';

  options.selector += ',[' + bgAttr + ']';

  $(document).on('lazyshow', function (e) {
    var $this = $(e.target),
      url = $this.attr(bgAttr);
    if (!!url) {
      $this
        .css('background-image', "url('" + url + "')")
        .removeAttr(bgAttr)
        .triggerHandler('load');
    }
  });

})(window.jQuery || window.Zepto || window.$);