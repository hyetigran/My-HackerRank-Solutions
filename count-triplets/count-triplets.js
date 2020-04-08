function countTriplets(arr, r) {
  let len = arr.length;
  let count = 0;
  var m2 = new Map();
  var m3 = new Map();
  arr.forEach(ele => {
    if (m3.get(ele)) count = count + m3.get(ele);

    if (m2.get(ele))
      m3.set(
        ele * r,
        m3.get(ele * r) ? m3.get(ele * r) + m2.get(ele) : m2.get(ele)
      );

    m2.set(ele * r, m2.get(ele * r) ? m2.get(ele * r) + 1 : 1);
  });
  return count;
}
