function deleteDigit(n) {
  let str = n.toString();
  let biggest = parseInt(str.substring(1));
  let current = "";
  for (let i = 1; i < str.length; i++) {
    console.log(n);
    current = str.substring(0, i) + str.substring(i + 1);
    if (biggest < current) {
      biggest = current;
    }
  }

  return parseInt(biggest);
}
