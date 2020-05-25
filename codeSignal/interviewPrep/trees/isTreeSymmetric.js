function isTreeSymmetric(t) {
  if (!t) return true;
  return isLeafsSymetric(t.left, t.right);
}

function isLeafsSymetric(t1, t2) {
  if (!t1 && !t2) return true;
  if (!t1 ^ !t2) return false;
  return (
    t1.value === t2.value &&
    isLeafsSymetric(t1.right, t2.left) &&
    isLeafsSymetric(t1.left, t2.right)
  );
}
