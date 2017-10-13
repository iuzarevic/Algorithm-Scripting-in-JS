function sumPrimes(num) {
    var count = 0;
    var sum = 0;
    for (var i = 2; i <= num; i++) {
      count = 0;
      for (var j = 2; j < i; j++) {
        if (i % j == 0) { count ++; }
      }
      if (count === 0) {
        sum += i;
      }
    }
    return sum;
  }
  
console.log(sumPrimes(10));