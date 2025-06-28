console.log("==============OPTIONAL HOMEWORK==============");

console.log("==============Remove First and Last Character==============");

function removeChar(str) {
  return str.slice(1, -1);
}

console.log("==============Remove First and Last Character==============");

const sheep = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

function countSheeps(sheep) {
  let sheepCount = 0;
  for (i = 0; i < sheep.length; i++) {
    if (sheep[i] === true) {
      sheepCount += 1;
    }
  }
  return sheepCount;
}
console.log(countSheeps(sheep));

console.log("==============String ends with?==============");
function solution(str, ending) {
  return str.endsWith(ending);
}

console.log("==============7kyu Odd or Even?==============");

function oddOrEven(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  if (sum % 2 === 0) {
    return "even";
  }
  return "odd";
}

console.log("==============Find and count the Danish letters==============");

const danishString = "Jeg har en blå bil";
const danishString2 = "Blå grød med røde bær";

function countDanishletters(string) {
  let sumA = 0;
  let sumO = 0;
  let sumAE = 0;
  for (let char of string.toLowerCase()) {
    if (char === "å") {
      sumA += 1;
    }
    if (char === "ø") {
      sumO += 1;
    }
    if (char === "æ") {
      sumAE += 1;
    }
  }
  sumTotal = sumA + sumO + sumAE;
  return `Total: ${sumTotal}, å: ${sumA}, ø: ${sumO}, æ: ${sumAE} `;
}

console.log(countDanishletters(danishString)); // returns {total: 1, å: 1}
console.log(countDanishletters(danishString2)); // returns {total: 4, æ: 1, ø: 2, å: 1}
