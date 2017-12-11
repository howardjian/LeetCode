// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
//
// For example, given n = 3, a solution set is:
//
// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]

var generateParenthesis = function(n) {
  const output = [];

  const generateStrings = (curr = '', left = 0, right = 0) => {
    if(left === n && right === n) {
      output.push(curr);
      return;
    }
    if(left < n) {
      generateStrings(curr + '(', left+1, right);
    }
    if(right < left) {
      generateStrings(curr + ')', left, right+1);
    }
  }
  generateStrings();
  return output;
}
