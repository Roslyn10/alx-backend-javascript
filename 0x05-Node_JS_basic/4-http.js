// A simple HTTP server that
// Displays "Hello Holberton School!"
// On port 1245, assigned to the variable app
const http = require('http');

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello Holberton School!');
});

app.listen(port, hostname, () => {
});

module.exports = app;
