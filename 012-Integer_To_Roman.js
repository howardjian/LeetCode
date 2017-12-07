// Given an integer, convert it to a roman numeral.

// Input is guaranteed to be within the range from 1 to 3999.

var intToRoman = function(num) {
    const dict = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M'
    }

    const valsToCheck = Object.keys(dict);
    let result = '';

    for(let i = valsToCheck.length-1; i >= 0; i--) {
      while(num >= +valsToCheck[i]) {
        result += dict[valsToCheck[i]];
        num -= valsToCheck[i];
      }
    }

    return result;
};
