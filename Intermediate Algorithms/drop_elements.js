function dropElements(arr, func) {
    // Drop them elements.
    var test = false;
    return arr.filter(function(val){
      if (func(val) && test === false){
        test = true;
        return true;
      }
      else if (test === true) {
        return true;
      }
      else {
        return false;
      }
    });
  }
  
console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));