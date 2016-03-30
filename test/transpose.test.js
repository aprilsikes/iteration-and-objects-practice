var assert = require('assert');
var transpose = require('../transpose');

describe('#transpose', function () {
  it('can transpose a 2-element array', function () {
    var input = [
      [1,2],
      [3,4],
    ];

    var expectedOutput = [
      [1,3],
      [2,4],
    ];

    var actual = transpose(input);
    assert.deepEqual(actual, expectedOutput);
  });

  it('can transpose a multi-element array', function () {
    var input = [
      ['a', 'a', 'a', 'a'],
      ['b', 'b', 'b', 'b'],
      ['c', 'c', 'c', 'c'],
      ['d', 'd', 'd', 'd'],
    ];

    var expectedOutput = [
      ['a', 'b', 'c', 'd'],
      ['a', 'b', 'c', 'd'],
      ['a', 'b', 'c', 'd'],
      ['a', 'b', 'c', 'd'],
    ];
    var actual = transpose(input);
    assert.deepEqual(actual, expectedOutput);

  });

});
