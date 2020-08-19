function longestDigitsPrefix(s) {
  let last = s.match(/\D/) ? s.indexOf(s.match(/\D/)[0]) : s.length;
  console.log(last, s.match(/\D/));
  return s.substring(0, last);
}
