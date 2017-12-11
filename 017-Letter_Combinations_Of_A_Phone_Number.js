// Given a digit string, return all possible letter combinations that the number could represent.
//
// A mapping of digit to letters (just like on the telephone buttons) is given below.

const getLettersOfDigit = (digit) => {
  const map = {
    1 : ['*'],
    2 : ['a', 'b', 'c'],
    3 : ['d', 'e', 'f'],
    4 : ['g', 'h', 'i'],
    5 : ['j', 'k', 'l'],
    6 : ['m', 'n', 'o'],
    7 : ['p', 'q', 'r', 's'],
    8 : ['t', 'u', 'v'],
    9 : ['w', 'x', 'y', 'z'],
    0 : []
  }
  return map[digit];
}

const getComboOfDigits = (digits, cache, index = 0, currentCombo = '') => {
  if(digits.length === index) {
    cache.push(currentCombo);
    return;
  }

  const letters = getLettersOfDigit(digits[index]);

  for(let i = 0; i < letters.length; i++) {
    getComboOfDigits(digits, cache, index+1, currentCombo + letters[i]);
  }
}

var letterCombinations = function(digits) {
  if(digits.length === 0) return [];
  const output = [];
  getComboOfDigits(digits, output);
  return output;
};
