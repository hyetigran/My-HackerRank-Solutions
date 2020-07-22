function absoluteValuesSumMinimization(a) {
  let min = 1000000000;
  let result;
  for (let i = 0; i < a.length; i++) {
    let value = 0;
    for (let j = 0; j < a.length; j++) {
      value += Math.abs(a[j] - a[i]);
    }
    if (min > value) {
      min = value;
      result = a[i];
    }
  }
  return result;
}
