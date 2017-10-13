function steamrollArray(arr) {
    // I'm a steamroller, baby
    var allFlatten = [];
  
    function flatten(arr) {
      if (!Array.isArray(arr)) {
        allFlatten.push(arr);
      }
      else {
        for (var i = 0; i< arr.length; i++) {
          flatten(arr[i]);
        }
      }
    }
    for (var i = 0; i< arr.length; i++) {
        flatten(arr[i]);
    }
    return allFlatten;
  }
  
console.log(steamrollArray([1, [2], [3, [[4]]]]));