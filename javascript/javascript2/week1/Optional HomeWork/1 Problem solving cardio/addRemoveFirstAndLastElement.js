// This function is designed to add or remove first and last character in given string

function removeChar(str) {
  let sequence = str.split(",");
  if (sequence.length <= 2) {
    return null;
  } else {
    return sequence.slice(1, -1).join(" ");
  }
}

console.log(removeChar("")); // Null
console.log(removeChar("1")); // Null
console.log(removeChar("A1,B2")); // Null
console.log(removeChar("1,2,3")); // 2
console.log(removeChar("1,2,3,4")); // 2 3
console.log(removeChar("1,2,3,4,5")); // 2 3 4
console.log(removeChar("A1,B2,C3,D4,E5")); // B2 C3 D4
console.log(removeChar("A,1,23,456,78,9,20")); // 1 23 456 78 9
