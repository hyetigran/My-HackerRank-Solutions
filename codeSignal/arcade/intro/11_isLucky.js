function isLucky(n) {
  let array = Array.from(String(n), Number);
  let middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle).reduce((acc, cur) => (acc += cur), 0);
  let right = array.slice(middle).reduce((acc, cur) => (acc += cur), 0);

  console.log(left, right, array);
  return left === right;
}
