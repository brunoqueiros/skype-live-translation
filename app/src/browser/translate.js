;(function (window, document, undefined) {
  'use strict';

  var Translate = {};

  Translate.ws = 'http://api.mymemory.translated.net/get';

  Translate.getTranslation = function (text, myCountry, guestCountry, guest) {
    $.get(this.ws + '?q=' + text + '&langpair=' + guestCountry + '|' + myCountry, function (response) {
      $(document).trigger('translate-finish', [response.responseData.translatedText, guest]);
    });
  };

  module.exports = Translate;
})(window, document);