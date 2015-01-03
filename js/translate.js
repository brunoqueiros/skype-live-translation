;(function (window, document, undefined) {
  'use strict';

  window.Translate = {};

  Translate.ws = 'http://api.mymemory.translated.net/get'; 

  Translate.getTranslation = function (text, user) {
    $.get(this.ws + '?q=' + text + '&langpair=pt|fr', function (response) {
      $(document).trigger('translate-finish', [response.responseData.translatedText, user]);
    });
  };
})(window, document);