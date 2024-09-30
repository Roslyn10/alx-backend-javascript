const readline = require("readline");

let r1 = readline.createInterface(
  process.stdin, process.stdout
);

r1.question('What is your age? ', (age) => {
console.log('Your age is: ' + age);


function displayGoodbyeMessage() {
    console.log("Goodbye! Thank you for using the program.");
}

process.on('exit', () => {
    displayGoodbyeMessage();
});

process.on('SIGTERM', () => {
    displayGoodbyeMessage();
    process.exit(0);
});

console.log("Running the program. You can close it normally.");

setTimeout(() => {
    console.log("Finishing work...");
    process.exit(0);
}, 5000);
