/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
let convert = function(s, numRows) {
  let isFullStack = true;
  let sArr = s.split("");
  let stack = [];
  while (sArr.length !== 0) {
    if (isFullStack) {
      let a = [];
      for (let i = 0; i < numRows; i++) {
        a.push(sArr.shift());
      }
      stack.push(a);
      isFullStack = false;
    } else {
      let a = [];
      for (let i = 0; i < numRows; i++) {
        if (i === 0 || i === numRows-1) {
          a.push(null)
        } else {
          a.push(sArr.shift());
        }
      }
      stack.push(a.reverse());
      isFullStack = true;
    }
  }

  let res = "";
  for (let k = 0; k < numRows; k++) {
    for (let j = 0; j < stack.length; j++) {
      if (stack[j][k] !== null && stack[j][k] !== undefined) {
        let r = stack[j][k];
        res += r;
      }
    }
  }
  return res
};


document.getElementsByClassName("content")[0]
  .innerHTML = convert("PAYPALISHIRING", 3)
  .toString();