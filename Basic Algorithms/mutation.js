function mutation(arr) {
  var test = true;
  for (var i = 0; i < arr[1].length; i++) {
    if (arr[0].toLowerCase().indexOf(arr[1][i].toLowerCase()) === -1) {
      test = false;
    }
  }
  return test;
}

mutation(["hello", "hey"]);