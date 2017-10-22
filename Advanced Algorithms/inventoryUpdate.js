
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    var iFindIt = false;
    var arr2Len = arr2.length;
    for (var i = 0; i < arr1.length; i++) {
      iFindIt = false;
      for (var j = 0; j < arr2Len; j++) {
        if (arr1[i][1] === arr2[j][1]) {
          arr2[j][0] += arr1[i][0];
          iFindIt = true;
          break;
        }
      }
      if (iFindIt === false) {
          arr2.push(arr1[i]);
      }
    }
  
    arr2.sort(function(a,b){
      var nameA = a[1];
      var nameB = b[1];
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  
    return arr2;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));