/**
 * @param {number[]} nums
 * @return {number}
 */
let majorityElement = function(nums) {

  let countInRange = (countNums, num, lo, hi) => {
    let count = 0;
    for (let i = lo; i <= hi; i++) {
      if (countNums[i] === num) count++;
    }
    return count;
  }

  let majorityElementRec = (recNums, lo, hi) => {
    if (lo === hi) return recNums[lo];

    let mid = (hi - lo) / 2;
    mid = Math.floor( mid ) + lo;
    let left = majorityElementRec(recNums, lo, mid);
    let right = majorityElementRec(recNums, mid + 1, hi);

    if (left === right) return left;

    let leftCount = countInRange(recNums, left, lo, hi);
    let rightCount = countInRange(recNums, right, lo, hi);

    return leftCount > rightCount ? left : right;
  }

  return majorityElementRec(nums, 0, nums.length-1);

};

document.getElementsByClassName("content")[0]
  .innerHTML = majorityElement([1, 2, 2, 1, 1, 4])
  .toString();