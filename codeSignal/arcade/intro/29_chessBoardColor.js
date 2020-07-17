function chessBoardCellColor(cell1, cell2) {
  let obj = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
  };

  let color1;
  let color2;
  if (obj[cell1.charAt(0)] % 2 !== 0 && cell1.charAt(1) % 2 !== 0) {
    color1 = 1;
  } else if (obj[cell1.charAt(0)] % 2 === 0 && cell1.charAt(1) % 2 === 0) {
    color1 = 1;
  } else color1 = 0;
  if (obj[cell2.charAt(0)] % 2 !== 0 && cell2.charAt(1) % 2 !== 0) {
    color2 = 1;
  } else if (obj[cell2.charAt(0)] % 2 === 0 && cell2.charAt(1) % 2 === 0) {
    color2 = 1;
  } else color2 = 0;

  return color1 === color2;
}
