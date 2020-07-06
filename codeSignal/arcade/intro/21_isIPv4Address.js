function isIPv4Address(s) {
  let a = s.split(".");
  console.log(a);
  if (a.length !== 4) return false;
  for (let i = 0; i < a.length; i++) {
    if (
      a[i] > 255 ||
      a[i] < 0 ||
      isNaN(a[i]) ||
      a[i] == "" ||
      (a[i].length > 1 && a[i].charAt(0) == 0)
    ) {
      return false;
    }
  }
  return true;
}
