function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.sort(function(a,b) {
    return a-b;
  });
  
  for (var i = arr.length - 1; i >= 0; i--) {
    if (num > arr[i]) {
      return i+1;
    }
    if (i === 0) {
      return 0;
    }
  }
}

getIndexToIns([40, 60], 50);