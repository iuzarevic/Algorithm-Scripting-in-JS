/*jshint esversion: 6 */
function truthCheck(collection, pre) {
    // Is everyone being true?
    var test = 0;
    var args = [...collection];
    for (var i = 0; i < args.length; i++) {
      if(args[i].hasOwnProperty(pre) && args[i][pre])   	{
        test++;
      }
    }
    if (test === args.length) {
      return true;
    }
    else {
      return false;
    }
  }
  
console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));