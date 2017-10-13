function sumFibs(num) {
    var fibbo = [1,1];
    var sum = 1;
    for (var i = 1; fibbo[i] <= num; i++) {
      fibbo.push(fibbo[i]+fibbo[i-1]);
      if (fibbo[i] % 2 !== 0) {
        sum += fibbo[i];
      }
    }
    return sum;
  }
  
console.log(sumFibs(75024));