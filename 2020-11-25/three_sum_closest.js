/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let threeSumClosest = function(nums, target) {
  nums = nums.sort((a, b) => {return a - b})
  let distance = Infinity
  let res = Infinity
  for (let i = 0; i < nums.length; i++) {
    let k = nums.length - 1;
    for (let j = i+1; j < nums.length && j < k;) {
      let newDistance = Math.abs(target - nums[i] - nums[j] - nums[k]);
      if (distance > newDistance) {
        res = nums[i] + nums[j] + nums[k];
        distance = newDistance;
      }
      if (nums[i] + nums[j] + nums[k] > target) {
        k--;
      } else if (nums[i] + nums[j] + nums[k] === target) {
        return res;
      } else {
        j++
      }
    }
  }
  return res
};


document.getElementsByClassName("content")[0]
  .innerHTML = threeSumClosest([0,1,2], 3)
  .toString();