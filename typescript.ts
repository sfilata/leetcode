function twoSum(nums: number[], target: number): number[] {
  let dict: { [key: string]: number } = {};
  for (let i = 0; i < nums.length; i++) {
    if (!dict.hasOwnProperty(nums[i])) {
      dict[target - nums[i]] = i;
    } else {
      return [dict[nums[i]], i];
    }
  }
  return [];
}

console.log(twoSum([3, 2, 4], 6));

export { twoSum };
