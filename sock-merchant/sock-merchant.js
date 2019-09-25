function sockMerchant(n, ar) {
  var result = 0;
  ar.sort();
  for (let i = 0; i < n; i++) {
      if (ar[i] == ar[i + 1]) {
          i++;
          result++;
      }
  }
  return result;

}