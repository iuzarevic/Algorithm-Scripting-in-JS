function convertToRoman(num) {
  var result = "";
  var arrNumbers = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
  var romNumbers = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];

  for (var i = arrNumbers.length-1; i >= 0; i--) {
    while (num >= arrNumbers[i] && num > 0) {
        result += romNumbers[i];
        num = num - arrNumbers[i];
    }
  }
  return result;
}

console.log(convertToRoman(12));