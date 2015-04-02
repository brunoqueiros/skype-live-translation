class Util {
	generateRandomNumber(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
  }
  
  updateScroll(target) {
    $(target).scrollTop($(target).height());
  }
}

export default new Util();