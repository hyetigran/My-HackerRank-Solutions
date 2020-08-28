function findEmailDomain(s) {
  return s.substring(s.lastIndexOf("@") + 1, s.length);
}
