function squareDigits(num) {
  let number = num.toString().split("");
  for (let i = 0; i < number.length; i++) {
    number[i] = Math.pow(Number(number[i]), 2);
  }
  return Number(number.join(""));
}

console.log(squareDigits(9070));
