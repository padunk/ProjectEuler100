/* The product of these numbers is 26 × 63 × 78 × 14 = 1788696. What is the greatest product of four adjacent numbers in the same direction (up, down, left, right, or diagonally) in a given arr grid?
 */

const testGrid = [
   [40, 17, 81, 18, 57],
   [74, 4, 36, 16, 29],
   [36, 42, 69, 73, 45],
   [51, 54, 69, 16, 92],
   [7, 97, 57, 32, 16],
];

function largestGridProduct(arr, limit = 4) {
   let largest = 0;
   let lenLimit = arr.length - limit + 1;
   let len = arr.length;

   for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
         let mult;
         // right diagonal
         if (i < lenLimit && j < lenLimit) {
            mult =
               arr[i][j] *
               arr[i + 1][j + 1] *
               arr[i + 2][j + 2] *
               arr[i + 3][j + 3];
            mult > largest && (largest = mult);
         }
         // left diagonal
         if (i < lenLimit && j > limit - 1) {
            mult =
               arr[i][j] *
               arr[i + 1][j - 1] *
               arr[i + 2][j - 2] *
               arr[i + 3][j - 3];
            mult > largest && (largest = mult);
         }
         // vertical
         if (i < lenLimit) {
            mult = arr[i][j] * arr[i + 1][j] * arr[i + 2][j] * arr[i + 3][j];
            mult > largest && (largest = mult);
         }
         // horizontal
         if (j < lenLimit) {
            mult = arr[i][j] * arr[i][j + 1] * arr[i][j + 2] * arr[i][j + 3];
            mult > largest && (largest = mult);
         }
      }
   }
   console.log(largest);
   return largest;
}

largestGridProduct(testGrid);
