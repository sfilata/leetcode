/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
  const n = s.length;
  let res = '';
  const dp = Array.from(new Array(n), () => new Array(n).fill(0));
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      dp[i][j] = s[i] == s[j] && (j - i < 2 || dp[i + 1][j - 1]);
      if (dp[i][j] && j - i + 1 > res.length) {
        res = s.substring(i, j + 1);
      }
    }
  }
  return res;
};

console.log(longestPalindrome('acvfca'));
console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));
