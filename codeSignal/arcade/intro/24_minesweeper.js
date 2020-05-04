function minesweeper(matrix) {
  const clone = (arr) => arr.map((el) => (Array.isArray(el) ? clone(el) : el));
  let result = clone(matrix);
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let count = 0;
      if (matrix[i - 1] !== undefined) {
        //check N
        if (matrix[i - 1][j] === true) count++;
        //check NW
        if (matrix[i - 1][j + 1] === true) count++;
        //check NE
        if (matrix[i - 1][j - 1] === true) count++;
      }
      if (matrix[i + 1] !== undefined) {
        //check SW
        if (matrix[i + 1][j + 1] === true) count++;
        //check S
        if (matrix[i + 1][j] === true) count++;
        //check SE
        if (matrix[i + 1][j - 1] === true) count++;
      }
      //check W
      if (matrix[i][j + 1] === true) count++;
      //check E
      if (matrix[i][j - 1] === true) count++;
      result[i][j] = count;
    }
  }
  return result;
}
