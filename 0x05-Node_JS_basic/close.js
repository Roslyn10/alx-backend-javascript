// main.js

// Function to display a goodbye message
function displayGoodbyeMessage() {
    console.log("Goodbye! Thank you for using the program.");
}

// Listen for the exit event
process.on('exit', () => {
    displayGoodbyeMessage();
});

// Listen for SIGTERM (e.g., when the process is terminated)
process.on('SIGTERM', () => {
    displayGoodbyeMessage();
    process.exit(0); // Exit the program
});

// Example logic to keep the program running
console.log("Running the program. You can close it normally.");

// Simulate some work with a timeout
setTimeout(() => {
    console.log("Finishing work...");
    process.exit(0); // Exit normally after work is done
}, 0); // Change the time as needed
