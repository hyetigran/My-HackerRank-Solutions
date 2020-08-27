function alphanumericLess(s1, s2) {
  let arr1 = [];
  let arr2 = [];

  let tempNum1 = "";
  let tempNum2 = "";
  for (let i = 0; i < s1.length; i++) {
    if (parseInt(s1.charAt(i)) === 0) {
      tempNum1 += s1.charAt(i);
    } else if (!parseInt(s1.charAt(i))) {
      if (tempNum1 !== "") {
        arr1.push(tempNum1);
        tempNum1 = "";
      }
      arr1.push(s1.charAt(i));
    } else {
      tempNum1 += s1.charAt(i);
    }
    if (tempNum1 !== "" && i === s1.length - 1) {
      arr1.push(tempNum1);
    }
  }
  for (let j = 0; j < s2.length; j++) {
    if (parseInt(s2.charAt(j)) === 0) {
      tempNum2 += s2.charAt(j);
    } else if (!parseInt(s2.charAt(j))) {
      if (tempNum2 !== "") {
        arr2.push(tempNum2);
        tempNum2 = "";
      }
      arr2.push(s2.charAt(j));
    } else {
      tempNum2 += s2.charAt(j);
    }
    if (tempNum2 !== "" && j === s2.length - 1) {
      arr2.push(tempNum2);
    }
  }
  let count = Math.min(arr1.length, arr2.length);

  let pointer = 0;
  let isFirstLeadingZeroes = [];
  while (count > 0) {
    let el1 = arr1[pointer];
    let el2 = arr2[pointer];
    console.log(el1, el2);
    if (el1.length === 1 && el2.length === 1) {
      if (el1.charCodeAt(0) < el2.charCodeAt(0)) {
        return true;
      } else if (el1.charCodeAt(0) > el2.charCodeAt(0)) {
        return false;
      }
    } else if (el1.length === 1 && el2.length !== 1) {
      return false;
    } else if (el1.length !== 1 && el2.length === 1) {
      return true;
    } else if (el1.length !== 1 && el2.length !== 1) {
      if (+el1 < +el2) {
        return true;
      } else if (+el1 > +el2) {
        return false;
      } else if (+el1 === +el2 && el1.length !== el2.length) {
        let isS1 = el1.length > el2.length;
        isFirstLeadingZeroes.push({ el1, el2, isS1 });
      } else if (el2.length > 15 && el2.length > 15) {
        return el1.charAt(el1.length - 1) < el2.charAt(el2.length - 1);
      }
    }
    pointer++;
    count--;
  }
  console.log("isF", isFirstLeadingZeroes);
  if (isFirstLeadingZeroes.length > 0 && isFirstLeadingZeroes[0].isS1) {
    return true;
  }

  return arr1.length >= arr2.length ? false : true;
}
