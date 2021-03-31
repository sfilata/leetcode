function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    if (nums.lastIndexOf(target - nums[i]) > i) {
      return [i, nums.lastIndexOf(target - nums[i])];
    }
  }
  return [];
}

console.log(twoSum([3, 2, 4], 6));

export { twoSum };
