/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  const length = matrix.length;
  let mid = Math.floor(length / 2);
  for (let i = 0; i < mid; i++) {
    [matrix[i], matrix[length - 1 - i]] = [matrix[length - 1 - i], matrix[i]];
  }

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (j > i) {
        [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
      }
    }
  }
}

let testArr = [
  [1, 2],
  [3, 4]
];
rotate(testArr);
console.log(testArr);
