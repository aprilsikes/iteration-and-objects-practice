// This function should transpose the given array.

module.exports = function (input) {
  return input.map(function (item, i) {
    return item.map(function (num, j) {
      return input[j][i];
    })
  })
};
