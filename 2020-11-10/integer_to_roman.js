/**
 * @param {number} num
 * @return {string}
 */
let intToRoman = function(num) {
  let nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  let res = "";

  while (num > 0) {
    for (let i = 0; i < nums.length; i++) {
      if (num - nums[i] >= 0) {
        res += romans[i];
        num = num - nums[i];
        break;
      }
    }
  }
  return res;
};


document.getElementsByClassName("content")[0]
  .innerHTML = intToRoman(1994)
  .toString();