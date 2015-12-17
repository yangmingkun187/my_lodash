'use strict';

describe('array', function() {
  var _ = require('../../app/array/array.js');
  var array;
  var testArray = [];
  describe('forEach test', function() {
    it('test array forEach', function() {

      array = [1,2,3,4,5];

      _.forEach(array, function(item) {
        testArray.push(item);
      })

      expect(testArray).to.deep.equal(array);

    })
  })
});
