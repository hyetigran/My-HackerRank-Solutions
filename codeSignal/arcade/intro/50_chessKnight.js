function chessKnight(cell) {
  let col = cell.charCodeAt(0);
  let row = cell.charAt(1);

  let moves = 0;
  //starting top left and going counter clockwise
  if (col >= "b".charCodeAt(0) && row <= 6) moves += 1;
  if (col >= "c".charCodeAt(0) && row <= 7) moves += 1;
  if (col >= "c".charCodeAt(0) && row >= 2) moves += 1;
  if (col >= "b".charCodeAt(0) && row >= 3) moves += 1;
  if (col <= "g".charCodeAt(0) && row >= 3) moves += 1;
  if (col <= "f".charCodeAt(0) && row >= 2) moves += 1;
  if (col <= "f".charCodeAt(0) && row <= 7) moves += 1;
  if (col <= "g".charCodeAt(0) && row <= 6) moves += 1;

  return moves;
}
