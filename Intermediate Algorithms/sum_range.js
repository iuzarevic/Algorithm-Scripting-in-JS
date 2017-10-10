function sumAll(arr) {
  return arr.reduce(function(acc,val) {
    var result = 0;
    var min = Math.min(acc,val);
    var max = Math.max(acc,val);
    while (min <= max) {
      result += min++;
    }
    return result;
  });
}

console.log(sumAll([1, 4]));