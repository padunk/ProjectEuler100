/* A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc such that a + b + c = n.
*/

function specialPythagoreanTriplet(n) {
   let c;
   let upperLimit = Math.floor(n / 2);

   for (let a = 2; a < upperLimit; a++) {
      for (let b = a + 1; b < upperLimit; b++) {
         c = Math.sqrt(a ** 2 + b ** 2);
         if (c % 1 === 0 && a + b + c === n) {
            console.log(a,b,c);
            return a * b * c;
         }
      }
   }
}

specialPythagoreanTriplet(1000);
