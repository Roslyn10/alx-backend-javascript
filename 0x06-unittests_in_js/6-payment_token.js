// A function that waits for an answer from an API
function getPaymentTokenFromAPI(success) {
	return new Promise((resolve, reject) => {
		if (success) {
			resolve({ data: `Successful response from the API` });
		}
	});
}

module.exports = getPaymentTokenFromAPI;
