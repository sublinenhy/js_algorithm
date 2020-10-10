/**
 * @param {string} s
 * @return {string}
 */
let longestPalindrome = function(s) {
  let n = s.length;
  let dp = new Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(n);
  }
  let ans = "";
  for (let l = 0; l < n; l++) {
    for (let i = 0; i < n; i++) {
      let j = l + i;
      if (l === 0) {
        dp[i][j] = true;
      }else if (l === 1) {
        dp[i][j] = (s.charAt(i) === s.charAt(j));
      }else{
        dp[i][j] = (s.charAt(i) === s.charAt(j)) && dp[i+1][j-1];
      }
      if (dp[i][j] === true && l+1 > ans.length) ans = s.substring(i, j+1);
    }
  }
  return ans
};

console.log("fvvfvdvd"+longestPalindrome("a")+"###");
document.getElementsByClassName("content")[0]
  .innerHTML = longestPalindrome("abadbabd")
  .toString();