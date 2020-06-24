function areSimilar(a, b) {
  let indexArr = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] != b[i]) {
      indexArr.push(i);
    }
  }

  if (indexArr.length === 2) {
    let temp = a[indexArr[0]];
    a[indexArr[0]] = a[indexArr[1]];
    a[indexArr[1]] = temp;
  }

  return a.join("") == b.join("");
}
