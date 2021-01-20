const min = function (array) {
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
    }
  }
  return min;
};

/**
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalSquare = function (matrix) {
  const yLimit = matrix.length;
  let result = 0;
  for (let y = 0; y < yLimit; y++) {
    const row = matrix[y];
    const xLimit = row.length;
    for (let x = 0; x < xLimit; x++) {
      if (+matrix[y][x] === 1) {
        result = result === 0 ? 1 : result;
        if (x > 0 && y > 0) {
          matrix[y][x] = min([+matrix[y - 1][x], +matrix[y][x - 1], +matrix[y - 1][x - 1]]) + 1;
          result = result >= matrix[y][x] ? result : +matrix[y][x];
        }
      }
    }
  }
  return result * result;
};

const example = [
  ['1', '0', '1', '0', '0'],
  ['1', '0', '1', '1', '1'],
  ['1', '1', '1', '1', '1'],
  ['1', '0', '0', '1', '0']];
console.log(maximalSquare(example));
