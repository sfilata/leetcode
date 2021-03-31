/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  if (!nums.length) return [[]];
  nums.sort((a, b) => a - b);
  const formalArr = nums.slice(0, -1);
  const upperResult = subsetsWithDup(formalArr);
  return [
    ...upperResult.filter(
      (item) => item[item.length - 1] !== nums[nums.length - 1]
    ),
    ...upperResult.map((item) => {
      return [...item, nums[nums.length - 1]];
    }),
  ];
};

console.log(subsetsWithDup([1, 1, 2, 2, 3]));

// module.exports = subsetsWithDup;
export default subsetsWithDup;
