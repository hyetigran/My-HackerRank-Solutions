function depositProfit(deposit, rate, threshold) {
  rate = rate / 100 + 1;
  let year = 0;
  while (deposit < threshold) {
    deposit = rate * deposit;
    year++;
  }
  return year;
}
