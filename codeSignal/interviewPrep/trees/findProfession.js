function findProfession(l, p) {
  if (l === 1 || p === 1) {
    return "Engineer";
  }
  const isFirstChild = (p / 2) % 1 !== 0;
  const parentIsEngineer =
    findProfession(l - 1, Math.ceil(p / 2)) === "Engineer";
  if (parentIsEngineer) {
    return isFirstChild ? "Engineer" : "Doctor";
  }
  return isFirstChild ? "Doctor" : "Engineer";
}
