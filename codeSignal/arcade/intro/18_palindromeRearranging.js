function palindromeRearranging(s) {
  let obj = s.split("").reduce((acc, cur) => {
    if (acc[cur]) acc[cur]++;
    else acc[cur] = 1;
    return acc;
  }, {});

  let oneFound = false;
  if (s.length % 2 !== 0) {
    for (let prop in obj) {
      if (obj[prop] % 2 !== 0 && !oneFound) {
        oneFound = true;
        delete obj[prop];
      }
    }
  }
  for (let prop in obj) {
    if (obj[prop] % 2 !== 0) return false;
  }
  return true;
}
