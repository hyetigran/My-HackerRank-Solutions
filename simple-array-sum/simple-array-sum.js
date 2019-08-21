function simpleArraySum(ar) {
  /*
   * Write your code here.
   */
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return ar.reduce(reducer,0)
}