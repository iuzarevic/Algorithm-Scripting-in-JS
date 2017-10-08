function reverseString(str) {
  var helpingArray = str.split("");
  helpingArray.reverse();
  str = helpingArray.join("");
  return str;
}

reverseString("hello");