/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let firstColumnArr = matrix.map((item) => item[0]);
  const targetArrIndex = searchRowIndex(firstColumnArr, target);
  return searchColumn(matrix[targetArrIndex], target).result;
};

function searchColumn(arr, target) {
  if ((arr.length === 1 && arr[0] !== target) || arr.length === 0) {
    return { index: 0, result: false };
  }
  const index = Math.floor(arr.length / 2);
  if (arr[index] === target) return { index, result: true };
  else if (arr[index] > target)
    return searchColumn(arr.slice(0, index), target);
  else return searchColumn(arr.slice(index + 1, arr.length), target);
}

function searchRowIndex(arr, target) {
  if (!arr.length) return -1;
  if (arr.length === 1) return 0;
  const index = Math.floor(arr.length / 2);
  if (arr[index] === target) return index;
  else if (arr[index] > target)
    return searchRowIndex(arr.slice(0, index), target);
  else return searchRowIndex(arr.slice(index, arr.length), target) + index;
}

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    22
  )
);

// console.log(searchRowIndex([1, 10, 23], 11));

module.exports = searchMatrix;
