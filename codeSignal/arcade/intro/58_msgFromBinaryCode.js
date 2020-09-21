function messageFromBinaryCode(code) {
  return code
    .match(/.{1,8}/g)
    .map((el) => {
      return String.fromCharCode(parseInt(el, 2));
    })
    .join("");
}
