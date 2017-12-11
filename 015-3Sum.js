// Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
//
// Note: The solution set must not contain duplicate triplets.

// For example, given array S = [-1, 0, 1, 2, -1, -4],
//
// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

var threeSum = function(nums) {
  const result = [];
  if(nums.length < 3) return result;
  const sortedNums = nums.sort((a,b) => a-b);

  for(let i = 0; i < sortedNums.length ; i++) {
    let left = i+1,
        right = sortedNums.length-1;
    if(i === 0 || sortedNums[i] !== sortedNums[i-1]) {
      while(left < right) {
        let temp = sortedNums[i] + sortedNums[left] + sortedNums[right];
        if(temp > 0) {
          right--;
        } else if(temp < 0) {
          left++;
        } else {
          const triplet = [sortedNums[i], sortedNums[left], sortedNums[right]];
          result.push(triplet);
          left++;
          right--;
          while(sortedNums[left] === sortedNums[left-1] && left-1 !== i) {
            left++;
          }
        }
      }
    }
  }
  return result;
};
