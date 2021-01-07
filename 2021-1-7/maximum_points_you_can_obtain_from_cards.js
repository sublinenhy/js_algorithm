/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
let maxScore = function(cardPoints, k) {
  let right = k - 1;
  let left = cardPoints.length;
  let res = 0;
  while (left >= cardPoints.length - k) {
    let sum = 0;
    for (let i = 0; i <= right; i++) {
      sum += cardPoints[i];
    }
    for (let j = cardPoints.length - 1; j >= left; j--) {
      sum += cardPoints[j];
    }
    right--;
    left--;
    res = Math.max(res, sum)
  }

  return res
};
module.exports = maxScore

