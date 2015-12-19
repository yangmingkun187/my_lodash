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
    max = array[0];
    for(var i = 0, len = array.length; i < len; i++) {
      if(maxFlag < callback(array[i])) {
        maxFlag = callback(array[i]);
        max = array[i];
      }
    }
  } else if(typeof callback === 'string') {
    maxFlag = array[0][callback];
    max = array[0];
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

Array.min = function(array,callback) {
  var min;
  var minFlag;
  if(typeof callback === "function") {
    minFlag = callback(array[0]);
    min = array[0];
    for(var i = 0, len = array.length; i < len; i++) {
      if(minFlag > callback(array[i])) {
        minFlag = callback(array[i]);
        min = array[i];
      }
    }
  } else if(typeof callback === 'string') {
    minFlag = array[0][callback];
    min = array[0];
    for(var i = 0, len = array.length; i < len; i++) {
      if(minFlag > array[i][callback]) {
        minFlag = array[i][callback];
        min = array[i];
      }
    }
  } else {
    min = array[0];
    for(var i = 0, len = array.length; i < len; i++) {
      if(array[i] < min) {
        min = +array[i];
      }
    }
  }
  return min;
}

Array.filter = function(array, callback) {
  var resultArray = [];
  if(typeof callback === "function") {

    for(var i = 0, len = array.length; i < len; i++) {

      if(callback(array[i])) {
        resultArray.push(array[i]);
      }
    }
  } else {
    throw "element two should be a function";
  }
  return resultArray;
}

module.exports = Array;
