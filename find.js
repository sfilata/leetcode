/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  const length = nums.length
  const flag = Math.floor(length / 2)

  if (nums[flag] === target) {
    return flag
  } else if (nums[flag] < target) {
    if (nums.length === 1) return flag + 1
    return flag + searchInsert(nums.slice(flag), target)
  } else {
    if (nums.length === 1) return flag - 1 < 0 ? 0 : flag - 1
    return searchInsert(nums.slice(0, flag), target)
  }
};