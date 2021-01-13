/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  for (let i = 0; i < numbers.length || numbers[i] > target; i++) {
    let index = find(numbers, target - numbers[i])
    if (index === i) {
      index = numbers[index + 1] === numbers[index] && index + 1
      index = numbers[index - 1] === numbers[index] && index - 1
    }
    if (typeof index === 'number' && index !== i) {
      return [i + 1, index + 1]
    }
  }
  return []
};

var find = function(nums, target) {
  const length = nums.length
  const flag = Math.floor(length / 2)

  if (nums[flag] === target) {
    return flag
  } else if (nums[flag] < target) {
    if (nums.length === 1) return 'none'
    return flag + find(nums.slice(flag), target)
  } else {
    if (nums.length === 1) return 'none'
    return find(nums.slice(0, flag), target)
  }
};


console.log(twoSum([0, 0, 3, 4], 0))
// console.log(find([2, 7, 11, 15], 13))