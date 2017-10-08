function largestOfFour(arr) {
  // You can do this!
  var result = arr.map(function(subArray) {
    return subArray.reduce(function(max,val) {
      if (val >= max) { return val; }
      else { return max; }
    });
  });
  return result;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);