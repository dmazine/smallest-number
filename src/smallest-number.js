function SmallestNumber() {
}

SmallestNumber.prototype.getSmallestNumberWithSameNumberOfDigits = function(n) {
  return this.getSmallestNumber(this.getNumberOfDigits(n));
}

SmallestNumber.prototype.getNumberOfDigits = function(n) {
  if (n < 0) {
    return NaN;
  }

  if (n == 0) {
    return 1;
  }

  let numberOfDigits = 0;
    
  for (r = n; r > 0; r = (r / 10) | 0) {
    numberOfDigits++;
  }
    
  return numberOfDigits;
}

SmallestNumber.prototype.getSmallestNumber = function(numberOfDigits) {
  if (numberOfDigits <= 0) {
    return NaN;
  }

  if (numberOfDigits == 1) {
    return 0;
  }

  return 10 ** (numberOfDigits - 1);
}

module.exports = SmallestNumber;
