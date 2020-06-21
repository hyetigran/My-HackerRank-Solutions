function reverseInParentheses(str) {
  while (true) {
    let endParen = str.indexOf(")");
    if (endParen === -1) {
      break;
    }

    let begParen = str.substring(0, endParen).lastIndexOf("(");

    let start = str.substring(0, begParen);
    let middle = str
      .substring(begParen + 1, endParen)
      .split("")
      .reverse()
      .join("");
    let end = str.substring(endParen + 1, str.length);

    str = start + middle + end;
  }
  return str;
}
