// Accepts a file path as an arugument
// Reads the database asynchronously
// returns a promise
const fs = require('fs').promises;

function readDatabase(filePath) {
	return fs.readDatabase(filePath, 'utf-8')
	.then((data) => {
		return data;
	})
	.catch((error) => {
		throw new Error('Error reading the file: ${error.message}');
	});
}

modules.exports = readDatabase;
