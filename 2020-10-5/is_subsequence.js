/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isSubsequence = function(s, t) {
  let tArr = t.split("");
  let sArr = s.split("");
  if (sArr.length === 0 && tArr.length === 0) return true;
  for (let i = 0; i < t.length; i++) {
    if (tArr[0] === sArr[0]) {
      tArr.shift();
      sArr.shift();
    }else {
      tArr.shift();
    }

    if (sArr.length === 0) return true;
  }
  return false;
};

document.getElementsByClassName("content")[0]
  .innerHTML = isSubsequence("", "")
  .toString();