function shapeArea(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result += (i - 1) * 4;
  }
  return result;
}
