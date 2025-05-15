function GoodboyOldboy(
  dogYearOfBirth,
  dogYearFuture,
  shouldShowResultInDogYears
) {
  let dogYear = dogYearFuture - dogYearOfBirth;
  if (shouldShowResultInDogYears) {
    console.log(
      `Your dog will be ${dogYear * 7} dog years old in ${dogYearFuture}`
    );
  } else {
    console.log(
      `Your dog will be ${dogYear} human years old in ${dogYearFuture}`
    );
  }
}
console.log(GoodboyOldboy(2017, 2027, true));
