let arr = [3, 6, 4, 1, 7];

function bubble(array) {
  let count = 0;
  let arr = array;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        count += 1;
      }
    }
  }
  console.log(`Array is sorted in ${count} swaps.`);
  console.log(`First Element: ${arr[0]}`);
  console.log(`First Element: ${arr[arr.length - 1]}`);
}

console.log(bubble(arr));
