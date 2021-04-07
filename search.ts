function search(nums: number[], target: number): boolean {
  const len = nums.length;
  if (!len) return false;
  if (len === 1) return nums[0] === target;
  let mid = Math.floor(nums.length / 2);
  if (nums[mid] === target) return true;
  if (nums[0] === nums[len - 1] && nums[0] !== target)
    return search(nums.slice(1, -1), target);
  const leftArr = nums.slice(0, mid);
  const rightArr = nums.slice(mid + 1);
  if (hasOrder(leftArr)) {
    if (leftArr[0] <= target && target <= leftArr[leftArr.length - 1]) {
      return normalSearch(leftArr, target);
    } else {
      return search(rightArr, target);
    }
  } else {
    if (rightArr[0] <= target && target <= rightArr[rightArr.length - 1]) {
      return normalSearch(rightArr, target);
    } else {
      return search(leftArr, target);
    }
  }
}

function normalSearch(nums: number[], target: number): boolean {
  const len = nums.length;
  if (!len) return false;
  if (len === 1) return nums[0] === target;
  let mid = Math.floor(nums.length / 2);
  if (nums[mid] === target) return true;
  if (nums[mid] > target) return search(nums.slice(0, mid), target);
  return search(nums.slice(mid + 1), target);
}

function hasOrder(nums: number[]): boolean {
  let len = nums.length;
  if (len <= 1) return true;
  return nums[0] <= nums[len - 1];
}

console.log(search([1, 2, 1], 2));
