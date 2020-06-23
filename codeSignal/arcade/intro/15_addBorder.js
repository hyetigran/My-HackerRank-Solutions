function addBorder(picture) {
  let width = picture[0].length + 2;

  for (let i = 0; i < picture.length; i++) {
    picture.splice(i, 1, "*" + picture[i] + "*");
  }
  picture.unshift("*".repeat(width));
  picture.push("*".repeat(width));
  return picture;
}
