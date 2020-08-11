function arrayMaxConsecutiveSum(a, k) {
  let max = 0;

  for (let i = 0; i < a.length - k + 1; i++) {
    let value = 0;
    for (let j = 0; j < k; j++) {
      value += a[i + j];
    }
    if (max < value) {
      max = value;
    }
  }
  return max;
}
