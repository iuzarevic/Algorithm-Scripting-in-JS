function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    var test = str.split(/[\s_]|(?=[A-Z])+/g);
    test = test.map(function(val) {
      if (val === test[test.length-1]) {
        return val.toLowerCase();
      }
      else {
        return val.toLowerCase()+"-";
      }
    });
    return test.join("");
  }
  
console.log(spinalCase('This Is Spinal Tap'));