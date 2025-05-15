// 6kyu Vowel Count
function countVowels(str) {
  return [...str].filter((char) => "aeiou".includes(char)).length;
}
console.log(countVowels("hello world")); // Output: 3

//Digit*Digit
function squareDigits(num) {
  return parseInt(
    num
      .toString()
      .split("")
      .map((digit) => Math.pow(parseInt(digit), 2))
      .join(""),
    10
  );
}

console.log(squareDigits(9349));
console.log(squareDigits(865));

//7kyu Highest and Lowest
function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

console.log(minMax([1, 2, 3, 4, 5])); // [1, 5]
console.log(minMax([2334454, 5])); // [5, 2334454]
console.log(minMax([1])); // [1, 1]
