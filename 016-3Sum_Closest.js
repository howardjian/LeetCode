// Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. Return the sum of the three integers. You may assume that each input would have exactly one solution.
//
//     For example, given array S = {-1 2 1 -4}, and target = 1.
//
//     The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

var threeSumClosest = function(nums, target) {
  let closestDiff = Number.POSITIVE_INFINITY;

  const sortedNums = nums.sort((a,b) => a-b);

  for(let i = 0; i < sortedNums.length; i++) {
    if(i === 0 || sortedNums[i] !== sortedNums[i-1]) {
      let left = i+1,
          right = sortedNums.length-1;
      while(left < right) {
        const sum = sortedNums[i] + sortedNums[left] + sortedNums[right];
        if(Math.abs(sum - target) < Math.abs(closestDiff - target)) {
          closestDiff = sum;
        }
        if(sum < target) {
          left++;
        } else if (sum > target) {
          right--;
        } else {
          return closestDiff;
        }
      }
    }
  }
  return closestDiff
};
