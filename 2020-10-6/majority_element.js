/**
 * @param {number} N
 * @return {boolean}
 */
let divisorGame = function(N) {
  return N % 2 === 0;
};

document.getElementsByClassName("content")[0]
  .innerHTML = minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])
  .toString();