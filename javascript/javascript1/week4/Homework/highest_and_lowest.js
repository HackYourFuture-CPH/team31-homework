console.log("===========Highest and Lowest===========");

function highAndLow(numbers) {
  const numbersArray = numbers
    .split(" ")
    .map(Number)
    .filter((num) => !isNaN(num));

  if (numbersArray.length === 0) {
    console.log("No valid numbers found.");
    return "No valid numbers";
  }
  const maxNum = Math.max(...numbersArray);
  const minNum = Math.min(...numbersArray);

  console.log(`The highest is ${maxNum} and the lowest is ${minNum}`);
  return `${maxNum} ${minNum}`;
}

highAndLow("1 2 3 4 5");
highAndLow("1 2 -3 4 5");
highAndLow("1 9 3 4 -5");
highAndLow("1 2 3 car 5");
