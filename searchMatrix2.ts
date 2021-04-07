function searchMatrix(matrix: number[][], target: number): boolean {
  const y = matrix.length,
    x = matrix[0].length;
  for (let i = 0, j = y - 1; i < x && j >= 0; ) {
    if (matrix[j][i] === target) return true;
    else if (target > matrix[j][i]) {
      i++;
    } else {
      j--;
    }
  }
  return false;
}
