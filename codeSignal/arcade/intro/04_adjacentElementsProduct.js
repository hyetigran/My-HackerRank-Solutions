function adjacentElementsProduct(inputArray) {
  let largest = -1001;

  for (let i = 0; i < inputArray.length - 1; i++) {
    let product = inputArray[i] * inputArray[i + 1];
    if (largest < product) {
      largest = product;
    }
  }
  return largest;
}
