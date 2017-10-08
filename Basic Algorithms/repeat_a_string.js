function repeatStringNumTimes(str, num) {
  // repeat after me
  var res = "";
  if (num <= 0) {
    res = "";
  }
  else {
    for (var i = 0; i < num; i++) {
      res += str;
    }
  }
  return res;
}

repeatStringNumTimes("abc", 3);