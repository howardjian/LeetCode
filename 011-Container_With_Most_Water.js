// Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.
//
// Note: You may not slant the container and n is at least 2.

var maxArea = function(height) {
  let left = 0,
      right = height.length-1,
      max = 0;

  while(left < right) {
    const curr = (right - left) * Math.min(height[right], height[left]);
    max = Math.max(max, curr);
    if(height[right] >= height[left]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
};