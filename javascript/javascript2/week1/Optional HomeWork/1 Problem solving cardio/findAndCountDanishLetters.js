function countDanishLetters(danishString) {
  const danishLetters = ["æ", "ø", "å"];
  let totalFound = 0;
  let counts = { æ: 0, ø: 0, å: 0 };

  for (let char of danishString) {
    if (danishLetters.includes(char)) {
      counts[char]++;
      totalFound++;
    }
  }

  counts.total = totalFound;
  return counts;
}

const danishString = "Jeg har en blå bil";
console.log(countDanishLetters(danishString)); // { 'æ': 0, 'ø': 0, 'å': 1, total: 1 }

const danishString2 = "Blå grød med røde bær";
console.log(countDanishLetters(danishString2)); // { 'æ': 1, 'ø': 2, 'å': 1, total: 4 }
