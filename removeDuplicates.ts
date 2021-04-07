function removeDuplicates(nums: number[]): number {
  for (let i: number = nums.length - 2; i >= 0; i--) {
    if (nums[i] === nums[i + 1]) {
      nums[i + 1] = -1;
    }
  }
  return 5;
}

const input = [1, 1, 1, 2, 2, 3];
console.log(removeDuplicates(input));
console.log(input);
