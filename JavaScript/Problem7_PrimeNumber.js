/* By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the nth prime number?
*/

function nthPrime(n) {
   let count = 1;
   let number = 2;

   while (count < n) {
      number += 1;
      if (isPrime(number)) {
         count++;
      }
   }
   return number;
}

function isPrime(p) {
   let upperLimit = Math.floor(Math.sqrt(p));

   if (p % 2 === 0) return false;
   for (let i = 3; i <= upperLimit; i += 2) {
      if (p % i === 0) {
         return false;
      }
   }
   return true;
}

nthPrime(10001);
