/* 2**15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2exponent?

Yeah... I'm bragging here...
*/

const powerDigitSum = x => String(BigInt(2**x)).split('').reduce((a, e) => a += +e, 0);
