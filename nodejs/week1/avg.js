const args = process.argv.slice(2);
if (!args.length) return console.log("Please provide some numbers.");
const numbers = args.map(Number);
if (numbers.some(isNaN)) return console.log("Only numbers are allowed.");
console.log(numbers.reduce((a, b) => a + b) / numbers.length);
