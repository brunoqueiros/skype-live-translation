//;(function (window, document, undefined) {
  'use strict';
  
  function User(name, language) {
    this.id = this.setID();
    this.name = name;
    this.language = language;
    this.color = this.getColor();
  }
  
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
  }
  
  User.prototype.getColor = function () {
    var randomIdx,
        colors = [
          'yellow', 'green', 'blue',
          'orange', 'purple', 'pink',
          'red', 'teal'
        ];
    
    randomIdx = Util.generateRandomNumber(0, colors.length);
    
    return colors[randomIdx];    
  };

  User.prototype.itsMe = function (id) {
    return this.id === id;
  };
//})();