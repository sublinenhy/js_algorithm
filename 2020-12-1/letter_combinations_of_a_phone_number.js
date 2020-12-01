/**
 * @param {string} digits
 * @return {string[]}
 */
let letterCombinations = function(digits) {
  let phoneMap = new Map(
    ["2", ["a", "b", "c"]],
    ["3", ["d", "e", "f"]],
    ["4", ["g", "h", "i"]],
    ["5", ["j", "k", "l"]],
    ["6", ["m", "n", "o"]],
    ["7", ["p", "q", "r", "s"]],
    ["8", ["t", "u", "v"]],
    ["9", ["w", "x", "y", "z"]]
  )

  let digitsArr = digits.split();
  let res = phoneMap.get(digitsArr[0]);
  for(let i = 0; i < digitsArr.length; i++) {
    strArr = phoneMap.get(digitsArr[i])
    for(let j = 0; j < strArr.length; j++) {
      res[j] += strArr[j];
    }
  }
};


document.getElementsByClassName("content")[0]
  .innerHTML = threeSumClosest([0,1,2], 3)
  .toString();