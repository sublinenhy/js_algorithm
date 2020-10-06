/**
 * @param {number[]} nums
 * @return {number}
 */
let rob = function(nums) {
  let dp = [];
  if (nums.length === 0) return 0;
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i-1], dp[i-2]+nums[i])
  }
  if (nums.length === 1) return dp[0];
  else if (nums.length === 2) return dp[1];
  else return dp[nums.length-1];
};

document.getElementsByClassName("content")[0]
  .innerHTML = rob([1, 2, 3, 1])
  .toString();