/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
let coinChange = function(coins, amount) {
  let dp = [0];
  for (let i = 1; i < amount + 1; i++) {
    dp[i] = Infinity
    for (let coin of coins) {
      if (i - coin < 0) continue;
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]
};


document.getElementsByClassName("content")[0]
  .innerHTML = coinChange([1,2,5], 25)
  .toString();
