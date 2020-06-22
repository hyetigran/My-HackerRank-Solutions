function alternatingSums(a) {
  return a.reduce(
    (acc, cur, i) => {
      if (i % 2 === 0) {
        acc[0] += cur;
      } else acc[1] += cur;
      return acc;
    },
    [0, 0]
  );
}
