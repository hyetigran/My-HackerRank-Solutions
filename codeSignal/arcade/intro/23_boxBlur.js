function boxBlur(image) {
  let cs = 0;
  let ce = 2;
  let rs = 0;
  let re = 2;
  let width = image[0].length - 1;
  let height = image.length - 1;
  let results = [];
  for (let k = 0; k < image.length - re; k++) {
    results.push([]);
  }
  while (ce !== width + 1 && re !== height + 1) {
    let sum = 0;
    for (let i = rs; i <= re; i++) {
      for (let j = cs; j <= ce; j++) {
        sum += image[i][j];
      }
    }
    let value = Math.floor(sum / 9);
    results[rs].push(value);
    //check if there's an adjacent cube
    if (ce === width && re !== height) {
      rs++;
      re++;
      cs = 0;
      ce = 2;
    } else {
      cs++;
      ce++;
    }
  }
  return results;
}
