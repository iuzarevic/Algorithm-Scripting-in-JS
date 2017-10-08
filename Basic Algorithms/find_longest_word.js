function findLongestWord(str) {
  str = str.split(' ').reduce(function(acc,val){
    if (val.length >= acc) {
      return val.length;
    }
    else {
      return acc;
    }
  },0);
  return str;
}

findLongestWord("The quick brown fox jumped over the lazy dog");