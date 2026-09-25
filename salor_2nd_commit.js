// Import Node's built-in Operating System module
const os = require('os');

console.log("Hello! This is a basic Node.js script.");
console.log("--------------------------------------");

// Get system details
const systemType = os.type();
const cpuCores = os.cpus().length;
// Convert total memory from bytes to gigabytes
const totalMemoryGB = Math.round(os.totalmem() / (1024 * 1024 * 1024));

// Print the results to the terminal
console.log(`Operating System: ${systemType}`);
console.log(`CPU Cores: ${cpuCores}`);
console.log(`Total Memory: ${totalMemoryGB} GB`);