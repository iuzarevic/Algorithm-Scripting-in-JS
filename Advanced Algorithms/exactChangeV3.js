var moneyAvilable = [
    { name: 'ONE HUNDRED', val: 100.00},
    { name: 'TWENTY', val: 20.00},
    { name: 'TEN', val: 10.00},
    { name: 'FIVE', val: 5.00},
    { name: 'ONE', val: 1.00},
    { name: 'QUARTER', val: 0.25},
    { name: 'DIME', val: 0.10},
    { name: 'NICKEL', val: 0.05},
    { name: 'PENNY', val: 0.01}
  ];

  function checkCashRegister(price, cash, cid) {
    var sumAll = 0.00;
    var sumCurrent = 0.00;
    var change;
    var typeOfMoney = [...cid]; //amount of that type of money in drawerS
    var howMuch = cash-price;

    var register = typeOfMoney.reduce(function(acc, curr) {
        acc[curr[0]] = curr[1];
        return acc;
      }, {});

    typeOfMoney.forEach(function(val) {
        sumAll += val[1];
    });

    if (sumAll < howMuch || howMuch < 0) {
        return "Insufficient Funds";
    }
    else if(sumAll === howMuch) {
        return "Closed";
    }
    var change_arr = moneyAvilable.reduce(function(acc,curr) {
        var value = 0;
        var checkIndex = 0;

        while (register[curr.name] > 0 && howMuch >= curr.val) {
            howMuch = howMuch - curr.val;
            register[curr.name] = register[curr.name] - curr.val;
            value = value + curr.val;

            howMuch = Math.round(howMuch * 100) / 100;
        }
        if (value > 0) {
            acc.push([curr.name,value]);
        }
        return acc;
    },[]);

    if (change_arr.length < 1 || howMuch > 0) {
        return "Insufficient Funds";
    }
    
    return change_arr;
  }

console.log(checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));