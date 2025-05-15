//Formal fullname
function getFullname(FirstName, LastName, useFormalName = false, gender = "") {
  FirstName = FirstName.trim();
  LastName = LastName.trim();

  if (!firstname && !lastname) {
    return "Please provide a name";
  }

  if (useFormalName) {
    if (gender.toLowerCase() === "female") {
      return `Lady ${FirstName} ${LastName}`;
    } else {
      return `Lord ${FirstName} ${LastName}`;
    }
  } else {
    return `${FirstName} ${LastName}`;
  }
}
//Event application

function getEventWeekday(eventInDays) {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const todayIndex = new Date().getDay();
  const eventDayIndex = (todayIndex + eventInDays) % 7;
  return weekdays[eventDayIndex];
}

console.log(getEventWeekday(5));
console.log(getEventWeekday(9));

//Weather wear
function whatToWear(temperature) {
  if (temperature < 0) {
    return "warm coat, gloves, and a thick scarf";
  } else if (temperature < 15) {
    return "light sweater and jeans";
  } else {
    return "bikini";
  }
}

const clothesToWear = whatToWear(18);
console.log(clothesToWear);

//addStudentToClass function
const class07Students = [];

function addStudentToClass(studentName) {
  if (!studentName) {
    console.log("You cannot add an empty name to a class");
    return;
  }
  if (class07Students.includes(studentName) && studentName !== "Queen") {
    console.log(`Student ${studentName} is already in the class`);
    return;
  }
  if (studentName !== "Queen" && class07Students.length >= 6) {
    console.log("Cannot add more students to class 07");
    return;
  }
  class07Students.push(studentName);
}

function getNumberOfStudents() {
  return class07Students.length;
}

addStudentToClass("Ali");
addStudentToClass("Mikkel");
addStudentToClass("Qusmos");
addStudentToClass("Sara");
addStudentToClass("Soraya");
addStudentToClass("Mahsa");

addStudentToClass("Niels");
addStudentToClass("Ali");
addStudentToClass("");
addStudentToClass("Queen");

console.log("Final students array:", class07Students);
console.log("Number of students:", getNumberOfStudents());

//candy helper optional
const boughtCandyPrices = [];
const amountToSpend = Math.random() * 100;

function addCandy(candyType, weight) {
  candyType = candyType.toLowerCase();
  let pricePerGram;

  if (candyType === "sweet") {
    pricePerGram = 0.5;
  } else if (candyType === "chocolate") {
    pricePerGram = 0.7;
  } else if (candyType === "toffee") {
    pricePerGram = 1.1;
  } else if (candyType === "chewing-gum") {
    pricePerGram = 0.03;
  }
  boughtCandyPrices.push(pricePerGram * weight);
}

function getTotalCandyPrice() {
  return boughtCandyPrices.reduce((sum, price) => sum + price, 0);
}

function canBuyMoreCandy() {
  return getTotalCandyPrice() < amountToSpend;
}

addCandy("Sweet", 20);
addCandy("CHOCOLATE", 30);
addCandy("toffee", 10);

const totalPrice = getTotalCandyPrice();
console.log(`Total Price: ${totalPrice}`);
console.log(`Amount to Spend: ${amountToSpend}`);

if (canBuyMoreCandy()) {
  console.log(
    `You can buy more, so please do! (Total Price: ${getTotalCandyPrice()} / Budget: ${amountToSpend})`
  );
} else {
  console.log(
    `Enough candy for you! (Total Price: ${getTotalCandyPrice()} / Budget: ${amountToSpend})`
  );
}
