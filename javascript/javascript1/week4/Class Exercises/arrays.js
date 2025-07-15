console.log("=======0.6 Arrays=======");

const food = ["toast", "salad", "burger", "pita", "taco"];
function foodsPrint() {
  for (i = 0; i < food.length; i++) {
    foodPrint = food[i];
    console.log(foodPrint);
  }
}

foodsPrint();

const arrayNumbers = [5, 10, -98, 17.5, 365, -2.5];
function arraySum() {
  let arrayNumbersSum = 0;
  for (let i = 0; i < arrayNumbers.length; i++) {
    arrayNumbersSum += arrayNumbers[i];
  }
  console.log(arrayNumbersSum);
}

arraySum();

const arrayOne = [10, 20, 30, 40, 50];
function arrayRemoval() {
  arrayOne.pop();
  arrayOne.push(60);
  console.log(arrayOne);
}

arrayRemoval();

function largestNumber() {
  arrayOne.sort((a, b) => a - b);
  largestElement = arrayOne[arrayOne.length - 1];
  console.log(`The largest number is ${largestElement}`);
}

largestNumber();
