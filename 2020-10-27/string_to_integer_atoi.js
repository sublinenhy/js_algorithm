/**
 * @param {string} s
 * @return {number}
 */
let myAtoi = function(s) {



  class automation {
    constructor() {
      this.sign = 1;
      this.ans = 0;
      this.state = "start";
      this.table = {
        start: ["start", "sign", "in_num", "end"],
        sign: ["end", "end", "in_num", "end"],
        in_num: ["end", "end", "in_num", "end"],
        end: ["end", "end", "end", "end"]
      }
    }

    get(c) {
      this.state = this.table[this.state][this.get_col(c)];
      if (this.state === "in_num") {
        this.ans = this.ans * 10 + parseInt(c);
        // this.ans = this.sign === 1 ? Math.min(this.ans, 2147483647) : Math.max(this.ans, -2147483648);
      }
      if (this.state === "sign") {
        this.sign = c === "+" ? 1 : -1;
      }
    }

    get_col(c) {
      if (c === " ") return 0;
      if (c === "+" || c === "-") return 1;
      if (parseInt(c) >= 0) return 2;
      return 3;
    }



  }

  let auto = new automation();
  let sArr = s.split("");
  for (let i = 0; i < sArr.length; i++) {
    auto.get(sArr[i]);
  }

  if (auto.sign * auto.ans > 2147483647) {
    return 2147483647;
  }else if (auto.sign * auto.ans < -2147483648) {
    return -2147483648;
  }else {
    return auto.sign * auto.ans;
  }


};


document.getElementsByClassName("content")[0]
  .innerHTML = myAtoi("-91283472332")
  .toString();