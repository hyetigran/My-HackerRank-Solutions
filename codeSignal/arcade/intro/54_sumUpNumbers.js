function sumUpNumbers(s) {
  let regex = /\d/;
  let str = "";
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i).match(regex)) {
      str += s.charAt(i);
    } else {
      str += " ";
    }
  }
  let arr = str.split(" ").filter((el) => el !== "");
  return arr.reduce((acc, cur) => (acc += parseInt(cur)), 0);
}
