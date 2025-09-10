const testNumbersArray = [4, 3, 9, 7, 2, 1];

function squareOrSquareRoot(array) {
  return array.map((number) => {
    let squareRoot = Math.sqrt(number);
    if (squareRoot % 1 === 0) {
      return squareRoot;
    } else {
      return number * number;
    }
  });
}
console.log(squareOrSquareRoot(testNumbersArray));
