function maxProduct(nums: number[]): number {
  let maxValue = nums[0],
    minValue = nums[0],
    result = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let preMi = minValue,
      preMx = maxValue;
    maxValue = Math.max(nums[i], nums[i] * preMx, nums[i] * preMi);
    minValue = Math.min(nums[i], nums[i] * preMi, nums[i] * preMx);
    result = Math.max(result, maxValue);
  }
  return result;
}

console.log(maxProduct([2, 3, -2, 4]));
console.log(maxProduct([-2, 0, -1]));
console.log(maxProduct([-2, 3, -4]));
console.log(maxProduct([-3, -1, -1]));
console.log(maxProduct([0, 2]));
console.log(maxProduct([-4, -3, -2]));
