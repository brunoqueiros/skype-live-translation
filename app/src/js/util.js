;(function () {
  'use strict';
  
  var Util = {};
  
  Util.generateRandomNumber = function (min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
  };
  
  Util.updateScroll = function (target) {
    $(target).scrollTop($(target).height());
  };

  module.exports = Util;
})();