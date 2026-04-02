console.log("===========Vowel Count===========");

function getCount(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return `The amount of vowels is ${count};`;
}

console.log(getCount("abracadabra"));
