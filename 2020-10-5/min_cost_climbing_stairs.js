/**
 * @param {number[]} cost
 * @return {number}
 */
let minCostClimbingStairs = function(cost) {
  let f1 = 0;
  let f2 = 0;
  let fi = 0;
  for (let i = 0; i < cost.length; i++) {
    fi = cost[i] + Math.min(f1, f2);
    f2 = f1;
    f1 = fi
  }
  return Math.min(f1, f2);
};

document.getElementsByClassName("content")[0]
  .innerHTML = minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])
  .toString();