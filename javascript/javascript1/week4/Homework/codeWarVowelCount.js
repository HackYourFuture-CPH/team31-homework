function getCount(str) {
  const newStr = str.toLowerCase().replace(/\s+/g, "");
  console.log(newStr);
  const vowels = "aeiou";
  let count = 0;
  for (let i = 0; i < newStr.length; i++) {
    if (vowels.includes(newStr[i])) {
      count += 1;
    }
  }
  return count;
}

console.log(getCount("abrakadabra"));

/*
function getCount(str) {
    const newStr = str.toLowerCase().replace(/\s+/g, "");
    console.log(newStr);
    const vovelCount = {
      a: 0,
      e: 0,
      i: 0,
      o: 0,
      u: 0,
    };
    for (let i = 0; i < newStr.length; i++) {
      if (vovelCount.hasOwnProperty(newStr[i])) {
        vovelCount[newStr[i]] += 1;
      }
    }
    return vovelCount;
  }
  console.log(getCount("My Name Is Wasim and you can tell your authorities"));
    */
