function compareTriplets(a, b) {
  let countA = 0;
  let countB = 0;
  let countC = 0;
  let newArr = [];

  for (let i = 0; i < a.length + 1; i++) {
      if (a[i] > b[i]) {
          countA++
      } else if (a[i] < b[i]) {
          countB++
      } else {
          countC++
      }
  }
  newArr.push(countA, countB)
  console.log(newArr)
  return newArr

}