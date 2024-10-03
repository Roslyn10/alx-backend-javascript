const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
	let calculateNumberStub;

	beforeEach(() => {
		calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
	});

	afterEach(() => {
		calculateNumberStub.restore();
	});

	it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
		const consoleSpy = sinon.spy(console, 'log');
		sendPaymentRequestToApi(100, 20);

		expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
		expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
		consoleSpy.restore();
	});
});
