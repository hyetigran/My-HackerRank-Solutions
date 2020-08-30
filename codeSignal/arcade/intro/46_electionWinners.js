function electionsWinners(votes, k) {
  let result = 0;

  let max = 0;
  for (let i = 0; i < votes.length; i++) {
    if (votes[i] > max) max = votes[i];
  }
  let same = votes.reduce((acc, cur) => (max === cur ? (acc += 1) : acc), 0);
  console.log(max, same);
  if (
    votes.reduce((acc, cur) => (max === cur ? (acc += 1) : acc), 0) > 1 &&
    k === 0
  )
    return 0;
  votes.map((el, i) => {
    if (el + k > max) result++;
    else if (i === votes.indexOf(max)) result++;
  });

  return result;
}
