function validTime(time) {
  let hours = time.substring(0, 2);
  let minutes = time.substring(3);

  console.log(hours, minutes);
  //if(hours >= 24) return false
  if (hours >= 00 && hours <= 23 && minutes >= 00 && minutes <= 59) return true;
  return false;
}
