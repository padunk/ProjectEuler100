/* Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

a diagram of 6 2 by 2 grids showing all the routes to the bottom right corner

How many such routes are there through a given gridSize?
*/

function latticePaths(gridSize) {
    return halfFactorial(gridSize * 2) / factorial(gridSize);
}

function halfFactorial(n) {
    function calculate(x) {
        if (x === n / 2 + 1) {
            return x;
        }
        return x * calculate(x - 1);
    }
    return calculate(n);
}

function factorial(n) {
    if (n === 1) {
        return n;
    }
    return n * factorial(n - 1);
}
