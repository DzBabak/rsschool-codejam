/* global describe it */
const assert = require('assert');

Object.freeze(assert);
const sumOfOther = require('./sumOfOther.js');

describe('SumOfOther', () => {
  it('sumOfOther([2, 3, 4, 1])', () => {
    assert.deepEqual(sumOfOther([2, 3, 4, 1]), [8, 7, 6, 9]);
  });
});


it('sumOfOther([2, 3, 4, 1])', () => {
  assert.deepEqual(sumOfOther([2, 3, 4, 1]), [8, 7, 6, 9]);
});

it('sumOfOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])', () => {
  assert.deepEqual(sumOfOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
    [54, 53, 52, 51, 50, 49, 48, 47, 46, 45]);
});

it('sumOfOther([])', () => {
  assert.deepEqual(sumOfOther([]), []);
});


const make = require('./make.js');

function sum(a, b) {
  return a + b;
}

it('make(15)(34, 21, 666)(41)(sum)', () => {
  assert.equal(make(15)(34, 21, 666)(41)(sum), 777);
});


it('make(0)(1)(sum)', () => {
  assert.equal(make(0)(1)(sum), 1);
});

it('make(15)(34, 21, 666)(41)(sum)', () => {
  assert.equal(make(1)(2)(3)(4)(5)(6)(sum), 21);
});


const recursion = require('./recursion.js');

const tree = {
  value: 100,
  left: { value: 90, left: { value: 70 }, right: { value: 99 } },
  right: { value: 120, left: { value: 110 }, right: { value: 130 } },
};


it('[[100], [90, 120], [70,99,110,130]]', () => {
  assert.deepEqual(recursion(tree), [[100], [90, 120], [70, 99, 110, 130]]);
});
