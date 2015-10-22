/*jshint unused:false*/
'use strict';

var reduce = require('./');
var assert = require('assert');

function test(label, func) {
  try {
    func();
    console.log('(y) %s', label);
  } catch (variable) {
    console.log('(x) %s', label);
    console.log('      %s', variable.message);
  }
}

test('reduce returns the summ of all elements.', function () {
  var actual = [4, 6, 7, 12].reduce(function(a, b) {
    return a + b;
  });
  assert.equal(actual, 29);
});

test('reduce returns the product of a flattened array of arrays. ', function () {
  var actual = [[4, 6], [7, 12]].reduce(function(a, b) {
    return a.concat(b);
  });
  assert.deepEqual(actual, [4, 6, 7, 12]);
});
