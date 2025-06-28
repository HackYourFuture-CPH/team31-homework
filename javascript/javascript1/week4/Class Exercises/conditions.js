console.log("=======0.4 Conditions=======");

let userAge;

function userAgeCheck(userAge) {
  if (userAge >= 0 && userAge <= 12) {
    console.log("A Child");
    return;
  } else if (userAge >= 13 && userAge <= 19) {
    console.log("A Teenager");
    return;
  }
  if (userAge > 19) {
    console.log("An Adult");
    return;
  } else {
    console.log("Age input was incorrect and can not be below 0");
    return;
  }
}

userAgeCheck(15);

let number;
function numbers(number) {
  if (number > 0) {
    console.log("The number is positive");
  } else if (number < 0) {
    console.log("The number is negative");
  } else {
    console.log("The number is zero");
  }
}

numbers(-305);

let year;
function leapYear(year) {
  if (year % 4 === 0) {
    console.log(`${year} is a Leap Year`);
  } else {
    console.log(`${year} is not a Leap Year`);
  }
}

leapYear(2024);
