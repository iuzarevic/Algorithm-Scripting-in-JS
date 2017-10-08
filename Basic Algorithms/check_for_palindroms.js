function palindrome(str) {
  // Good luck!
  str = str.toLowerCase();
  str = str.replace(/[\W_]/gi,'');
  
  return str === str.split('').reverse().join('');
}



palindrome("eye");
