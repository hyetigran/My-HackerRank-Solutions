function sortByHeight(a) {
  //selection sort

  for (let i = 0; i < a.length; i++) {
    if (a[i] === -1) {
      continue;
    }
    let min = i;
    for (let j = i + 1; j < a.length; j++) {
      if (a[j] === -1) {
        continue;
      }
      if (a[min] > a[j]) {
        min = j;
      }
    }
    let temp = a[i];
    a[i] = a[min];
    a[min] = temp;
  }
  console.log(a);
  return a;
}
