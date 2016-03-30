// This function should return an array that is the sum of all of the "columns".
// That is, if you have an array like:
//
//    [
//      [1, 2, 3],
//      [1, 2, 3],
//    ]
//
// The resulting array would be:
//
//    [ 2, 4, 6]
//
// The first element, `2`, is the sum of the first elements of all the arrays.
// The first element, `4`, is the sum of the second elements of all the arrays.
// The first element, `6`, is the sum of the third elements of all the arrays.

module.exports = function (input) {
  // var array = [];
  // var array2 = [];
  //   sum = 0;
  //   sum2 = 0;
  //   sum += input[0][0] + input [1][0];
  //   sum2 += input[0][1] + input [1][1];
  // array.push(sum, sum2);
  // console.log(array);
  // array2.push(array);
  // return array2;
  // for (var i = 0; i < input.length; i++) {
  //   for (var i = 0; i < input[i].length; i++) {
  //     // for (var j = 0; j < input[i].length; j++) {
  //
  //     var result = input[i][i] * input.length;
  //     // }
  //     console.log(result);
  //     array.push(result);
  //   }
  //
  // }
  // console.log(array);
  // console.log(array2);
  // array2.push(array);
  // return array2;
  var results = [];
  for (var i = 0; i < input.length; i++) {
    var sum = 0;
    for (var j = 0; j < input.length; j++) {
      sum += input[j][i];

    } results.push(sum);
  } return [results.filter(Boolean)];

  // var array = input.map(function (item) {
  //   return item * input.length;
  // })

  // return array;



};
