/**
 * @param {number[]} nums
 * @return {number}
 */
let maxSubArray = function(nums) {
  let pre = 0;
  let maxAns = nums[0];
  nums.forEach( num => {
    pre = Math.max(pre + num, num);
    maxAns = Math.max(pre, maxAns)
  })
  return maxAns;
};

document.getElementsByClassName("content")[0]
  .innerHTML = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
  .toString();