/**
 * @param {string} digits
 * @return {string[]}
 */
let letterCombinations = function(digits) {
  if (digits.length === 0 ) return []
  let digitMap = new Map([
    ["2", "abc"],
    ["3", "def"],
    ["4", "ghi"],
    ["5", "jkl"],
    ["6", "mno"],
    ["7", "pqrs"],
    ["8", "tuv"],
    ["9", "wxyz"]
  ])
  let res = []
  let digitArr = digits.split("")
  let chosenArr = []
  for(let i = 0; i < digitArr.length; i++) {
    let s = digitMap.get(digitArr[i])
    chosenArr.push(s.split(""))
  }

  let backtrack = function(chosen, track) {
    if(track.length === digits.length) {
      res.push(track.join(""))
      return
    }
    if (chosen.length === 0) return;
    let chosenA = chosen.shift()
    chosenA.forEach((s) => {
      track.push(s)
      backtrack(chosen, track)
      track.pop(s)
    })
    chosen.unshift(chosenA)
  }
  let track = []
  backtrack(chosenArr, track)
  return res
};

module.exports = letterCombinations

