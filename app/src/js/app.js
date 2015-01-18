// Verifica o suporte
window.SpeechRecognition = window.SpeechRecognition       ||
                           window.webkitSpeechRecognition ||
                           null;

// Caso não suporte a API
if (window.SpeechRecognition === null) {
  console.log('O seu navegador não suporta a webSpeechRecognition');
} else {
  var recognizer = new window.SpeechRecognition();
  var transcription = document.getElementById('transcription');

  recognizer.continuous = true;
  transcription.textContent = '';

  recognizer.onresult = function (event) {
    for (var i = event.resultIndex; i < event.results.length; i++) {
      if (event.results[i].isFinal) {
        transcription.textContent = event.results[i][0].transcript + ' (Taxa de acerto [0/1] : ' + event.results[i][0].confidence + ')';
        
        $.get('http://api.mymemory.translated.net/get?q=' + event.results[i][0].transcript + '&langpair=pt|fr', function (response) {
          console.log(response.responseData.translatedText);
          document.querySelector('#translate').textContent = response.responseData.translatedText;

          var msg = new SpeechSynthesisUtterance();
          var voices = window.speechSynthesis.getVoices();
          msg.voice = voices[10]; // Note: some voices don't support altering params
          msg.voiceURI = 'native';
          msg.volume = 1; // 0 to 1
          msg.rate = 1; // 0.1 to 10
          msg.pitch = 2; //0 to 2
          msg.text = response.responseData.translatedText; //'Hello World';
          msg.lang = 'fr-FR'; // 'en-US';

          msg.onend = function(e) {
            console.log('Finished in ' + event.elapsedTime + ' seconds.');
          };

          speechSynthesis.speak(msg);
        });
      } else {
        transcription.textContent += event.results[i][0].transcript;
      }
    }
  }

  document.querySelector('#rect').addEventListener('click', function () {
    try {
      recognizer.start();
    } catch (ex) {
      console.log('Error: ' + ex.message);
    }
  });
}