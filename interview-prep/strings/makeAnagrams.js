function makeAnagram(aa, bb) {
  let a = Array.from(aa);
  let b = Array.from(bb);
  let result = 0;
  let output = [];

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] == b[j]) {
        a.splice(i, 1);
        b.splice(j, 1);
        i--;
      }
    }
  }
  return a.length + b.length;
}
