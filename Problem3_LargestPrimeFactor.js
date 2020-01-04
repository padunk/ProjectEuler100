/* The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the given number?
*/

function largestPrimeFactor(number) {
   let prime = [];
   while (number % 2 === 0) {
      prime.push(2);
      number /= 2;
   }
   for (let i = 3; i <= Math.sqrt(number); i += 2) {
      if (number % i === 0) {
         prime.push(i);
         number /= i;
      }
   }
   if (number > 2) {
      prime.push(number);
   }
   let largest = Math.max.apply(null, prime);
   return largest;
}

largestPrimeFactor(600851475143);

// I don't know how to find prime factor, so I google it and do little modification.
// Pseudo code is:
// 1. While n is divisible by 2, print 2 and divide n by 2.
// 2. After step 1, n must be odd. Now start a loop from i = 3 to square root of n. If i divisible by n, print i and divide n by i, increment i by 2 and continue.
// 3. If n is a prime number and is greater than 2, then n will not become 1 by above two steps. So print n if it is greater than 2.
// source: https://www.geeksforgeeks.org/prime-factor/