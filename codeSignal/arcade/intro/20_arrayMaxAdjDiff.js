function arrayMaximalAdjacentDifference(a) {
  let maxDiff = 0;

  for (let i = 0; i < a.length; i++) {
    let diff = Math.abs(a[i] - a[i + 1]);
    if (maxDiff < diff) {
      maxDiff = diff;
    }
  }
  return maxDiff;
}
