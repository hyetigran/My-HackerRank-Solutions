function modifyArray(nums) {
  let newArr = nums.map((el) => {
    if (el % 2 === 0) return (el *= 2);
    else return (el *= 3);
  });
  //console.log(newArr)
  return newArr;
}
