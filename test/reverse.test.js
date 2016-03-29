var assert = require('assert');
var reverse = require('../reverse');

describe('#reverse', function () {
  it('reverses the given array', function () {
    var input = [ 4, 5, 6, 7, 8, 9 ];
    var expectedOutput = [ 9, 8, 7, 6, 5, 4 ];
    var actual = reverse(input);
    assert.deepEqual(actual, expectedOutput);
  });

  it('reverses all kinds of arrays', function () {
    var input = [ 'a', 'b', 'c', 'd' ];
    var expectedOutput = [ 'd', 'c', 'b', 'a' ];
    var actual = reverse(input);
    assert.deepEqual(actual, expectedOutput);
  });
});
