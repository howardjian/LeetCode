// Write a function to find the longest common prefix string amongst an array of strings.


var longestCommonPrefix = function(strs) {
  let result = '',
      minLength = Number.POSITIVE_INFINITY,
      idx;
      bool = true;

  strs.map(str => str.length).forEach((length, i) => {
    if(length < minLength) {
      minLength = length;
      idx = i;
    }
  });

  if(minLength === Number.POSITIVE_INFINITY || !minLength) return result;

  for(let i = 0; i < minLength; i++) {
    const currentLetter = strs[idx][i];
    strs.forEach(str => {
      if(str[i] !== currentLetter) {
        bool = false;
      }
    });
    if(!bool) {
      return result;
    } else {
      result += currentLetter;
    }
  }
  return result;
};
