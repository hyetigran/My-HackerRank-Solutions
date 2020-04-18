function maximumToys(prices, k) {
  //sort the array of prices

  // attempted to use selection sort but timed out
  // for(let i = 0; i < prices.length; i++){
  //     let min = i
  //     for(let j = i+1; j< prices.length; j++) {
  //         if(prices[min] > prices[j]) min = j
  //     }
  //     let temp = prices[i]
  //     prices[i] = prices[min]
  //     prices[min] = temp
  // }
  prices.sort((a, b) => a - b);
  //reduce the sorted array until acc has not exceeded k
  let toyCount = 0;
  prices.reduce((acc, cur, i) => {
    console.log(acc, i);
    if (acc >= k) {
      toyCount = i - 1;
    } else if (prices.length - 1 === i && acc <= k) {
      toyCount = i;
    } else return (acc += cur);
  }, 0);

  return toyCount;
}
