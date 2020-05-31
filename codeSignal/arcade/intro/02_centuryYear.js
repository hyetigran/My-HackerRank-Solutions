function centuryFromYear(year) {
  if (year % 100 === 0) {
    return year / 100;
  }

  return parseInt(year / 100 + 1);
}
