function almostIncreasingSequence(array) {
  let count = 0;
  for (let i = 1; i < array.length; i++) {
    let previous = array[i - 1];
    let current = array[i];
    let next = array[i + 1];
    if (previous >= current) {
      count++;
    }
    if (count > 1) {
      return false;
    }
    if (array[i] <= array[i - 2] && array[i + 1] <= array[i - 1]) return false;
  }
  return true;
}
