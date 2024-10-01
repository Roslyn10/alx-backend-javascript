// A small HTTP server using the Express module
// Assigned to the variable app
// Displays "Hello Holberton School!" in the page body for the endpoint /
// Listens on port 1245

const express = require('express');
const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port, () => {
});

module.exports = app;
