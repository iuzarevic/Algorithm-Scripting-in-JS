function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    for (var i = 0; i < arr.length; i++) {
      var oP = 2*Math.PI*Math.sqrt(Math.pow((earthRadius+arr[i].avgAlt),3)/GM);
      oP = Math.round(oP);
      delete arr[i].avgAlt;
      arr[i].orbitalPeriod = oP;
    }
    return arr;
 }

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));