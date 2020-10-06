/**
 * @param {number} n
 * @return {number}
 */
let climbStairs = function(n) {
  let f_0 = 1;
  let f_1 = 1;
  let fi = 0;
  for( let i = 2; i <= n; i++) {
    fi = f_0 + f_1;
    f_0 = f_1;
    f_1 = fi
  }
  if( n ===1 ) return 1;
  return fi
};

document.getElementsByClassName("content")[0]
  .innerHTML = climbStairs(5)
  .toString();