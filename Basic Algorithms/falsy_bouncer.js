function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(function(val) {
    if (val) {
      return true;
    }
    else {
      return false;
    }
  });
}

bouncer([7, "ate", "", false, 9]);