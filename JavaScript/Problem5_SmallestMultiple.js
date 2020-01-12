/* 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?
*/

function smallestMult(n) {
   if (n <= 1) {
      return 1;
   }
   let result = n * (n - 1);

   const calc = function(m) {
      if (m === 1) {
         return result;
      }
      if (result % m !== 0) {
         result = (result * m) / gcd(result, m);
      }
      return calc(m - 1);
   };

   return n - 2 === 0 ? result : calc(n - 2);
}

function gcd(a, b) {
   let t = a % b;
   while (t !== 0) {
      a = b;
      b = t;
      t = a % b;
   }
   return b;
}

smallestMult(20);
