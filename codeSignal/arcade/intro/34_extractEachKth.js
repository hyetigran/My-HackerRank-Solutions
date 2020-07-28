function extractEachKth(a, k) {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    if ((i + 1) % k === 0) {
      continue;
    }
    result.push(a[i]);
  }
  return result;
}
