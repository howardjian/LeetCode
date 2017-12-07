// Given a roman numeral, convert it to an integer.
//
// Input is guaranteed to be within the range from 1 to 3999.

var romanToInt = function(s) {
  const dict = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
  };

  let result = dict[s[0]],
      prev = dict[s[0]];

  for(let i = 1; i < s.length; i++) {
    if(dict[s[i]] > prev) {
      result -= 2*prev;
    }
    result += dict[s[i]];
    prev = dict[s[i]];
  }
  return result;
}
