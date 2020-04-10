function isBalanced(s) {
  var braces = new Map();
  braces.set("[", "]");
  braces.set("{", "}");
  braces.set("(", ")");
  var arr = Array.from(s);
  var stack = new Array();
  for (let b of arr) {
    if (braces.has(b)) stack.push(b);
    else {
      if (b != braces.get(stack.pop())) return "NO";
    }
  }
  return stack.length === 0 ? "YES" : "NO";
}
