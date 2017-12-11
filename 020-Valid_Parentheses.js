// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
// The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.


var isValid = function(s) {
  const stack = [];
  const map = {
    '}' : '{',
    ']' : '[',
    ')' : '('
  }

  for(let i = 0; i < s.length; i++) {
    if(!map[s[i]]) {
      stack.push(s[i]);
    } else {
      const lastOpenParens = stack.pop();
      if(map[s[i]] !== lastOpenParens) {
        return false;
      }
    }
  }
  return stack.length ? false : true
}
