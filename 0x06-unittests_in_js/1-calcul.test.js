// Test file for the function calculateNumber in 1.calcul

const assert = require("assert")
const {it, describe } = require("mocha");
const calculateNumber = require("./1-calcul");

describe("calculateNumber()", function () {

    it(`Checking for rounding, wwith small numbers(Addition)`, function () {
        const result = calculateNumber('SUM', 1.5, 5.2);
        assert.strictEqual(result, 7);
    });
    it(`Checking for rounding, wwith small numbers(Subtraction)`, function () {
        const result = calculateNumber('SUBTRACT', 1.5, 5.2);
        assert.strictEqual(result, -3);
    });
    it(`Checking for rounding, wwith small numbers(Division)`, function () {
        const result = calculateNumber('DIVIDE', 1.5, 5.2);
        assert.strictEqual(result, 0.4);
    });
    it(`Checking for rounding, with large numbers(Addition)`, function () {
        const result = calculateNumber('SUM', 6244692.13849, 742113);
        assert.strictEqual(result, 6986805);
    });
    it(`Checking for rounding, with large numbers(Subtraction)`, function () {
        const result = calculateNumber('SUBTRACT', 6244692.13849, 742113);
        assert.strictEqual(result, 5502579);
    });
    it(`Checking for rounding, with large numbers(Division)`, function () {
        const result = calculateNumber('DIVIDE', 6244692.13849, 742113);
        assert.strictEqual(result, 8.414745463291979);
    });
    it(`Checking if numbers round(Addition)`, function () {
        const result = calculateNumber('SUM', 15.5, 5.5);
        assert.strictEqual(result, 22);
    });
    it(`Checking if numbers round(Subtraction)`, function () {
        const result = calculateNumber('SUBTRACT', 15.5, 5.5);
        assert.strictEqual(result, 10);
    });
    it(`Checking if numbers round(Division)`, function () {
        const result = calculateNumber('DIVIDE', 15.5, 5.5);
        assert.strictEqual(result, 2.6666666666666665);
    });
    it(`Negative with a positive number(Addition)`, function () {
        const result = calculateNumber('SUM', 15.5, -2.5);
        assert.strictEqual(result, 14);
    });
    it(`Negative with a positive number(Subtraction)`, function () {
        const result = calculateNumber('SUBTRACT', 15.5, -2.5);
        assert.strictEqual(result, 18);
    });
    it(`Negative with a positive number(Division)`, function () {
        const result = calculateNumber('DIVIDE', 15.5, -2.5);
        assert.strictEqual(result, -8);
    });
    it(`Checking with two zeros(Addition)`, function () {
        const result = calculateNumber('SUM', 0, 0);
        assert.strictEqual(result, 0);
    });
    it(`Checking with two zeros(Subtraction)`, function () {
        const result = calculateNumber('SUBTRACT', 0, 0);
        assert.strictEqual(result, 0);
    });
    it(`Checking with two zeros(Division)`, function () {
        const result = calculateNumber('DIVIDE', 0, 0);
        assert.strictEqual(result, 'Error');
    });
    it(`Checking a large number and a smaller number to round(Addition)`, function () {
        const result = calculateNumber('SUM', 372846239.23, 90);
        assert.strictEqual(result, 372846329);
    });
    it(`Checking a large number and a smaller number to round(Subtraction)`, function () {
        const result = calculateNumber('SUBTRACT', 372846239.23, 90);
        assert.strictEqual(result, 372846149);
    });
    it(`Checking a large number and a smaller number to round(Division)`, function () {
        const result = calculateNumber('DIVIDE', 372846239.23, 90);
        assert.strictEqual(result, 4142735.988888889);
    });
    it(`Checking zero and a number to be rounded(Addition)`, function () {
        const result = calculateNumber('SUM', 37.23, 0);
        assert.strictEqual(result, 37);
    });
    it(`Checking zero and a number to be rounded(Subtraction)`, function () {
        const result = calculateNumber('SUBTRACT', 37.23, 0);
        assert.strictEqual(result, 37);
    });
    it(`Checking zero and a number to be rounded(Division)`, function () {
        const result = calculateNumber('DIVIDE', 37.23, 0);
        assert.strictEqual(result, 'Error');
    });
    it(`Checking for a number and no other argument(Addition)`, function () {
        const result = calculateNumber('SUM', 389);
        assert.strictEqual(result,  NaN);
    });
    it(`Checking for a number and no other argument(Subtraction)`, function () {
        const result = calculateNumber('SUBTRACT', 389);
        assert.strictEqual(result, NaN);
    });
    it(`Checking for a number and no other argument(Division)`, function () {
        const result = calculateNumber('DIVIDE', 38);
        assert.strictEqual(result, NaN);
    });
    it(`Checking for more than two arguments(Addition)`, function () {
        const result = calculateNumber('SUM', 389, 89, 34);
        assert.strictEqual(result, 478);
    });
    it(`Checking for more than two arguments(Subtraction)`, function () {
        const result = calculateNumber('SUBTRACT', 389, 89, 34);
        assert.strictEqual(result, 300);
    });
    it(`Checking for more than two arguments(Division)`, function () {
        const result = calculateNumber('DIVIDE', 389, 89, 34);
        assert.strictEqual(result, 4.370786516853933);
    });
    it(`Check rounding with negative decimals(Addition)`, function () {
        const result = calculateNumber('SUM', -2.323, -5.6);
        assert.strictEqual(result, -8);
    });
    it(`Check rounding with negative decimals(Subtraction)`, function () {
        const result = calculateNumber('SUBTRACT', -2.323, -5.6);
        assert.strictEqual(result, 4);
    });
    it(`Check rounding with negative decimals(Division)`, function () {
        const result = calculateNumber('DIVIDE', -2.323, -5.6);
        assert.strictEqual(result, 0.3333333333333333);
    });
    it(`Checking very small numbers(Addition)`, function () {
        const result = calculateNumber('SUM', -0.00001, -0.0000002);
        assert.strictEqual(result, -0);
    });
    it(`Checking very small numbers(Subtraction)`, function () {
        const result = calculateNumber('SUBTRACT', -0.00001, -0.0000002);
        assert.strictEqual(result, 0);
    });
    it(`Checking very small numbers(Division)`, function () {
        const result = calculateNumber('DIVIDE', -0.00001, -0.0000002);
        assert.strictEqual(result, 'Error');
    });
    it(`Checking with NaN inputs(Addition)`, function () {
        const result = calculateNumber('SUM', NaN, 5);
        assert.strictEqual(result, NaN);
    });
    it(`Checking with NaN inputs(Subtraction)`, function () {
        const result = calculateNumber('SUBTRACT', NaN, 5);
        assert.strictEqual(result, NaN);
    });
    it(`Checking with NaN inputs(Division)`, function () {
        const result = calculateNumber('DVIDE', NaN, 5);
        assert.strictEqual(result, undefined);
    });
    it(`Checking with Infinity(Addition)`, function () {
        const result = calculateNumber('SUM', Infinity, 90);
        assert.strictEqual(result, Infinity);
    });
    it(`Checking with Infinity(Subtraction)`, function () {
        const result = calculateNumber('SUBTRACT',Infinity, 90);
        assert.strictEqual(result, Infinity);
    });
    it(`Checking with Infinity(Division)`, function () {
        const result = calculateNumber('DIVIDE', Infinity, 90);
        assert.strictEqual(result, Infinity);
    });
    it(`Checking with large numbers(Addition)`, function () {
        const result = calculateNumber('SUM', 1e10, 1e10);
        assert.strictEqual(result, 20000000000);
    });
    it(`Checking with large numbers(Subtraction)`, function () {
        const result = calculateNumber('SUBTRACT', 1e10, 1e10);
        assert.strictEqual(result, 0);
    });
    it(`Checking with large numbers(Divisaion)`, function () {
        const result = calculateNumber('DIVIDE', 1e10, 1e10);
        assert.strictEqual(result, 1);
    });
    it(`Checking with a large number and a small number(Addition)`, function () {
        const result = calculateNumber('SUM', 1e10, -1.2);
        assert.strictEqual(result, 9999999999);
    });
    it(`Checking with a large number and a small number(Subtraction)`, function () {
        const result = calculateNumber('SUBTRACT', 1e10, -1.2);
        assert.strictEqual(result, 10000000001);
    });
    it(`Checking with a large number and a small number(Division)`, function () {
        const result = calculateNumber('DIVIDE', 1e10, -1.2);
        assert.strictEqual(result, -10000000000);
    });
    it(`Checking with an Invalid operation`, function () {
        const result = calculateNumber('MULTIPLY', 1, 2);
        assert.strictEqual(result, undefined);
    });
    it(`Checking with two positive numbers and a rounding them(addition)`, function () {
	    const result = calculateNumber('SUM', 2.0, 2.0);
	    assert.strictEqual(result, 4);
    });
    it(`Checking if it rounds both numbers and adds them(Addition)`, function () {
	    const result = calculateNumber('SUM', 2.3, 1.8);
	    assert.strictEqual(result, 4);
    });
    it(`Checking if two negative numbers add(Addition)`, function () {
	    const result = calculateNumber('SUM', -2.3, -1.8);
	    assert.strictEqual(result, -4);
    });
    it(`Checking for addition between a negative and a postive(Addition)`, function () {
	    const result = calculateNumber('SUM', -2.0, 2.0);
	    assert.strictEqual(result, 0);
    });
    it(`Checking for addition between a positive and a negative(Addition`, function () {
	    const result = calculateNumber('SUM', 2.0, -2.0);
	    assert.strictEqual(result, 0);
    });
    it(`Checking for addition between zero and zero(Addition`, function () {
	    const result = calculateNumber('SUM', 0, 0);
	    assert.strictEqual(result, 0);
    });
})
