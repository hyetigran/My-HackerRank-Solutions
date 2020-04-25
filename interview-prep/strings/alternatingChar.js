function alternatingCharacters(s) {
  let arr = s.split("");
  let count = 0;
  let last = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] == last) {
      count++;
    } else {
      last = arr[i];
    }
  }

  return count;
}
