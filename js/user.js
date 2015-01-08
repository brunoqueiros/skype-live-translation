//;(function (window, document, undefined) {
  'use strict';
  
  function User(data) {
    if (data.hasOwnProperty('new')) {
      this.id = this.setID();
      this.color = this.getColor();
    }

    this.extend(data);
  }

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

  User.prototype.getCountry = function () {
    return this.language.slice(0, 2);
  };

  User.prototype.itsMe = function (id) {
    return this.id === id;
  };
//})();