;(function (window, document, undefined) {
  'use strict';
  
  window.Util = {};
  
  Util.generateRandomNumber = function (min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
  };
  
  Util.updateScroll = function (target) {
    $(target).scrollTop($(target).height());
  };
})(window, document);