/* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below the provided parameter value number.
*/

function multiplesOf3and5(number) {
   let multiples = [];
   for (let index = 1; index < number; index++) {
      if (index % 3 === 0 || index % 5 === 0) {
         multiples.push(index);
      }
   }
   let result = multiples.reduce((s, n) => s += n, 0);
   return result;
}