;(function (window, document, undefined) {
  'use strict';

  var Synthesis = {
    speech: function (text, lang) {
      var message = new SpeechSynthesisUtterance()
        , voices = window.speechSynthesis.getVoices();

      message.voice = voices[10];
      message.voiceURI = 'native';
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