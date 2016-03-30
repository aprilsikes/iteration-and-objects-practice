var assert = require('assert');
var sumColumns = require('../sum_columns');

describe('#sumColumns', function () {
  it('returns the sum of each "column"', function () {
    var input = [
      [1,2],
      [1,2],
    ];
    var expectedOutput = [
      [2,4]
    ];
    var actual = sumColumns(input);
    assert.deepEqual(actual, expectedOutput);
  });

  it('can transpose a multi-element array', function () {
    var input = [
      [2,4,6],
      [2,4,6],
      [2,4,6],
      [2,4,6],
    ];
    var expectedOutput = [
      [8, 16, 24]
    ];
    var actual = sumColumns(input);
    assert.deepEqual(actual, expectedOutput);
  });
});
