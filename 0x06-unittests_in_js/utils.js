const Utils = {
	calculateNumber(a, b, operation) {
    const a_round = Math.round(a);
    const b_round = Math.round(b);

    let result;

    switch (operation) {
        case 'add':
            result = a_round + b_round;
            break;
        case 'subtract':
            result = a_round - b_round;
            break;
        case 'multiply':
            result = a_round * b_round;
            break;
        case 'divide':
            if (b_round === 0) {
		    return 'Error';
            }
            result = a_round / b_round;
            break;
    }

    return result;
}

module.exports = Utils;
