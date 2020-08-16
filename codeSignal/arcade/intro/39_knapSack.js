function knapsackLight(value1, weight1, value2, weight2, maxW) {
  if (weight1 > maxW) value1 = 0;
  if (weight2 > maxW) value2 = 0;
  if (weight1 + weight2 <= maxW) {
    return value1 + value2;
  } else {
    return Math.max(value1, value2);
  }
}
