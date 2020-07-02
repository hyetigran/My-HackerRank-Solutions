function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  let yourMax = Math.max(yourLeft, yourRight);
  let friendMax = Math.max(friendsLeft, friendsRight);
  if (yourMax !== friendMax) return false;
  return yourLeft + yourRight === friendsLeft + friendsRight;
}
