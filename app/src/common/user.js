import Util from './util';

class User {
  constructor(data) {
    if (data.hasOwnProperty('new')) {
      this.id = this.setID();
      this.color = this.getColor();
    }

    this.extend(data);
  }

  extend(data) {
    var key;

    for (key in data) {
      this[key] = data[key];
    }
  }
  
  getName() {
    return this.name;
  }
  
  getLanguage() {
    return this.language;
  }
  
  getID() {
    return parseInt(this.id, 10);
  }

  setID() {
    var date = new Date();
    
    return date.getTime();
  }
  
  getColor() {
    var randomIdx,
        colors = [
          'yellow', 'green', 'blue',
          'orange', 'purple', 'pink',
          'red', 'teal'
        ];
    
    randomIdx = Util.generateRandomNumber(0, colors.length);
    
    return colors[randomIdx];    
  }

  getCountry() {
    return this.language.slice(-2);
  }

  itsMe(id) {
    return this.id === id;
  }
}


export default User;