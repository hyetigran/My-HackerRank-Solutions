function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let height = 0;
  let days = 0;
  while (height < desiredHeight) {
    days++;
    height += upSpeed;
    if (height >= desiredHeight) {
      return days;
    }
    height -= downSpeed;
  }
  return days;
}
