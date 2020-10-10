/**
 * @param {string} s
 * @return {number}
 */
//应该用new Set（）做而不是对象
let lengthOfLongestSubstring = function(s) {
  let sArr = s.split("");
  let r = s.length >= 1 ? 1 : 0;
  let map = {};
  for (let i = 0; i < sArr.length; i++) {
    for (let j = i; j < sArr.length; j++) {
      if (map.hasOwnProperty(sArr[j])) {
        r = Object.getOwnPropertyNames(map).length > r ? Object.getOwnPropertyNames(map).length : r;
        map = {};
        break;
      }else {
        map[sArr[j]] = sArr[j];
      }
    }
  }
  return r;
};

document.getElementsByClassName("content")[0]
  .innerHTML = lengthOfLongestSubstring("pwwkew")
  .toString();