(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

;(function (window, document, undefined) {
  "use strict";

  var Languages = {};

  var languagesList = [["Afrikaans", ["af-ZA"]], ["Bahasa Indonesia", ["id-ID"]], ["Bahasa Melayu", ["ms-MY"]], ["Català", ["ca-ES"]], ["Čeština", ["cs-CZ"]], ["Deutsch", ["de-DE"]], ["English", ["en-AU", "Australia"], ["en-CA", "Canada"], ["en-IN", "India"], ["en-NZ", "New Zealand"], ["en-ZA", "South Africa"], ["en-GB", "United Kingdom"], ["en-US", "United States"]], ["Español", ["es-AR", "Argentina"], ["es-BO", "Bolivia"], ["es-CL", "Chile"], ["es-CO", "Colombia"], ["es-CR", "Costa Rica"], ["es-EC", "Ecuador"], ["es-SV", "El Salvador"], ["es-ES", "España"], ["es-US", "Estados Unidos"], ["es-GT", "Guatemala"], ["es-HN", "Honduras"], ["es-MX", "México"], ["es-NI", "Nicaragua"], ["es-PA", "Panamá"], ["es-PY", "Paraguay"], ["es-PE", "Perú"], ["es-PR", "Puerto Rico"], ["es-DO", "República Dominicana"], ["es-UY", "Uruguay"], ["es-VE", "Venezuela"]], ["Euskara", ["eu-ES"]], ["Français", ["fr-FR"]], ["Galego", ["gl-ES"]], ["Hrvatski", ["hr_HR"]], ["IsiZulu", ["zu-ZA"]], ["Íslenska", ["is-IS"]], ["Italiano", ["it-IT", "Italia"], ["it-CH", "Svizzera"]], ["Magyar", ["hu-HU"]], ["Nederlands", ["nl-NL"]], ["Norsk bokmål", ["nb-NO"]], ["Polski", ["pl-PL"]], ["Português", ["pt-BR", "Brasil"], ["pt-PT", "Portugal"]], ["Română", ["ro-RO"]], ["Slovenčina", ["sk-SK"]], ["Suomi", ["fi-FI"]], ["Svenska", ["sv-SE"]], ["Türkçe", ["tr-TR"]], ["български", ["bg-BG"]], ["Pусский", ["ru-RU"]], ["Српски", ["sr-RS"]], ["한국어", ["ko-KR"]], ["中文", ["cmn-Hans-CN", "普通话 (中国大陆)"], ["cmn-Hans-HK", "普通话 (香港)"], ["cmn-Hant-TW", "中文 (台灣)"], ["yue-Hant-HK", "粵語 (香港)"]], ["日本語", ["ja-JP"]], ["Lingua latīna", ["la"]]];

  Languages.getLanguages = function () {
    return languagesList;
  };

  Languages.setLanguagesHTML = function () {
    var langs = this.getLanguages(), langItem, elLanguages = document.querySelector("#language"), i;

    for (i = 0; i < this.getLanguages().length; i++) {
      langItem = langs[i];

      if (languagesList[i].length === 2) {
        elLanguages.options.add(new Option(langItem[0], langItem[1]));
      } else {
        var elOptionGroup = document.createElement("optgroup");
        elOptionGroup.setAttribute("label", langItem[0]);
        elLanguages.appendChild(elOptionGroup);

        this.setCountriesHTML(langItem);
      }
    }
  };

  Languages.setCountriesHTML = function (countries) {
    var i, country, elLanguages = document.querySelector("#language");

    for (i = 1; i < countries.length; i++) {
      country = countries[i];
      elLanguages.options.add(new Option(country[1], country[0]));
    }
  };

  Languages.setLanguagesHTML();

  module.exports = Languages;
})(window, document);

},{}],2:[function(require,module,exports){
"use strict";

;(function (window, document, undefined) {
  "use strict";

  var Recognition = {};

  // ========================================================
  // Private methods
  // ========================================================
  var isSupported = function () {
    return window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition || window.oSpeechRecognition;
  };


  // ========================================================
  // Public methods
  // ========================================================
  Recognition.init = function () {
    if (isSupported() === undefined) {
      console.error("Your browser does not support the Web Speech API");
    } else {
      this.recognizer = new window.SpeechRecognition();
      this.recognizer.continuous = true;

      this.events();
    }
  };

  Recognition.events = function () {
    var that = this;

    this.start();
    this.stop();
    this.result();

    // [
    //   'start',
    //   'stop',
    //   'error',
    //   'result'
    // ].forEach(function (el, idx) {
    //   that.call(el);
    // });
  };

  Recognition.propagateEvent = function (eventName) {
    this.recognizer[eventName];
  };

  Recognition.start = function () {
    this.recognizer.start();
  };

  Recognition.stop = function () {
    this.recognizer.stop();
  };

  Recognition.result = function () {
    var that = this;

    this.recognizer.addEventListener("result", function (e) {
      var i, text = "";

      for (i = e.resultIndex; i < e.results.length; i++) {
        text = e.results[i][0].transcript;
      }

      that.showContent(text);
    });
  };

  Recognition.showContent = function (text) {
    $(document).trigger("recognition-finish", [text]);
  };

  module.exports = Recognition;
})(window, document);

},{}],3:[function(require,module,exports){
"use strict";

;(function (window, document, undefined) {
  "use strict";

  var Synthesis = {
    speech: function (text, lang) {
      var message = new SpeechSynthesisUtterance(),
          voices = window.speechSynthesis.getVoices();

      message.voice = voices[10];
      message.voiceURI = "native";
      message.volume = 1;
      message.rate = 1;
      message.pitch = 2;
      message.text = text;
      message.lang = lang; //'fr-FR';

      // voices.forEach(function(voice) {
      //   console.log(voice.name, voice.default ? '(default)' :'');
      // });

      speechSynthesis.speak(message);
    }
  };

  module.exports = Synthesis;
})(window, document);

},{}],4:[function(require,module,exports){
"use strict";

;(function (window, document, undefined) {
  "use strict";

  var Translate = {};

  Translate.ws = "http://api.mymemory.translated.net/get";

  Translate.getTranslation = function (text, myCountry, guestCountry, guest) {
    $.get(this.ws + "?q=" + text + "&langpair=" + guestCountry + "|" + myCountry, function (response) {
      $(document).trigger("translate-finish", [response.responseData.translatedText, guest]);
    });
  };

  module.exports = Translate;
})(window, document);

},{}],5:[function(require,module,exports){
"use strict";

;(function (window, document, undefined) {
  "use strict";

  var User = function (data) {
    if (data.hasOwnProperty("new")) {
      this.id = this.setID();
      this.color = this.getColor();
    }

    this.extend(data);
  };

  User.prototype.extend = function (data) {
    var key;

    for (key in data) {
      this[key] = data[key];
    }
  };

  User.prototype.getName = function () {
    return this.name;
  };

  User.prototype.getLanguage = function () {
    return this.language;
  };

  User.prototype.getID = function () {
    return this.id;
  };

  User.prototype.setID = function () {
    var date = new Date();

    return date.getTime();
  };

  User.prototype.getColor = function () {
    var randomIdx, colors = ["yellow", "green", "blue", "orange", "purple", "pink", "red", "teal"];

    randomIdx = Util.generateRandomNumber(0, colors.length);

    return colors[randomIdx];
  };

  User.prototype.getCountry = function () {
    return this.language.slice(0, 2);
  };

  User.prototype.itsMe = function (id) {
    return this.id === id;
  };

  module.exports = User;
})();

},{}],6:[function(require,module,exports){
"use strict";

;(function (window, document, undefined) {
  "use strict";

  var Util = {};

  Util.generateRandomNumber = function (min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
  };

  Util.updateScroll = function (target) {
    $(target).scrollTop($(target).height());
  };

  module.exports = Util;
})(window, document);

},{}],7:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

var Synthesis = _interopRequire(require("./browser/synthesis"));

var Translate = _interopRequire(require("./browser/translate"));

var Recognition = _interopRequire(require("./browser/recognition"));

var Languages = _interopRequire(require("./browser/languages"));

var Util = _interopRequire(require("./js/util"));

var User = _interopRequire(require("./common/user"));

},{"./browser/languages":1,"./browser/recognition":2,"./browser/synthesis":3,"./browser/translate":4,"./common/user":5,"./js/util":6}]},{},[7])