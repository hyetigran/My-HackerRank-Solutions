function jumpingOnClouds(c) {
  let jumps = 0;
  for (let i = 0; i < c.length - 1; jumps++) {
      i += (c[i + 2] === 0) ? 2 : 1;
  }
  return jumps;

}