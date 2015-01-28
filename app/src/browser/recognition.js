;(function (window, document, undefined) {
  'use strict';

  var Recognition = {};

  // ========================================================
  // Private methods
  // ========================================================
  var

    isSupported = function () {
      return window.SpeechRecognition = window.SpeechRecognition       ||
                                        window.webkitSpeechRecognition ||
                                        window.mozSpeechRecognition    ||
                                        window.msSpeechRecognition     ||
                                        window.oSpeechRecognition;
    };


  // ========================================================
  // Public methods
  // ========================================================
  Recognition.init = function () {
    if (isSupported() === undefined) {
      console.error('Your browser does not support the Web Speech API');
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

    this.recognizer.addEventListener('result', function (e) {
      var i,
        text = '';

      for (i = e.resultIndex; i < e.results.length; i++) {
        text = e.results[i][0].transcript;
      }

      that.showContent(text);
    });
  };

  Recognition.showContent = function (text) {
    $(document).trigger('recognition-finish', [text]);
  };

  module.exports = Recognition;
})(window, document);