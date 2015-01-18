;(function (window, document, undefined) {
  'use strict';
  
  var Languages = {};
    
  var
    languagesList = [
      [
        'Afrikaans',
          ['af-ZA']
      ],
      [
        'Bahasa Indonesia',
          ['id-ID']
      ],
      [
        'Bahasa Melayu',
          ['ms-MY']
      ],
      [
        'Català',
          ['ca-ES']
      ],
      [
        'Čeština',
          ['cs-CZ']
      ],
      [
        'Deutsch',
          ['de-DE']
      ],
      [
        'English',
          ['en-AU', 'Australia'],
          ['en-CA', 'Canada'],
          ['en-IN', 'India'],
          ['en-NZ', 'New Zealand'],
          ['en-ZA', 'South Africa'],
          ['en-GB', 'United Kingdom'],
          ['en-US', 'United States']
      ],
      [
        'Español',
          ['es-AR', 'Argentina'],
          ['es-BO', 'Bolivia'],
          ['es-CL', 'Chile'],
          ['es-CO', 'Colombia'],
          ['es-CR', 'Costa Rica'],
          ['es-EC', 'Ecuador'],
          ['es-SV', 'El Salvador'],
          ['es-ES', 'España'],
          ['es-US', 'Estados Unidos'],
          ['es-GT', 'Guatemala'],
          ['es-HN', 'Honduras'],
          ['es-MX', 'México'],
          ['es-NI', 'Nicaragua'],
          ['es-PA', 'Panamá'],
          ['es-PY', 'Paraguay'],
          ['es-PE', 'Perú'],
          ['es-PR', 'Puerto Rico'],
          ['es-DO', 'República Dominicana'],
          ['es-UY', 'Uruguay'],
          ['es-VE', 'Venezuela']
      ],
      [
        'Euskara',
          ['eu-ES']
      ],
      [
        'Français',
          ['fr-FR']
      ],
      [
        'Galego',
          ['gl-ES']
      ],
      [
        'Hrvatski',
          ['hr_HR']
      ],
      [
        'IsiZulu',
          ['zu-ZA']
      ],
      [
        'Íslenska',
          ['is-IS']
      ],
      [
        'Italiano',
          ['it-IT', 'Italia'],
          ['it-CH', 'Svizzera']
      ],
      [
        'Magyar',
          ['hu-HU']
      ],
      [
        'Nederlands',
          ['nl-NL']
      ],
      [
        'Norsk bokmål',
          ['nb-NO']
      ],
      [
        'Polski',
          ['pl-PL']
      ],
      [
        'Português',
          ['pt-BR', 'Brasil'],
          ['pt-PT', 'Portugal']
      ],
      [
        'Română',
          ['ro-RO']
      ],
      [
        'Slovenčina',
          ['sk-SK']
      ],
      [
        'Suomi',
          ['fi-FI']
      ],
      [
        'Svenska',
          ['sv-SE']
      ],
      [
        'Türkçe',
          ['tr-TR']
      ],
      [
        'български',
          ['bg-BG']
      ],
      [
        'Pусский',
          ['ru-RU']
      ],
      [
        'Српски',
          ['sr-RS']
      ],
      [
        '한국어',
          ['ko-KR']
      ],
      [
        '中文',
          ['cmn-Hans-CN', '普通话 (中国大陆)'],
          ['cmn-Hans-HK', '普通话 (香港)'],
          ['cmn-Hant-TW', '中文 (台灣)'],
          ['yue-Hant-HK', '粵語 (香港)']
      ],
      [
        '日本語',
          ['ja-JP']
      ],
      [
        'Lingua latīna',
          ['la']
      ]
    ];
  
  Languages.getLanguages = function () {
    return languagesList;
  };
  
  Languages.setLanguagesHTML = function () {
    var langs = this.getLanguages(),
        langItem,
        elLanguages = document.querySelector('#language'),
        i;

    for (i = 0; i < this.getLanguages().length; i++) {
      langItem = langs[i];

      if (languagesList[i].length === 2) {
        elLanguages.options.add(new Option(langItem[0], langItem[1]));
      } else {
        var elOptionGroup = document.createElement('optgroup');
        elOptionGroup.setAttribute('label', langItem[0]);
        elLanguages.appendChild(elOptionGroup);
        
        this.setCountriesHTML(langItem);
      }
    }
  };
  
  Languages.setCountriesHTML = function (countries) {
    var i,
        country,
        elLanguages = document.querySelector('#language');
    
    for (i = 1; i < countries.length; i++) {
      country = countries[i];
      elLanguages.options.add(new Option(country[1], country[0]));
    }
  };

  Languages.setLanguagesHTML();

  export default Languages;
})(window, document);