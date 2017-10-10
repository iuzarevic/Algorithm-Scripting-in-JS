/*jshint esversion: 6 */
function uniteUnique(arr) {
    var args = [...arguments];
    return args.reduce(function(acc,val){
      for (var i = 0; i < val.length; i++) {
        if (!acc.includes(val[i])){
          acc.push(val[i]);
        }
      }
      return acc;
    });
}
  
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);