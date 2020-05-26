function sumFibs(a) {
  var start = 0;
  var next = 1;
  var current;
  var sumOdd = 0;
  for (var i = 0; i <= a; i++) {
    current = start + next;
    start = next;
    next = current;
    if (current % 2 !== 0 && current <= a) {
      sumOdd = current + sumOdd;
    }
  }
  return sumOdd + 1;
}

export {
  sumFibs,
};
