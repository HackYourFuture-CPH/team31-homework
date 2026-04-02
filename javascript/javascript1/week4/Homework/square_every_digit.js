console.log("===========Square Every Digit===========");

//This works in VS Code, not being accepted by Codewars :(

function squareDigits(num) {
  const digits = num.toString().split("");
  const realDigits = digits.map(Number);
  let arrayDigits = [];
  for (let i = 0; i < realDigits.length; i++) {
    let squaredDigits = realDigits[i] * realDigits[i];
    arrayDigits.push(squaredDigits);
  }
  return `The squared digits of ${num} is ${arrayDigits.join("")}`;
}

console.log(squareDigits(88888));
