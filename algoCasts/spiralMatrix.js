function spiral(n) {
  // create an n'd array
  let array = [];
  let zeroes = n;
  while (n > 0) {
    n--;
    array.push(new Array(zeroes).fill(0));
  }
  console.log(array);

  // define counters
  let cs = 0;
  let ce = zeroes - 1;
  let rs = 0;
  let re = zeroes - 1;

  while (cs <= ce && rs <= re) {
    //top
    for (let i = rs; i <= ce; i++) {
      array[rs][i] = array[rs][i - 1] + 1 || 1;
    }
    rs++;

    //right
    for (let j = rs; j < re + 1; j++) {
      array[j][ce] = array[j - 1][ce] + 1;
    }
    ce--;

    //bottom
    for (let k = ce; k >= cs; k--) {
      array[re][k] = array[re][k + 1] + 1;
    }
    re--;

    //left
    for (let l = re; l >= rs; l--) {
      array[l][cs] = array[l + 1][cs] + 1;
    }
    cs++;
  }
  // while ce
  console.log("after", array);
}
