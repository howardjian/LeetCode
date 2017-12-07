// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
//
// Example:
//
// Input: "babad"
//
// Output: "bab"
//
// Note: "aba" is also a valid answer.
// Example:
//
// Input: "cbbd"
//
// Output: "bb"

const expandAroundCenter = (s, l, r) => {

  while(s[l] === s[r] && l >= 0 && r < s.length) {
    l--;
    r++;
  }
  return s.substring(l+1, r)
}

var longestPalindrome = function(s) {
  let max = '';

  for(let i = 0; i < s.length; i++) {
    const oddPalindrome = expandAroundCenter(s, i, i);
    const evenPalindrome = expandAroundCenter(s, i, i+1);
    max = max.length > oddPalindrome.length ? max : oddPalindrome;
    max = max.length > evenPalindrome.length ? max : evenPalindrome;
  }
  return max;
}
