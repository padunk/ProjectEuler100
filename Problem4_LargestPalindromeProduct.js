/* A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two n-digit numbers.
*/

function largestPalindromeProduct(n) {
   // if (localStorage.getItem(`${n}`)) {
   //    return localStorage.getItem(`${n}`);
   // }
   let mod = 11;
   let lowerLimit = 10 ** (n - 1);
   let base1 = Number(Array.from({ length: n }, _ => 9).join(''));
   let base2;
   for (let i = base1; i >= 0; i--) {
      if (i % mod === 0) {
         base2 = i;
         break;
      }
   }
   let result = -Infinity;
   console.log(base1, base2, lowerLimit);
   for (let i = base1; i >= lowerLimit; i--) {
      // optimization, not my code.
      if (result > i * base1) {
         break;
      }
      for (let j = base2; j >= lowerLimit; j -= mod) {
         if (i % mod === 0 || j % mod === 0) {
            let number = i * j;
            if (palindromeCheck(`${number}`) ) {
               if (number > result) {
                  result = number;
               }
            }
         }
      }
   }
   // localStorage.setItem(`${n}`, result);
   console.log(result);
   return result;
}

function palindromeCheck(str) {
   // turn string into array, reverse it and turn it back to string.
   let revStrArr = str
      .split('')
      .reverse()
      .join('');
   return str === revStrArr;
}

largestPalindromeProduct(2);
