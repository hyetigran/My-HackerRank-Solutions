//recursive
function rotLeft(a, d) {
  if (d == 0) {
    return a;
  }
  var firstElement = a.shift();
  var newArr = [...a, firstElement];

  return rotLeft(a, d - 1);
}

function rotLeft(a, d) {
  const headIndex = d % a.length;
  const head = a.splice(0, headIndex);
  a.push(...head);
  return a;
}

[1, 2, 3, 4, 5];
