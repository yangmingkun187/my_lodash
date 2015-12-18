'use strict';

function Array() {

}

Array.forEach = function(array, callback) {
  for(var i = 0, len = array.length; i < len; i++) {
    callback(array[i]);
  }
}

Array.max = function(array,callback) {
  var max;
  var maxFlag;
  if(typeof callback === "function") {
    maxFlag = callback(array[0]);
    for(var i = 0, len = array.length; i < len; i++) {
      if(maxFlag < callback(array[i])) {
        maxFlag = callback(array[i]);
        max = array[i];
      }
    }
  } else if(typeof callback === 'string') {
    maxFlag = array[0][callback];
    for(var i = 0, len = array.length; i < len; i++) {
      if(maxFlag < array[i][callback]) {
        maxFlag = array[i][callback];
        max = array[i];
      }
    }
  } else {
    max = array[0];
    for(var i = 0, len = array.length; i < len; i++) {
      if(array[i] > max) {
        max = +array[i];
      }
    }
  }
  return max;
}

module.exports = Array;
