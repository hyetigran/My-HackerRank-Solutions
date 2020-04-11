function sherlockAndAnagrams(s) {
  let count = 0;
  for (let i = 0; i < s.length - 1; i++) {
    for (let noOfChar = 1; noOfChar <= s.length - 1; noOfChar++) {
      let subStr = s
        .substr(i, noOfChar)
        .split("")
        .sort()
        .join("");
      for (let j = i + 1; j <= s.length - noOfChar; j++) {
        let newStr = s
          .substr(j, noOfChar)
          .split("")
          .sort()
          .join("");
        if (newStr == subStr) {
          count++;
        }
      }
    }
  }
  return count;
}
