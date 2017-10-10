function myReplace(str, before, after) {
    return str.split(' ').map(function(val) {
      var returnValue = "";
      if (val === before) {
        if (val[0] === val[0].toUpperCase()) {
          returnValue = after.replace(after[0],after[0].toUpperCase());
        }
        else {
          returnValue = after;
        }
      }
      else {
        returnValue = val;
      }
      return returnValue;
    }).join(' ');
}
  
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");