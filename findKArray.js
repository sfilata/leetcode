/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let sum = 0
  let preArr = nums.map(item => {
    sum += item
    return sum
  })
  preArr = [0, ...preArr]
  let result = 0
  const length = nums.length
  preArr.forEach((item, index) => {
    const validLength = preArr.slice(index).filter(restItem => restItem - item === k).length
    console.log(item, preArr.slice(index), validLength)
    result += validLength
  })
  return result
};

console.log(subarraySum([3,4,7,2,-3,1,4,2], 7))
console.log(subarraySum([1,1,1], 2))
console.log(subarraySum([-1,-1,1], 0))