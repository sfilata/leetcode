/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = function (x, n) {
  return n >= 0 ? quickPow(x, n) : 1 / quickPow(x, -n);
};

var quickPow = function (x, n) {
  let ans = 1.0;
  let x_contribute = x;
  while (n > 0) {
    if (n % 2 === 1) {
      ans *= x_contribute;
    }
    x_contribute *= x_contribute;
    n = Math.floor(n / 2);
  }
  return ans;
};
