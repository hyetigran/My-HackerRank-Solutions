function countingValleys(n, s) {
  let score = 0;

  return [...s].reduce((sum, value) => {
      if (value === 'U') { score++; } else { score--; }
      if (value === 'U' && score === 0) { sum++; }
      return sum;
  }, 0);
}