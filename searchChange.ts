function search(nums: number[], target: number): number {
  let len = nums.length;
  if (!len) return -1;
  if (len === 1) return nums[0] === target ? 0 : -1;
  let i = 0,
    j = len - 1,
    mid = Math.ceil(len / 2);
  while (i < j) {
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[0] <= nums[mid]) {
      if (nums[0] <= target && target <= nums[mid]) {
        j = mid - 1;
      } else {
        i = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[len - 1]) {
        i = mid + 1;
      } else {
        j = mid - 1;
      }
    }
  }
  return -1;
}

console.log(search([1, 1, 1, 2, 1, 1, 1, 1], 3));

// console.log(search([1, 2, 3, 4, 5, 6, 7, 8, 9], 12));
