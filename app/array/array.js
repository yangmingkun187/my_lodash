'use strict';

function Array() {

}

Array.forEach = function(array, callback) {
  for(var i = 0, len = array.length; i < len; i++) {
    callback(array[i]);
  }
}

module.exports = Array;
