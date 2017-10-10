function translatePigLatin(str) {
  var suffix = "";
  var i = 0;
  var regex = /[AEIOUaeiou]/;
  while (!regex.test(str[i]) && i < str.length) {
    suffix += str[i];
    i++;
  }
  if (i === 0) {
    suffix += "way";
  }
  else {
    suffix += "ay";
  }
  str = str.substr(i) + suffix;
  return str;
}

translatePigLatin("consonant");