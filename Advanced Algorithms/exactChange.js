/*jshint esversion: 6 */
var moneyAvilable = [
  {name: "PENNY", value: 0.01},
  {name: "NICKEL", value: 0.05},
  {name: "DIME", value: 0.10},
  {name: "QUARTER", value: 0.25},
  {name: "ONE", value: 1.00},
  {name: "FIVE", value: 5.00},
  {name: "TEN", value: 10.00},
  {name: "TWENTY", value: 20.00},
  {name: "ONE HUNDRED", value: 100.00}
];
function checkCashRegister(price, cash, cid) {
  var sumAll = 0.00;
  var sumCurrent = 0.00;
  var index;
  var change;
  var typeOfMoney = [...cid]; //amount of that type of money in drawerS
  var howMuch = cash-price;

  typeOfMoney.forEach(function(val) {
    for (var i = 0; i < typeOfMoney.length; i++) {
        if (moneyAvilable[i].name === val[0]) {
          index = i;
          break;
        }
    }
    sumAll += val[1];
    moneyAvilable[index].count = Math.round(val[1] / moneyAvilable[index].value);
  });

  if (sumAll < howMuch || howMuch < 0) {
    change = "Insufficient Funds";
  }
  else if(sumAll === howMuch) {
    change = "Closed";
  }
  else {
    change = [];
    moneyAvilable.reverse().forEach(function(val) {
      var count = 0;
      while (val.value <= howMuch && val.count !== 0) {
        count++;
        howMuch = Math.round(100 * (howMuch - val.value)) / 100;
        val.count = val.count-1;
      }
      if (count !== 0) {
        change.push([val.name,val.value*count]);
        sumCurrent += val.value*count;
      }
      return;
    });
  }
  if (sumCurrent < (cash-price) && sumAll !== howMuch) {
    change = "Insufficient Funds";
  }
  // Here is your change, ma'am.
  return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

console.log(checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));
