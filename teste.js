(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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



// ;(function (window, document, undefined) {
//   'use strict';

//   window.Synthesis = {};

//   Synthesis.speech = function (text, lang) {
//     var message = new SpeechSynthesisUtterance(),
//       voices = window.speechSynthesis.getVoices();

//     message.voice = voices[10];
//     message.voiceURI = 'native';
//     message.volume = 1;
//     message.rate = 1;
//     message.pitch = 2;
//     message.text = text;
//     message.lang = lang; //'fr-FR';

//     // voices.forEach(function(voice) {
//     //   console.log(voice.name, voice.default ? '(default)' :'');
//     // });

//     speechSynthesis.speak(message);
//   };
// })(window, document);

},{}],2:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

var Synthesis = _interopRequire(require("./browser/synthesis"));

console.log("Bruno");

},{"./browser/synthesis":1}]},{},[2]);
