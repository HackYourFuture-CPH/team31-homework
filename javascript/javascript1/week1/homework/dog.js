let dogYearOfBirth = 2020;
let dogYearFuture = 2030;
let dogYear = dogYearFuture - dogYearOfBirth;
let shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears) {
  dogYear = dogYear * 9;
  console.log(
    "our dog will be " + dogYear + " dog years in " + dogYearFuture + "."
  );
} else {
  console.log(
    "our dog will be " + dogYear + " human years in " + dogYearFuture + "."
  );
}
