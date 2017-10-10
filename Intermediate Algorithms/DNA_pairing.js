function pairElement(str) {
    var mainArray = str.split("").map(function(val){
      var result = [];
        switch(val) {
          case "A":
            result.push("A");
            result.push("T");
            break;
          case "T":
            result.push("T");
            result.push("A");
            break;
          case "C":
            result.push("C");
            result.push("G");
            break;
          case "G":
            result.push("G");
            result.push("C");
            break;
        }
      return result;
    });
    return mainArray;
  }
  
  console.log(pairElement("GCG"));