/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if ( prices[i] < minPrice ) {
      minPrice = prices[i];
    }else if ( maxProfit < prices[i] - minPrice) {
      maxProfit = prices[i] - minPrice;
    }
  }

  return maxProfit

};

document.getElementsByClassName("content")[0]
  .innerHTML = maxProfit([7, 1, 5, 3, 6, 4])
  .toString();