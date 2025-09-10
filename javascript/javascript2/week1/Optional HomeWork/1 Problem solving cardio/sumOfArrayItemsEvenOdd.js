function oddOrEven(array) {
  if (array.length === 0) {
    return "even";
  } else {
    const sum = array.reduce((acc, num) => acc + num, 0);

    return sum % 2 === 0 ? "even" : "odd";
  }
}

console.log(oddOrEven([0]));
console.log(oddOrEven([0, 1, 4]));
console.log(oddOrEven([0, -1, -5]));
console.log(oddOrEven([1, 2, 3, 4]));
console.log(oddOrEven([1, 2, 3]));
