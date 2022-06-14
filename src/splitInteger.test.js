'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts 
if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(36, 6))
    .toEqual([6, 6, 6, 6, 6, 6]);
});

test(`should return a part equals to a value
 when splitting into 1 part`, () => {
  expect(splitInteger(1, 1))
    .toEqual([1]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(12, 5))
    .toEqual([2, 2, 2, 3, 3]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(4, 6))
    .toEqual([0, 0, 1, 1, 1, 1]);
});
