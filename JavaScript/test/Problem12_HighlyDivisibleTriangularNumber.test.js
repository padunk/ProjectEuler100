const divisibleTriangleNumber = require('../Problem12_HighlyDivisibleTriangularNumber.js');

test('should function exist', () => {
    expect(divisibleTriangleNumber(5)).toBeDefined();
});

test('first number with 5 divisor is 28', () => {
    expect(divisibleTriangleNumber(5)).toBe(28);
});

test('first number with 23 divisor is 630', () => {
    expect(divisibleTriangleNumber(23)).toBe(630);
});

test('first number with 374 divisor is 1285280', () => {
    expect(divisibleTriangleNumber(167)).toBe(1385280);
});

test('first number with 374 divisor is 17907120', () => {
    expect(divisibleTriangleNumber(374)).toBe(17907120);
});

test('first number with 500 divisor is 76576500', () => {
    expect(divisibleTriangleNumber(500)).toBe(76576500);
});
