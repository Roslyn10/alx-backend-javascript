// More in depth calculator
function calculateNumber(a, b, operation) {
    const a_round = Math.round(a);
    const b_round = Math.round(b);

    let result;

    switch (operation) {
        case 'SUM':
            result = a_round + b_round;
            break;
        case 'SUBTRACT':
            result = a_round - b_round;
            break;
        case 'DIVIDE':
            if (b_round === 0) {
		    return 'Error';
            }
            result = a_round / b_round;
            break;
    }

    return result;
}

module.exports = calculateNumber;
