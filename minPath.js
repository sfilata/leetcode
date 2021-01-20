/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = function (grid) {
  const row = grid.length;
  const column = grid[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (i === 0 && j === 0) continue;
      if (i === 0 && j > 0) {
        grid[i][j] += grid[i][j - 1];
      } else if (j === 0 && i > 0) {
        grid[i][j] += grid[i - 1][j];
      } else {
        grid[i][j] += Math.min(grid[i][j - 1], grid[i - 1][j]);
      }
    }
  }
  return grid[row - 1][column - 1];
};

const inputArr = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];
console.log(minPathSum(inputArr));
