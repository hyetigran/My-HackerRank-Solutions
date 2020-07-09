function evenDigitsOnly(n) {
  let a = n.toString().split("");
  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 !== 0) {
      return false;
    }
  }
  return true;
}
