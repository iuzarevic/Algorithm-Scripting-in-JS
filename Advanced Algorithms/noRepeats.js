function permAlone(str) {
    
    var allPerms = [];
  
    function constructPerm(constructedString, reducedString) {
        var tempChar = "";
        var tempArray = [];
  
        if (reducedString.length === 0) {
            allPerms.push(constructedString);
        }
  
        for (var i = 0; i < reducedString.length; i++) {
            tempChar = reducedString[i];
            var index = reducedString.indexOf(reducedString[i]);
            tempArray = reducedString.concat();
            tempArray.splice(index, 1);
            constructPerm(constructedString+tempChar,tempArray);
        }
    }
    
    var strArray = str.split("");
    constructPerm("",strArray);
    var finalResult = allPerms.filter(function(elem) {
        var regex = /(.)\1+/;
        return !regex.test(elem);
    });
    
    return finalResult.length;
  }
  
  console.log(permAlone('aab'));