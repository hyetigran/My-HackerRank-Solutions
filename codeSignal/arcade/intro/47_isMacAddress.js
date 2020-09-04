function isMAC48Address(s) {
  console.log(s.length);
  if (s.length !== 17) return false;
  let modStr = s.split("-").join("").toUpperCase();
  if (modStr === "") return false;
  const match = "0123456789ABCDEF";
  for (let i = 0; i < modStr.length; i++) {
    if (!match.includes(modStr.charAt(i))) {
      return false;
    }
  }
  return true;
}
