function arrayManipulation(n, queries) {
  console.log(queries);

  let array = Array.from({ length: n + 1 }, () => 0);
  let max_val = 0;
  let tmp = 0;

  for (let i = 0; i < queries.length; i++) {
    let a = queries[i][0];
    let b = queries[i][1];
    let k = queries[i][2];
    array[a] += k;
    array[b + 1] -= k;
  }
  for (let j = 0; j < array.length; j++) {
    tmp += array[j];
    if (tmp > max_val) {
      max_val = tmp;
    }
  }
  return max_val;
}
