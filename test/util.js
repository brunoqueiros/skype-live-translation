'use strict';

var assert = require('chai').assert
  , Util = require('../dist/src/common/util');

describe('Util', function () {
  describe('#generateRandomNumber()', function () {
    it('should return a number between 1 and 10', function () {
      assert.typeOf(Util.generateRandomNumber(1, 10), 'number');
    });
  });
});