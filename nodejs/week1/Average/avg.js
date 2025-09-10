import { avg } from "./calculate.js";

const numbers = process.argv.slice(2).map(Number);

try {
  const result = avg(numbers);
  console.log(`The average is: ${result}`);
} catch (error) {
  console.error(error.message);
}
