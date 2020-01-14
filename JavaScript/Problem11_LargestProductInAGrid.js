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
         let mult = 1;
         // right diagonal
         if (i < lenLimit && j < lenLimit) {
            let x = 0;
            while (x < limit) {
               mult *= arr[i][j];
               i++; j++; x++;
            }
            largest = Math.max(largest, mult);
         }
         // left diagonal
         if (i < lenLimit && j > limit - 1) {
            let x = 0;
            while (x < limit) {
               mult *= arr[i][j];
               i++; j--; x++;
            }
            largest = Math.max(largest, mult);
         }
         // vertical
         if (i < lenLimit) {
            let x = 0;
            while (x < limit) {
               mult *= arr[i][j];
               i++; x++;
            }
            largest = Math.max(largest, mult);
         }
         // horizontal
         if (j < lenLimit) {
            let x = 0;
            while (x < limit) {
               mult *= arr[i][j];
               j++; x++;
            }
            largest = Math.max(largest, mult);
         }
      }
   }
   return largest;
}

largestGridProduct(testGrid);
