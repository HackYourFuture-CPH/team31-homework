function GoodboyOldboy(
  dogYearOfBirth,
  dogYearFuture,
  shouldShowResultInDogYears
) {
  let dogYear = dogYearFuture - dogYearOfBirth;
  if (shouldShowResultInDogYears) {
    return `Your dog will be ${dogYear * 7} dog years old in ${dogYearFuture}`;
  } else {
    return `Your dog will be ${dogYear} human years old in ${dogYearFuture}`;
  }
}
console.log(GoodboyOldboy(2017, 2027, false));
