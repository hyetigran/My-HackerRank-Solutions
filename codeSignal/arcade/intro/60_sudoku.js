function sudoku(grid) {
  //there are nine 3x3 grids
  // need to check all values are present
  // need to check all rows and columns contain no duplicates

  // column var resets if mod 3 equals 0
  let col = 0;

  // row var adds by 3 when col resets
  let row = 0;
  let colSum = {};
  let rowSum = {};
  let subSum = {};
  for (let i = 0; i < grid.length; i++) {
    //check subgrid
    if (col % 9 === 0 && col !== 0) {
      col = 0;
      row += 3;
    }

    subSum[grid[row][col]] = 1;
    subSum[grid[row][col + 1]] = 1;
    subSum[grid[row][col + 2]] = 1;
    subSum[grid[row + 1][col]] = 1;
    subSum[grid[row + 1][col + 1]] = 1;
    subSum[grid[row + 1][col + 2]] = 1;
    subSum[grid[row + 2][col]] = 1;
    subSum[grid[row + 2][col + 1]] = 1;
    subSum[grid[row + 2][col + 2]] = 1;
    if (Object.keys(subSum).length !== 9) return false;
    subSum = {};
    col += 3;

    //check column
    colSum[grid[i][0]] = 1;
    colSum[grid[i][1]] = 1;
    colSum[grid[i][2]] = 1;
    colSum[grid[i][3]] = 1;
    colSum[grid[i][4]] = 1;
    colSum[grid[i][5]] = 1;
    colSum[grid[i][6]] = 1;
    colSum[grid[i][7]] = 1;
    colSum[grid[i][8]] = 1;
    if (Object.keys(colSum).length !== 9) return false;
    colSum = {};
    //check rows
    rowSum[grid[0][i]] = 1;
    rowSum[grid[1][i]] = 1;
    rowSum[grid[2][i]] = 1;
    rowSum[grid[3][i]] = 1;
    rowSum[grid[4][i]] = 1;
    rowSum[grid[5][i]] = 1;
    rowSum[grid[6][i]] = 1;
    rowSum[grid[7][i]] = 1;
    rowSum[grid[8][i]] = 1;
    if (Object.keys(rowSum).length !== 9) return false;
    rowSum = {};
  }
  return true;
}
