function rotateImage(matrix) {
  const N = matrix.length - 1;

  const result = matrix.map((row, i) => row.map((val, j) => matrix[N - j][i]));
  matrix.length = 0;
  matrix.push(...result);
  return matrix;
}
