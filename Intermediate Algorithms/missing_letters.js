function fearNotLetter(str) {
    var i = 0;
    var first = str.charCodeAt(0);
    var code = 0;
    while (i < str.length && str.charCodeAt(i) === first + i) {
      i++;
    }
    if (i === str.length) {
      return undefined;
    }
    else {
      return String.fromCharCode(first+i);
    }
}
  
fearNotLetter("abce");