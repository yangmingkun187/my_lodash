'use strict';

describe('array', function() {
  var _ = require('../../app/array/array.js');
  var array;
  describe('forEach test', function() {
    it('test array list', function() {
      var testArray = [];
      array = [1,2,3,4,5];

      _.forEach(array, function(item) {
        testArray.push(item);
      })
      expect(testArray).to.deep.equal(array);
    });

    it('test array Map1', function() {
      var testArray = [];
      array = [{name:'yang',age:18},{name:'ming',age:23},{name:'yang',age:18}];

      _.forEach(array, function(item) {
        testArray.push(item);
      })
      expect(testArray).to.deep.equal(array);
    });

    it('test array dyadic array;', function() {
      var testArray = [];
      array = [{
        name:'yang',
        age:18,
        skills:['js','mocha','chai']
      },{
        name:'ming',
        age:23,
        skills:['angular','jquery','zepto']
      }];

      _.forEach(array, function(item) {
        _.forEach(item.skills,function(skill) {
          testArray.push(skill);
        })
      })
      expect(testArray).to.deep.equal(['js','mocha','chai','angular','jquery','zepto']);
    })
  });


  describe('max test', function() {
    it('should be return max num of array', function() {
      array = [1,8,3,6,5,2];

      var result = _.max(array);

      expect(result).to.equal(8);
    });

    it('should be return max of array', function() {
      array = ['1','5','8','2'];

      var result = _.max(array);

      expect(result).to.equal(8);
    });

    it('should be return max value of array', function() {
      array = [{name:'yang',age:18},{name:'ming',age:23},{name:'yang',age:20}];

      var result = _.max(array, function(item) {
          return item.age;
      });

      expect(result).to.deep.equal({name:'ming',age:23});
    });

    it('should be return max item of array', function() {
      array = [{name:'ming',age:23},{name:'yang',age:18},{name:'yang',age:20}];

      var result = _.max(array, 'age');

      expect(result).to.deep.equal({name:'ming',age:23});
    });
  });


  describe('min test', function() {
    it('should be return min num of array', function() {
      array = [1,8,3,6,5,2];

      var result = _.min(array);

      expect(result).to.equal(1);
    });

    it('should be return min of array', function() {
      array = ['5','1','8','2'];

      var result = _.min(array);

      expect(result).to.equal(1);
    });

    it('should be return min value of array', function() {
      array = [{name:'yang',age:18},{name:'ming',age:23},{name:'yang',age:20}];

      var result = _.min(array, function(item) {
          return item.age;
      });

      expect(result).to.deep.equal({name:'yang',age:18});
    });

    it('should be return min item of array', function() {
      array = [{name:'ming',age:23},{name:'yang',age:18},{name:'yang',age:20}];

      var result = _.min(array, 'age');

      expect(result).to.deep.equal({name:'yang',age:18});
    });
  });

  describe('filter test', function() {
    it('should be return filter result', function() {
      array = [1,5,3,6,9];
      var resultArray = _.filter(array, function(item) {
        return item > 5
      })

      expect(resultArray).to.deep.equal([6,9]);
    });

    it('should be return isEqual', function() {
      array = [{name:'yang',age:18},{name:'ming',age:23},{name:'yang',age:20}];
      var testArray = _.filter(array, function(item) {
        return item.age > 20;
      })

      expect(testArray).to.deep.equal([{name:'ming',age:23}]);
    });

    it('should be return isEqual', function() {
      array = [{
        name:'yang',
        age:18,
        skills:['js','mocha',{
          front: 'css'
        }]
      },{
        name:'ming',
        age:23,
        skills:['angular','jquery','zepto']
      }];
      var resultArray = _.filter(array, function(item) {
        return item.skills[0] === 'angular';
      });

      expect(resultArray).to.deep.equal([{
        name:'ming',
        age:23,
        skills:['angular','jquery','zepto']
      }]);
    });
  });


});
