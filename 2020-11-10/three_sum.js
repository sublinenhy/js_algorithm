/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let threeSum = function(nums) {
  let n = nums.length;
  function compare(a,b){
    return a - b;
  }
  nums.sort(compare);
  let res =[[]];

  for (let i = 0; i < n; i++) {
    let k = n - 1;
    if (i === 0 || nums[i] !== nums[i - 1]) {
      for (let j = i + 1; j < n; j++) {
        if ((j === i + 1 || nums[j] !== nums[j - 1]) && j < k) {
          while (nums[i] + nums[j] + nums[k] > 0) k--;
          if (j >= k) break;
          if (nums[i] + nums[j] + nums[k] === 0) res.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }
  if (res.length > 1) {
    res.shift();
  } else {
    res = [];
  }
  return res
};


document.getElementsByClassName("content")[0]
  .innerHTML = threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4])
  .toString();