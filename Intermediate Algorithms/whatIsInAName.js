function whatIsInAName(collection, source) {
  // What's in a name?
  var sourceKeys = Object.keys(source);
  var arr = [];
  // Only change code below this line
  arr = collection.filter(function(val) {
    var test = false;
    for (var i = 0; i < sourceKeys.length; i++) {
      if (val.hasOwnProperty(sourceKeys[i]) && val[sourceKeys[i]] === source[sourceKeys[i]]) {
        test = true;
      }
      else {
          test = false;
          break;
      }
    }
    return test;
  });
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });