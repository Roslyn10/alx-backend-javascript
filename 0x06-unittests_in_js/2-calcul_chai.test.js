// A test file for the calculator, using chai with mocha
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe("calculateNumber()", function () {
    it(`Checking for rounding with small numbers (Addition)`, function () {
        const result = calculateNumber('SUM', 1.5, 5.2);
        expect(result).to.equal(7);
    });
    it(`Checking for rounding with small numbers (Subtraction)`, function () {
        const result = calculateNumber('SUBTRACT', 1.5, 5.2);
        expect(result).to.equal(-3);
    });
    it(`Checking for rounding with small numbers (Division)`, function () {
        const result = calculateNumber('DIVIDE', 1.5, 5.2);
        expect(result).to.equal(0.4);
    });
    it(`Checking for rounding with large numbers (Addition)`, function () {
        const result = calculateNumber('SUM', 6244692.13849, 742113);
        expect(result).to.equal(6986805);
    });
    it(`Checking for rounding with large numbers (Subtraction)`, function () {
        const result = calculateNumber('SUBTRACT', 6244692.13849, 742113);
        expect(result).to.equal(5502579);
    });
    it(`Checking for rounding with large numbers (Division)`, function () {
        const result = calculateNumber('DIVIDE', 6244692.13849, 742113);
        expect(result).to.equal(8.414745463291979);
    });
    it(`Checking if numbers round (Addition)`, function () {
        const result = calculateNumber('SUM', 15.5, 5.5);
        expect(result).to.equal(22);
    });
    it(`Checking if numbers round (Subtraction)`, function () {
        const result = calculateNumber('SUBTRACT', 15.5, 5.5);
        expect(result).to.equal(10);
    });
    it(`Checking if numbers round (Division)`, function () {
        const result = calculateNumber('DIVIDE', 15.5, 5.5);
        expect(result).to.equal(2.6666666666666665);
    });
    it(`Negative with a positive number (Addition)`, function () {
        const result = calculateNumber('SUM', 15.5, -2.5);
        expect(result).to.equal(14);
    });
    it(`Negative with a positive number (Subtraction)`, function () {
        const result = calculateNumber('SUBTRACT', 15.5, -2.5);
        expect(result).to.equal(18);
    });
    it(`Negative with a positive number (Division)`, function () {
        const result = calculateNumber('DIVIDE', 15.5, -2.5);
        expect(result).to.equal(-8);
    });
    it(`Checking with two zeros (Addition)`, function () {
        const result = calculateNumber('SUM', 0, 0);
        expect(result).to.equal(0);
    });
    it(`Checking with two zeros (Subtraction)`, function () {
        const result = calculateNumber('SUBTRACT', 0, 0);
        expect(result).to.equal(0);
    });
    it(`Checking with two zeros (Division)`, function () {
        const result = calculateNumber('DIVIDE', 0, 0);
        expect(result).to.equal('Error');
    });
    it(`Checking a large number and a smaller number to round (Addition)`, function () {
        const result = calculateNumber('SUM', 372846239.23, 90);
        expect(result).to.equal(372846329);
    });
    it(`Checking a large number and a smaller number to round (Subtraction)`, function () {
        const result = calculateNumber('SUBTRACT', 372846239.23, 90);
        expect(result).to.equal(372846149);
    });
    it(`Checking a large number and a smaller number to round (Division)`, function () {
        const result = calculateNumber('DIVIDE', 372846239.23, 90);
        expect(result).to.equal(4142735.988888889);
    });
    it(`Checking zero and a number to be rounded (Addition)`, function () {
        const result = calculateNumber('SUM', 37.23, 0);
        expect(result).to.equal(37);
    });
    it(`Checking zero and a number to be rounded (Subtraction)`, function () {
        const result = calculateNumber('SUBTRACT', 37.23, 0);
        expect(result).to.equal(37);
    });
    it(`Checking zero and a number to be rounded (Division)`, function () {
        const result = calculateNumber('DIVIDE', 37.23, 0);
        expect(result).to.equal('Error');
    });
    it(`Checking for a number and no other argument (Addition)`, function () {
        const result = calculateNumber('SUM', 389);
        expect(result).to.be.NaN;
    });
    it(`Checking for a number and no other argument (Subtraction)`, function () {
        const result = calculateNumber('SUBTRACT', 389);
        expect(result).to.be.NaN;
    });
    it(`Checking for a number and no other argument (Division)`, function () {
        const result = calculateNumber('DIVIDE', 38);
        expect(result).to.be.NaN;
    });
    it(`Checking for more than two arguments (Addition)`, function () {
        const result = calculateNumber('SUM', 389, 89, 34);
        expect(result).to.equal(478);
    });
    it(`Checking for more than two arguments (Subtraction)`, function () {
        const result = calculateNumber('SUBTRACT', 389, 89, 34);
        expect(result).to.equal(300);
    });
    it(`Checking for more than two arguments (Division)`, function () {
        const result = calculateNumber('DIVIDE', 389, 89, 34);
        expect(result).to.equal(4.370786516853933);
    });
    it(`Check rounding with negative decimals (Addition)`, function () {
        const result = calculateNumber('SUM', -2.323, -5.6);
        expect(result).to.equal(-8);
    });
    it(`Check rounding with negative decimals (Subtraction)`, function () {
        const result = calculateNumber('SUBTRACT', -2.323, -5.6);
        expect(result).to.equal(4);
    });
    it(`Check rounding with negative decimals (Division)`, function () {
        const result = calculateNumber('DIVIDE', -2.323, -5.6);
        expect(result).to.equal(0.3333333333333333);
    });
    it(`Checking very small numbers (Addition)`, function () {
        const result = calculateNumber('SUM', -0.00001, -0.0000002);
        expect(result).to.equal(0);
    });
    it(`Checking very small numbers (Subtraction)`, function () {
        const result = calculateNumber('SUBTRACT', -0.00001, -0.0000002);
        expect(result).to.equal(0);
    });
    it(`Checking very small numbers (Division)`, function () {
        const result = calculateNumber('DIVIDE', -0.00001, -0.0000002);
        expect(result).to.equal('Error');
    });
    it(`Checking with very large numbers (Addition)`, function () {
        const result = calculateNumber('SUM', 9999999999999, 0.1);
        expect(result).to.equal(9999999999999);
    });
    it(`Checking with very large numbers (Subtraction)`, function () {
        const result = calculateNumber('SUBTRACT', 9999999999999, 0.1);
        expect(result).to.equal(9999999999999);
    });
    it(`Checking with very large numbers (Division)`, function () {
        const result = calculateNumber('DIVIDE', 9999999999999, 0.1);
        expect(result).to.equal('Error');
    });
});
