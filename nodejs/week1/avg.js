// Get command line arguments (remove first two arguments which are node path and file path)
const numbers = process.argv.slice(2);

// Check if any arguments are provided
if (numbers.length === 0) {
  console.error("Please Provide At Least One Number");
  process.exit(1);
}

// Convert arguments to numbers and validate them
const validNumbers = numbers.map((num) => {
  const converted = Number(num);
  if (isNaN(converted)) {
    console.error(`Error: "${num}" Is Not A Valid Number!`);
    process.exit(1);
  }
  return converted;
});

// Calculate average
const sum = validNumbers.reduce((acc, curr) => acc + curr, 0);
const average = sum / validNumbers.length;

// Display result
console.log(average);
