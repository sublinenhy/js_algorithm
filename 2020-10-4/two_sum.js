/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums, target) {
  for (let i=0; i < nums.length; i++) {
    let a = target - nums[i];
    for (let j=0; j < nums.length; j++) {
      if (a===nums[j] && j!==i) return [i,j];
    }
  }
};

document.getElementsByClassName("content")[0].innerHTML = twoSum([2, 7, 11, 15], 18).toString();