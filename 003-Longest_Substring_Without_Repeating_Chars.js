// Given a string, find the length of the longest substring without repeating characters.
//
// Examples:
//
// Given "abcabcbb", the answer is "abc", which the length is 3.
//
// Given "bbbbb", the answer is "b", with the length of 1.
//
// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

var lengthOfLongestSubstring = function(s) {
    // edge case
    if(s.length <= 1) return s.length;

    let index = 0,
        currStr = '',
        max = 0,
        uniqueLetters = {};

    while(index < s.length) {
        if(uniqueLetters[s[index]]) {
            if(max < currStr.length) {
                max = currStr.length;
            }
            currStr = currStr.substring(currStr.indexOf(s[index]) + 1);
        }

        currStr += s[index];
        uniqueLetters[s[index]] = s[index];
        index++;
    }
    if(currStr.length > max) max = currStr.length;
    return max;

};
