function rot13(str) { // LBH QVQ VG!
  return str.replace(/[A-Z]/gi, function(letter) {
    var number = letter.charCodeAt(0)-13;
    if (number < 65) {
      letter = String.fromCharCode(91-(65-number));
    }
    else {
      letter = String.fromCharCode(number);
    }
    return letter;
  });
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");