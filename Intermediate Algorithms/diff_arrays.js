function diffArray(arr1, arr2) {
  var newArr = arr1.concat(arr2);
  // Same, same; but different.
  newArr = newArr.filter(function(val){
    var test = true;
    for (var i = 0; i < arr1.length; i++) {
      if (val == arr1[i]) {
        for (var j = 0; j < arr2.length; j++) {
          if (val == arr2[j]) {
            test = false;
            break;
          }
        }
      }
    }
    return test;
  });
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));