function digitDegree(n) {
  let digits = 0;
  let value = n;
  while (value >= 10) {
    value = value
      .toString()
      .split("")
      .reduce((acc, cur) => (acc += parseInt(cur)), 0);
    digits++;
  }
  return digits;
}
