let numbers = [1, 2, 3, 4];
let newNumbers = [];

// Traditional way
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    newNumbers.push(numbers[i] * 2);
  }
}
//console.log("The doubled numbers are (using For Loop)", newNumbers); // [2, 6]

// asked task in homework
newNumbers = numbers.filter((num) => num % 2 !== 0).map((num) => num * 2);
//console.log("The doubled numbers are (using filter() and map()", newNumbers);
