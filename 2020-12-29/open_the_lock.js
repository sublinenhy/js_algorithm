/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
let openLock = function(deadends, target) {

  let plusOne = function (s, j) {
    let sArr = s.split("");
    if (sArr[j] === "9") {
      sArr[j] = "0";
    } else {
      sArr[j] = parseInt(sArr[j]) + 1;
      sArr[j] = sArr[j] + "";
    }
    return sArr.join("")
  }

  let minusOne = function (s, j) {
    let sArr = s.split("");
    if (sArr[j] === "0") {
      sArr[j] = "9";
    } else {
      sArr[j] = parseInt(sArr[j]) - 1;
      sArr[j] = sArr[j] + "";
    }
    return sArr.join("")
  }



};

document.getElementsByClassName("content")[0]
  .innerHTML = permute([1,2,5])
  .toString();
