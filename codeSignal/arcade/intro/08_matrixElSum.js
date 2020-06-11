function matrixElementsSum(matrix) {
  let sum = matrix[0].reduce((acc, cur) => (acc += cur), 0);
  let badFloor = [1, 1, 1, 1];

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i - 1][j] === 0) {
        badFloor[j] = 0;
      }
      if (badFloor[j] === 1) {
        sum += matrix[i][j];
      }
    }
  }
  return sum;
}
