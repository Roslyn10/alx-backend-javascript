// Test file for the function calculateNumber

const assert = require("assert")
const {it, describe } = require("mocha");
const calculateNumber = require("./0-calcul");

describe("calculateNumber()", function () {

	it(`Checking if the numbers round`, function () {
		const result = calculateNumber(10.456, 2.789);
		assert.strictEqual(result, 13);
	});
	it(`Checking if large numbers round`, function () {
		const result = calculateNumber(892829.2389637, 58165673);
		assert.strictEqual(result, 59058502);
	});
	it(`Negative number with a positive number`, function () {
		const result = calculateNumber(-8392, 8392);
		assert.strictEqual(result, 0);
	});
	it(`Checking two zeros`, function () {
		const result = calculateNumber(0, 0);
		assert.strictEqual(result, 0);
	});
	it(`Checking large number and smaller number to round`, function () {
		const result = calculateNumber(-23.34, -902.89);
		assert.strictEqual(result, -926);
	});
	it(`Checking zero and a number to be rounded`, function () {
		const result = calculateNumber(0, 23.56);
		assert.strictEqual(result, 24);
	});
	it(`Checking for a number and no other argument`, function () {
		const result = calculateNumber(783, );
		assert.strictEqual(result, NaN);
	});
	it(`Checking for more than two arguments`, function () {
		const result = calculateNumber(-9823, 2389, 12);
		assert.strictEqual(result, -7434);
	});
	it(`Checking rounding with negative decimals`, function () {
		const result = calculateNumber(-1.5, -2.5);
		assert.strictEqual(result, -3);
	});
	it(`Checking very small numbers`, function () {
		const result = calculateNumber(0.0001, 0.0002);
		assert.strictEqual(result, 0);
	});
	it(`Checking with NaN inputs`, function () {
		const result = calculateNumber(NaN, 5);
		assert.strictEqual(result, NaN);
	});
	it(`Checking with Infinifty`, function () {
		const result = calculateNumber(Infinity, 1);
		assert.strictEqual(result, Infinity);
	});
	it(`Checking with large numbers`, function () {
		const result = calculateNumber(1e10, 1e10);
		assert.strictEqual(result, 20000000000);
	});
	it(`Checking with a large number and a small number`, function () {
		const result = calculateNumber(1e10, -1e10);
		assert.strictEqual(result, 0);
	});
});
