function chunkArrayInGroups(arr, size) {
  // Break it up.
  var counter = 0;
  var newArray = [];
  while (counter < arr.length) {
    newArray.push(arr.slice(counter, counter += size));
  }
  return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 3);