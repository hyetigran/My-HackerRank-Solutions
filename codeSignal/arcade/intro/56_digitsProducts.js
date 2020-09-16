function digitsProduct(product) {
  const findFactors = (n) => {
    for (let i = 2; i < parseInt(Math.sqrt(n) + 1); i++) {
      if (n % i === 0) {
        return i;
      }
    }
    return false;
  };
  if (product === 0) return 10;

  let arr = [product];
  while (Math.max(...arr) > 9) {
    let factored = findFactors(Math.max(...arr));
    if (factored) {
      arr.push(factored);
      arr.push(Math.max(...arr) / factored);
      arr.splice(arr.indexOf(Math.max(...arr)), 1);
    } else {
      return -1;
    }
  }

  while ([...arr].filter((x) => x == 2).length > 2) {
    arr.splice(arr.indexOf(2), 1);
    arr.splice(arr.indexOf(2), 1);
    arr.splice(arr.indexOf(2), 1);
    arr.push(8);
  }
  while ([...arr].filter((x) => x == 3).length >= 2) {
    arr.splice(arr.indexOf(3), 1);
    arr.splice(arr.indexOf(3), 1);
    arr.push(9);
  }
  while ([...arr].filter((x) => x == 2).length > 1) {
    arr.splice(arr.indexOf(2), 1);
    arr.splice(arr.indexOf(2), 1);
    arr.push(4);
  }
  while (
    [...arr].filter((x) => x == 2).length == 1 &&
    [...arr].filter((x) => x == 3).length == 1
  ) {
    arr.splice(arr.indexOf(2), 1);
    arr.splice(arr.indexOf(3), 1);
    arr.push(6);
  }

  return parseInt(arr.sort((a, b) => a - b).join(""));
}
