'use strict';

var assert = require('chai').assert
  , User = require('../app/src/common/user');

describe('User', function () {
  var u;

  beforeEach(function () {
    u = new User({
      'new': true,
      'name': 'Bruno',
      'language': 'pt-BR'
    });
  });

  describe('#getColor()', function () {
    it('should return a string representing the color name', function () {
      assert.typeOf(u.getColor(), 'string');
    });
  });

  describe('#getID()', function () {
    it('should return an number representing the user ID', function () {
      assert.typeOf(u.getID(), 'number');
    });
  });

  describe('#getName()', function () {
    it('should return a string representing the user name', function () {
      assert.typeOf(u.getName(), 'string');
    });

    it('should return "Bruno"', function () {
      assert.equal(u.getName(), 'Bruno');
    });
  });

  describe('#getCountry()', function () {
    it('should return a string representing the user country', function () {
      assert.typeOf(u.getCountry(), 'string');
    });

    it('should return "BR"', function () {
      assert.equal(u.getCountry(), 'BR');
    });
  });

  describe('#getLanguage()', function () {
    it('should return a string representing the user language', function () {
      assert.typeOf(u.getLanguage(), 'string');
    });

    it('should return "pt-BR"', function () {
      assert.equal(u.getLanguage(), 'pt-BR');
    });
  });
});