// A calculator function
//
function calculateNumber(a, b) {
	const a_round = Math.round(a);
	const b_round = Math.round(b);
	const result = a_round + b_round;
	return result;
}

module.exports = calculateNumber;
