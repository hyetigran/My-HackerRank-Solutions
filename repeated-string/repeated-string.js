function repeatedString(s, n) {
  let fracNumber = Math.trunc(n / s.length);
  let remainder = n % s.length;
  let counter = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "a") {
      counter++;
    }
  }
  console.log("frac", fracNumber);
  console.log("counter", counter);
  console.log("remainder", remainder);
  counter = counter * fracNumber;
  for (let i = 0; i < remainder; i++) {
    if (s[i] === "a") {
      counter++;
    }
  }
  return counter;
}

console.log(repeatedString("haba", 10));
