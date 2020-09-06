function lineEncoding(s) {
  let result = "";
  let a = s.split("");
  let freqArr = [a[0]];
  //loop string
  for (let i = 1; i < a.length; i++) {
    if (a[i - 1] === a[i]) {
      freqArr[freqArr.length - 1] += a[i];
    } else {
      freqArr.push(a[i]);
    }
  }
  for (let j = 0; j < freqArr.length; j++) {
    if (freqArr[j].length === 1) {
      result += freqArr[j];
    } else {
      result += freqArr[j].length.toString() + freqArr[j].charAt(0);
    }
  }
  return result;
  // if i is the same as previous then concat
  //otherwise push to array

  //loop over array, get length and add to result
}
