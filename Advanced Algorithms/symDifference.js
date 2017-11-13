/*jshint esversion: 6 */
function sym() {
    var a = [...arguments];
    var returnArray = a.reduce(function(acc,val){
      var testArray = [];
      for (var j = 0; j < val.length; j++) {
        if (testArray.includes(val[j])) {
          testArray.splice(testArray.indexOf(val[j]),1);
        }
        testArray.push(val[j]);
      }
      for (var i = 0; i < testArray.length; i++) {
        if (acc.indexOf(testArray[i]) < 0) {
          acc.push(testArray[i]);
        }
        else {
          acc.splice(acc.indexOf(testArray[i]), 1);
        }
      }
      return acc;
    },[]);
    return returnArray;
  }
  
  console.log(sym([1, 2, 3], [5, 2, 1, 4]));