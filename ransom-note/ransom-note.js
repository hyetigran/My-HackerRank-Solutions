function checkMagazine(magazine, note) {
  let wordBank = magazine.reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur] += 1;
    } else {
      acc[cur] = 1;
    }
    return acc;
  }, {});

  for (let i = 0; i < note.length; i++) {
    if (wordBank.hasOwnProperty(note[i]) && wordBank[note[i]] > 0) {
      wordBank[note[i]] -= 1;
    } else {
      console.log("No");
      return;
    }
  }
  console.log("Yes");
  return;
}
