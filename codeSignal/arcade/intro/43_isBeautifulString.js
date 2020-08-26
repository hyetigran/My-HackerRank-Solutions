function isBeautifulString(s) {
  let obj = s.split("").reduce((acc, cur) => {
    cur = cur.charCodeAt(0);
    if (acc[cur]) acc[cur]++;
    else acc[cur] = 1;
    return acc;
  }, {});

  let start = "a".charCodeAt(0);
  let end = Object.keys(obj).reduce((a, b) =>
    parseInt(a) > parseInt(b) ? a : b
  );
  console.log(end);
  console.log(obj);
  if (!obj[start]) return false;
  for (let i = start; i < end; i++) {
    //console.log('i', i+1, i, obj[i])
    if (obj[i] === undefined) {
      return false;
    }
    if (i + 1 - i !== 1) {
      return false;
    }
    if (obj[i] < obj[i + 1]) {
      return false;
    }
  }

  return true;
}
