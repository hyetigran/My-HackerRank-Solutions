function checkPalindrome(inputString) {
  let reverseStr = inputString.split("").reverse().join("");

  return inputString === reverseStr;
}
