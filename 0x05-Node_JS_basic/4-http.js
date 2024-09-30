// A simple HTTP server that
// Displays "Hello Holberton School!"
// On port 1245, assigned to the variable app

const http = require('http');

const app = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello Holberton School!');
  res.end();
}).listen(1245);

module.exports = app;
