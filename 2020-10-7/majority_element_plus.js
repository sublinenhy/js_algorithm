/**
 * @param {number[]} nums
 * @return {number}
 */
let majorityElement = function(nums) {
  let vote = 0;
  let winner = -1;
  if (nums.length === 0) return -1;
  nums.forEach(num => {
    if (vote === 0) winner = num;

    if (winner === num) {
      vote++;
    }else {
      vote--;
    }
  })

  let count = 0
  nums.forEach(num => {
    if (num === winner) count++;
  })

  if (count > nums.length/2) {
    return winner;
  }else {
    return -1;
  }


};

document.getElementsByClassName("content")[0]
  .innerHTML = majorityElement([1, 2, 2, 1, 1, 4])
  .toString();