function longestWord(text) {
  let regex = /^[a-zA-Z\s]*$/;
  text.match(regex);
  console.log(text.match(regex));
  let str = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i).match(regex)) {
      str += text.charAt(i);
    } else {
      str += " ";
    }
  }
  let arr = str.split(" ");
  console.log(arr);
  let biggest = arr[0];
  for (let j = 1; j < arr.length; j++) {
    if (arr[j].length > biggest.length) biggest = arr[j];
  }
  return biggest;
}
