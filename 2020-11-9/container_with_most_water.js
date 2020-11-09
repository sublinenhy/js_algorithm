/**
 * @param {number[]} height
 * @return {number}
 */
let maxArea = function(height) {
  let l = 0;
  let r = height.length - 1;
  let s = 0;

  while (l < r) {
    s = Math.max(s, Math.min(height[l], height[r]) * (r -l));
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }

  return s;
};


document.getElementsByClassName("content")[0]
  .innerHTML = maxArea([1,8,6,2,5,4,8,3,7])
  .toString();