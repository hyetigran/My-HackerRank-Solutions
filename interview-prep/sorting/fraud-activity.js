function fraudAlert(expenditure, d) {
  //   function median(array) {
  //     //console.log(array)
  //     const mid = Math.floor(array.length / 2);
  //     //console.log('mid', mid)
  //     for (let i = 1; i < array.length; i++) {
  //       let curr = array[i];
  //       for (var j = i - 1; j >= 0 && array[j] > curr; j--) {
  //         array[j + 1] = array[j];
  //       }
  //       array[j + 1] = curr;
  //     }
  //     return array.length % 2 !== 0
  //       ? array[mid]
  //       : (array[mid - 1] + array[mid]) / 2;
  //   }
  let countingSort = (arr, min, max) => {
    let i = min,
      j = 0,
      len = arr.length,
      count = [];
    for (i; i <= max; i++) {
      count[i] = 0;
    }
    for (i = 0; i < len; i++) {
      count[arr[i]] += 1;
    }
    for (i = min; i <= max; i++) {
      while (count[i] > 0) {
        arr[j] = i;
        j++;
        count[i]--;
      }
    }
    return arr;
  };
  let flagCount = 0;
  const mid = Math.floor(d / 2);
  for (let i = d; i < expenditure.length; i++) {
    console.log("slice", expenditure.slice(i - d, i), "ar[i]", expenditure[i]);
    //let medianFlag = median(expenditure.slice(i - d, i)) * 2;
    let sortedArr = countingSort(expenditure.slice(i - d, i), 0, d - 1);
    let medianFlag =
      sortedArr.length % 2 !== 0
        ? sortedArr[mid]
        : (sortedArr[mid - 1] + sortedArr[mid]) / 2;
    console.log(medianFlag);
    if (medianFlag <= expenditure[i]) flagCount++;
  }

  return flagCount;
}
