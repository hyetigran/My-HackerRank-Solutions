function isValid(s) {
  //turn string into array
  //boolean for adjustment
  let obj = {};
  let freq = {};
  for (let char of s) {
    obj[char] ? obj[char]++ : (obj[char] = 1);
  }
  let keys = Object.keys(obj).length;

  for (let prop in obj) {
    freq[obj[prop]] = freq[obj[prop]] || 0;
    freq[obj[prop]]++;
  }

  let freqArr = Object.keys(freq).map(Number);
  if (freqArr.length === 1) {
    return "YES";
  }
  let twoFrequencies = freqArr.length === 2;
  let [a, b] = freqArr;

  // frequency occurs only once
  let oneOccurence = freq[a] === 1 || freq[b] === 1;
  let singleton = (freq[a] === 1 && a === 1) || (freq[b] === 1 && b === 1);

  // differing frequency is exactly 1 more than others
  // e.g. true if aaabbcc, false if abbcc
  let diffOfOne = (freq[a] === 1 ? a - b : b - a) === 1;

  // if single character or frequencies differ by one
  // and there are exactly two frequencies
  // and there is only one occurence of the singleton or differing frequency
  if ((singleton || diffOfOne) && twoFrequencies && oneOccurence) {
    return "YES";
  }

  return "NO";
}
