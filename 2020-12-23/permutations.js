/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let permute = function(nums) {
  let resList = [];
  let route = [];

  function backtrack(nums, route) {
    if (route.length === nums.length) {
      let res = [...route]
      resList.push(res);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (route.indexOf(nums[i]) >= 0) continue;
      route.push(nums[i]);
      backtrack(nums, route);
      route.pop();
    }
  }

  backtrack(nums, route);
  return resList;

};


document.getElementsByClassName("content")[0]
  .innerHTML = permute([1,2,5])
  .toString();
