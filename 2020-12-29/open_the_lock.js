/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
const {test} = require("@jest/globals");
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

  let q = [];
  let deads = new Set();
  for (let s in deadends) {
    deads.add(deadends[s])
  }

  let visited = new Set();
  let step = 0;

  q.push("0000");
  visited.add("0000");

  while (q.length !== 0) {
    let sz = q.length;

    for (let i = 0; i < sz; i++) {
      let cur = q.shift();

      if (deads.has(cur)) continue;
      if (cur === target) return step;

      for (let j = 0; j < 4; j++) {
        let up = plusOne(cur, j);
        let down = minusOne(cur, j);

        if (!visited.has(up)) {
          q.push(up);
          visited.add(up)
        }
        if (!visited.has(down)) {
          q.push(down);
          visited.add(down);
        }
      }
    }

    step++;
  }

  return -1;
};

module.exports = openLock

