//
// Given a 32-bit signed integer, reverse digits of an integer.
//
// Example 1:
//
// Input: 123
// Output:  321
// Example 2:
//
// Input: -123
// Output: -321
// Example 3:
//
// Input: 120
// Output: 21

// NOTE: max int = 2 ^ 31 or min int = - 2 ^31

// STRING ARRAY METHOD
// var reverse = function(x) {
//   let stringified = x.toString().split('');
//   if(Number.isNaN(+stringified[0])) {
//     stringified = +(stringified[0] + stringified.slice(1).reverse().join(''));
//   } else {
//     stringified = +stringified.reverse().join('');
//   }
//
//   return Math.abs(stringified) >= Math.pow(2,31) ? 0 : stringified;
// }

// NUMERIC SOLUTION

var reverse = function(x) {
  let reverseNum = 0,
      power;
      len = x >= 0 ? x.toString().length : x.toString().length-1;

  if(x !== 0) {
    power = len-1;
    while(Math.abs(x) > 0) {
      reverseNum += (x % 10)*Math.pow(10, power);
      if(x > 0) {
        x = Math.floor(x/10);
      } else {
        x = Math.ceil(x/10);
      }
      power--;
    }
  } else {
    return 0;
  }

  return Math.abs(reverseNum) >= Math.pow(2,31) ? 0 : reverseNum;
}

console.log(reverse(-321));
