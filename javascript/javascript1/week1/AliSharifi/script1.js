function AgeIfy(yearOfBirth, yearFuture) {
  const age = yearFuture - yearOfBirth;
  consolePrint = "You will be " + age + " years old in " + yearFuture + ".";
  return consolePrint;
}

console.log(AgeIfy(1988, 2045));
