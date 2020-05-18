function differentSquares(matrix) {
  let cs = 0;
  let ce = matrix[0].length;
  let rs = 0;
  let re = matrix.length;
  let count = 0;
  let visited = {};

  while (cs < ce && rs < re - 1) {
    cs = 0;
    for (let i = 0; i < ce - 1; i++) {
      let prop =
        matrix[rs][i].toString() +
        matrix[rs][i + 1].toString() +
        matrix[rs + 1][i].toString() +
        matrix[rs + 1][i + 1].toString();
      if (!visited.hasOwnProperty(prop)) {
        visited[prop] = 1;
        count++;
      }
      cs++;
    }
    rs++;
  }

  return count;
}
