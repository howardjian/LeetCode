// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
//
// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"
// Write the code that will take a string and make this conversion given a number of rows:
//
// string convert(string text, int nRows);
// convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".

// n = 1  ==== normal writing
// n = 2
// pyaihrn
// aplsiig

// n = 3 === example

// n = 4
// p     i     n
// a   l s   i g
// y a   h r
// p     i

var convert = function(s, numRows) {
  if(numRows === 1) return s;
  const strArr = [];

  for(let j = 0; j < numRows; j++) {
    strArr.push([]);
  }

  let directionDown = true,
      currRow = 0;

  for(let i = 0; i < s.length; i++) {
    strArr[currRow].push(s[i]);
    if(directionDown) {
      if(numRows-currRow > 1) {
        currRow++;
      } else {
        currRow--;
        directionDown = false;
      }
    } else {
      if(currRow > 0) {
        currRow--;
      } else {
        currRow++;
        directionDown = true;
      }
    }
  }

  const resultStr = strArr.map(row => {
    if(row.length) {
      return row.reduce((acc2 = '', letter) => {
        return acc2 + letter
      });
    } else {
      return '';
    }
  })
  .reduce((acc = '', val) => acc + val);
  return resultStr;
};

console.log(convert('PAYPALISHIRING',4));
