function arrayChange(a) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] >= a[i + 1]) {
      let value = a[i] - a[i + 1] + 1;
      a.splice(i + 1, 1, a[i] + 1);
      count += value;
    }
  }
  return count;
}
