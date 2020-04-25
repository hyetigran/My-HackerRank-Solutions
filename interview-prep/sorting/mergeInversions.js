// Complete the countInversions function below.
function countInversions(arr) {
  return mergeSort(arr)[1];
}

const mergeSort = (arr, inversions) => {
  if (arr.length < 2) return [arr, 0];

  let mid = arr.length / 2;
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  let result = merge(left[0], right[0], left[1] + right[1]);

  return [result[0], result[1]];
};

const merge = (left, right, inverts) => {
  let output = [];
  let inversions = inverts;

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      output.push(left.shift());
    } else {
      output.push(right.shift());
      inversions += left.length;
    }
  }

  return [output.concat(left.length ? left : right), inversions];
};
