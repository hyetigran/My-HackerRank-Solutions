array = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
];

function hourglassSum(arr) {
  let hourGlass = [];

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (!arr[i][j]) {
        return hourGlass;
      }
      hourGlass.push(
        (newArr = [
          arr[i][j],
          arr[i][j + 1],
          arr[i][j + 2],
          arr[i + 1][j + 1],
          arr[i + 2][j],
          arr[i + 2][j + 1],
          arr[i + 2][j + 2]
        ])
      );
    }
  }
  return hourGlass[0];
}

console.log(hourglassSum(array));
