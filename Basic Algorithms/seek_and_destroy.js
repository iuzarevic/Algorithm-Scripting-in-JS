function destroyer(arr) {
  // Remove all the values
  var args = Array.from(arguments).slice(1);
  arr = arr.filter(function(val) {
    var test = true;
    for (var i = 0; i < args.length; i++) {
      if (val === args[i]) {
        test = false;
      }
    }
    return test;
  });

  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);