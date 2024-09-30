// Function that prints a message to stdout and recieves an input
const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
r1.question('Welcome to Holberton School, what is your name?\n', (name) => {
  console.log('Your name is: ' + name);
  r1.close();
});

function displayGoodbyeMessage () {
  console.log('This important software is now closing');
}

process.on('exit', () => {
  displayGoodbyeMessage();
});
