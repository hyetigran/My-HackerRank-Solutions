function makeArrayConsecutive2(statues) {
  let sortedArr = statues.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < sortedArr.length - 1; i++) {
    let missing = sortedArr[i + 1] - sortedArr[i] - 1;
    console.log(i, missing, sortedArr);
    count += missing;
  }
  return count;
}
