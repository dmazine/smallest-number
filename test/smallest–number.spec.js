const should = require('chai').should();

const SmallestNumber = require('../src/smallest-number');

describe('SmallestNumber', function() {
  const smallestNumber = new SmallestNumber();

	describe('#getNumberOfDigits()', function() {
    
    it('should return 0 when number is null', function() {
      smallestNumber.getNumberOfDigits().should.equal(0);
    });
  
    it('should return NaN when number is negative', function() {
      smallestNumber.getNumberOfDigits(-1).should.be.NaN;
    });

    it('should return 1 when number is 0', function() {
      smallestNumber.getNumberOfDigits(0).should.equal(1);
    });

    it('should return 1 when number has 1 digit', function() {
      smallestNumber.getNumberOfDigits(8).should.equal(1);
    });

    it('should return 2 when number has 2 digits', function() {
      smallestNumber.getNumberOfDigits(88).should.equal(2);
    });

    it('should return 3 when number has 3 digits', function() {
      smallestNumber.getNumberOfDigits(888).should.equal(3);
    });

  });


	describe('#getSmallestNumber()', function() {

    it('should return NaN when number of digits is 0', function() {
      smallestNumber.getSmallestNumber(0).should.be.NaN;
    });

    it('should return NaN when number of digits is negative', function() {
      smallestNumber.getSmallestNumber(-1).should.be.NaN;
    });

    it('should return 0 when number of digits is 1', function() {
      smallestNumber.getSmallestNumber(1).should.equal(0);
    });

    it('should return 10 when number of digits is 2', function() {
      smallestNumber.getSmallestNumber(2).should.equal(10);
    });

    it('should return 100 when number of digits is 3', function() {
      smallestNumber.getSmallestNumber(3).should.equal(100);
    });

  });

	describe('#getSmallestNumberWithSameNumberOfDigits()', function() {

      it('should return NaN when number is negative', function() {
      smallestNumber.getSmallestNumberWithSameNumberOfDigits(-1).should.be.NaN;
    });

      it('should return 0 when number contains 1 digit', function() {
      smallestNumber.getSmallestNumberWithSameNumberOfDigits(0).should.equal(0);
    });

      it('should return 0 when number contains 1 digit', function() {
      smallestNumber.getSmallestNumberWithSameNumberOfDigits(8).should.equal(0);
    });

      it('should return 10 when number contains 2 digits', function() {
      smallestNumber.getSmallestNumberWithSameNumberOfDigits(88).should.equal(10);
    });

      it('should return 100 when number contains 3 digits', function() {
      smallestNumber.getSmallestNumberWithSameNumberOfDigits(888).should.equal(100);
    });

  });

});
