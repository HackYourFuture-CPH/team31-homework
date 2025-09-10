function highAndLow(numbers) {
  const numbersArr = numbers.split(" ").map(Number);
  const highestNumber = Math.max(...numbersArr);
  const lowestNumber = Math.min(...numbersArr);
  return `${highestNumber} ${lowestNumber}`; // ...
}

console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5"));
console.log(highAndLow("1 9 3 4 -5"));

// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.
