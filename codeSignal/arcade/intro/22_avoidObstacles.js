function avoidObstacles(a) {
  let jump = 2;
  a.sort((a, b) => a - b);

  for (let i = 0; i < a.length; i++) {
    if (a[i] % jump === 0) {
      jump++;
      if (i !== a.length) {
        i = -1;
      } else {
        return jump;
      }
    }
  }
  return jump;
}
