function alphabeticShift(s) {
  let a = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let result = "";
  for (let i = 0; i < s.length; i++) {
    let index = a.indexOf(s.charAt(i));
    if (index === a.length - 1) {
      index = -1;
    }
    result += a[index + 1];
  }
  return result;
}
