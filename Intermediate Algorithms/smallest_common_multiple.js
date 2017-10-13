function smallestCommons(arr) {
    arr.sort(function(a,b){
      return a-b;
    });
    var first = arr[0];
    var last = arr[1];
    var multiplerF = 2;
    var multiplerL = 2;
    var valueFirst = arr[0];
    var valueNext = arr[1];
    while (valueFirst < valueNext) {
      valueFirst = first * multiplerF++;
      if (valueFirst > valueNext) {
        valueNext = last * multiplerL++;
      }
      if (valueFirst === valueNext) {
        for (var i = arr[0]; i <= arr[1]; i++) {
          if (valueFirst % i !== 0) {
            valueNext = last * multiplerL++;
            break;
          }
        }
      }
    }
    return valueFirst;
  }
  
  
console.log(smallestCommons([1,5]));