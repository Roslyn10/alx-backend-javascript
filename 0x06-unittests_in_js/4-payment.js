// A function that calculaates something
function sendPaymentRequestToApi(totalAmount, totalShipping) => {
        totalCost = calculateNumber('SUM', totalAmount, totalShipping);
        console.log(`The total is: ${totalCost}`);
};

module.exports = sendPaymentRequestToApi;
