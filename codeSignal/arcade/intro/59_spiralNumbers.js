const spiralNumbers = (n) => {
  const output = [];
  for (let i = 0; i < n; i++) {
    output[i] = [];
    output[0][i] = i + 1;
  }

  let x = n - 1,
    y = 0,
    count = n + 1,
    reverse = true;

  for (let i = n - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      y += reverse ? 1 : -1;
      output[y][x] = count++;
      console.log(x, y);
    }
    for (let j = 0; j < i; j++) {
      x += reverse ? -1 : 1;
      output[y][x] = count++;
      console.log(x, y);
    }
    reverse = !reverse;
  }

  return output;
};
