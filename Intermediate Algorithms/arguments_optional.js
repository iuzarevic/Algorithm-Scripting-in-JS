/*jshint esversion: 6 */
function addTogether() {
    var args = [...arguments];
    
    function isNumber(num) {
      if (Number.isInteger(num)) {
        return true;
      }
      else {
        return false;
      }
    }
    
    function addTogether(arg2) {
      if (isNumber(arg2)) {
        return args[0] + arg2;
      }
      else {
        return undefined;
      }
    }
  
    if (args.length > 1) {
      var firstNumber = args[0];
      var secondNumber = args[1];
      if (isNumber(firstNumber) && isNumber(secondNumber)) {
        return firstNumber + secondNumber;
      }
      else {
        return undefined;
      }
    }
    else {
      if (isNumber(args[0])) {
        return addTogether;
      }
      else {
        return undefined;
      }
    }
  }
  
console.log(addTogether(2,3));