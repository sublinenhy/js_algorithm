/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
let coinChange = function(coins, amount) {
  let memo = [];
  let dp = function(n) {
    if(memo[n] !== undefined) return memo[n];
    if (n === 0) return 0;
    if (n < 0) return -1;
    let res = Infinity
    for (let i = 0; i < coins.length; i++) {
      let subProblem = dp(n - coins[i]);
      if (subProblem === -1) continue;
      res = Math.min(res, subProblem + 1);
    }
    memo[n] = res !== Infinity ? res : -1
    return memo[n]
  }

  return dp(amount)
};


document.getElementsByClassName("content")[0]
  .innerHTML = coinChange([1,2,5], 100)
  .toString();
