/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = function (nums) {
  let product = 1;
  let arr = nums.slice(0);
  let result = nums[0];
  while (arr.length) {
    product = 1;
    arr.forEach((item) => {
      product *= item;
      console.log(item, result, product, arr);
      result = result < product ? product : result;
    });
    arr = arr.slice(1);
    product = 1;
  }
  return result === -0 ? 0 : result;
};

console.log(maxProduct([-2]));
