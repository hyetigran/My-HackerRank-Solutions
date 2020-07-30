function differentSymbolsNaive(s) {
  let obj = s.split("").reduce((acc, cur) => {
    acc[cur] = 1;
    return acc;
  }, {});
  return Object.keys(obj).length;
}
