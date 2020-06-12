function allLongestStrings(inputArray) {
  let maxChar = 0;
  for (let i = 0; i < inputArray.length; i++) {
    if (maxChar < inputArray[i].length) {
      maxChar = inputArray[i].length;
    }
  }
  return inputArray.filter((el) => el.length === maxChar);
}
