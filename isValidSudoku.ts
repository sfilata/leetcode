function isValidSudoku(board: string[][]): boolean {
  const rowSet: any[] = Array.from({ length: 9 }).map(() => new Set());
  const columnSet: any[] = Array.from({ length: 9 }).map(() => new Set());
  const sudokuSet: any[] = Array.from({ length: 9 }).map(() => new Set());
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] !== '.') {
        if (
          rowSet[i].has(board[i][j]) ||
          columnSet[j].has(board[i][j]) ||
          sudokuSet[judgeSet(i, j)].has(board[i][j])
        ) {
          return false;
        }
        rowSet[i].add(board[i][j]);
        columnSet[j].add(board[i][j]);
        sudokuSet[judgeSet(i, j)].add(board[i][j]);
      }
    }
  }
  return true;
}

function judgeSet(row: number, column: number): number {
  function judgePos(n: number) {
    if (n < 3) {
      return 0;
    } else if (n > 5) {
      return 2;
    }
    return 1;
  }
  const rowPos = judgePos(row);
  const columnPos = judgePos(column);
  return parseInt(`${rowPos}${columnPos}`, 3);
}

console.log(
  isValidSudoku([
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9']
  ])
);

console.log(
  isValidSudoku([
    ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9']
  ])
);
