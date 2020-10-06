/**
 * @param {number[]} nums
 */
let NumArray = function(nums) {
 this.sum = [nums[0]];
 for (let i = 1; i < nums.length; i++) {
   this.sum[i] = this.sum[i-1] + nums[i];
 }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  if ( i === 0) return  this.sum[j]
  return this.sum[j] - this.sum[i-1]
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
let nums = [-2, 0, 3, -5, 2, -1]
let obj = new NumArray(nums)

document.getElementsByClassName("content")[0]
  .innerHTML = obj.sumRange(0, 2)
  .toString();