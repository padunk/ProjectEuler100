/* The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below n.
*/

function primeSummation(n) {
   let sum = 2;

   for (let i = 3; i < n; i+=2) {
      if (isPrime(i)) {
         sum += i;
      }
   }
   console.log(sum)
   return sum;
}

function isPrime(p) {
   let upperLimit = Math.floor(Math.sqrt(p));
   for (let i = 3; i <= upperLimit; i += 2) {
      if (p % i === 0) {
         return false;
      }
   }
   return true;
}

primeSummation(2000000);