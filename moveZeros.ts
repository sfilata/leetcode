/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let p1 = 0,
    p2 = 0;
  while (p2 < nums.length) {
    if (nums[p2] !== 0) {
      if (nums[p1] === 0) [nums[p1], nums[p2]] = [nums[p2], nums[p1]];
      p1++;
    }
    p2++;
  }
}

const arr = [0, 1, 0, 3, 12];
moveZeroes(arr);
console.log(arr);
