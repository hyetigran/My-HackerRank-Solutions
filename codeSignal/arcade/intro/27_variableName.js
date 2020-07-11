function variableName(s) {
  if (!s || s === null) {
    console.log("if1");
    return false;
  }
  let a = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  if (a.indexOf(s.charAt(0)) > 0) {
    console.log("if2");
    return false;
  }

  if (s.match(/\W/g)) {
    console.log("if3");
    return false;
  }
  return true;
}
