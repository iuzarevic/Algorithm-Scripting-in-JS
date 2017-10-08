/*jshint esversion: 6 */
function titleCase(str) {
  var result = str.split(' ').map(function(val) {
    return val.toLowerCase().replace(/\w/, (a) => a.toUpperCase());
  });
  return result.join(' ');
}

titleCase("sHoRt AnD sToUt");