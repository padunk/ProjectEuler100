/* Work out the first ten digits of the sum of the following one-hundred 50-digit numbers.
*/

function largeSum(arr) {
   let result = arr.reduce((acc, el) => acc += BigInt(el), BigInt(0));
   return Number(result.toString().slice(0, 10));
}

const testNums = [
   '37107287533902102798797998220837590246510135740250',
  '46376937677490009712648124896970078050417018260538'
];

largeSum(testNums);
