// Determine whether an integer is a palindrome. Do this without extra space.

// STRING ARRAY METHOD
var isPalindrome = function(x) {
  return x === +x.toString().split('').reverse().join('');
}
