// A small HTTP server using the Express module
// Assigned to the variable app
// Displays "Hello Holberton School!" in the page body for the endpoint /
// Listens on port 1245

const express = require('express');
const app = express();

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
}).listen(1245);

module.exports = app;
