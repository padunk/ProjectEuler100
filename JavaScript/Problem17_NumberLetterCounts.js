/* If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to given limit inclusive were written out in words, how many letters would be used?

NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
*/

const inWordsNumbering = { 3: 'hundred', 4: 'thousand' };
const inWordsLetter = [
    {
        0: '',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
    },
    {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    },
    {
        2: 'twenty',
    },
    {
        3: 'thirty',
    },
    {
        4: 'forty',
    },
    {
        5: 'fifty',
    },
    {
        6: 'sixty',
    },
    {
        7: 'seventy',
    },
    {
        8: 'eighty',
    },
    {
        9: 'ninety',
    },
];

function numberLetterCounts(limit) {
    let count = 0;

    for (let i = 1; i <= limit; i++) {
        let iString = String(i);
            let a = inWordsNumbering[iString.length]; // hundred or thousand
            if (!a) {
                count += lessThan100(iString);
            } else {
                count = count + inWordsLetter[0][iString[0]].length + a.length;
                if (i % 100 !== 0) count += 3; // for 'and' word
                let b = iString.slice(1);
                count += lessThan100(b);
            }
        // count += '\n';
    }
    console.log(count);
    return count;
}

function lessThan100(n) {
    let result = 0;

    if (parseInt(n, 10) < 10) {
        result += inWordsLetter[0][parseInt(n, 10)].length;
    } else if (n[0] === '1') {
        // < 20
        result += inWordsLetter[1][n].length;
    } else {
        // >= 20
        result += inWordsLetter[n[0]][n[0]].length;
        inWordsLetter[0][n[1]]
            ? (result += inWordsLetter[0][n[1]].length)
            : 0;
    }
    return result;
}

numberLetterCounts(1000);
