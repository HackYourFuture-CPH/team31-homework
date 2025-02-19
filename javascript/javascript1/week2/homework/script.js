function getFullName(firstName, lastName) {
  const fullName = firstName + " " + lastName;
  return fullName;
}

const fullName1 = getFullName("Anita", "Ngah");
console.log(fullName1);

function getFullNameFormel(
  firstName,
  lastName,
  useFormel = false,
  gender = "male"
) {
  if (!firstName || !lastName) {
    return "pleaseProvideFullName";
  }
  let title = "";
  if (useFormel) {
    if (gender === "female") {
      title = "lady";
    } else {
      title = "lord";
    }
  }
  const fullName = title + " " + firstName + " " + lastName;
  return fullName;
}
const fullName2 = getFullNameFormel("Anita", "Ngah", true, "female");
console.log(fullName2);

const fullName3 = getFullNameFormel("Valery", "Che", false, "male");
console.log(fullName3);

function getEventWeekday(daysFromToday) {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date().getDay();
  const eventDay = today + daysFromToday;
  const exactEventDay = eventDay % 7;

  return weekdays[exactEventDay];
}
// With todays weekday a wednesday
console.log(getEventWeekday(8)); // Logs out "Thursday"

// With todays weekday a wednesday
console.log(getEventWeekday(2)); // Logs out "friday"

function getIdeaOnWhatToWearToday(tempreture) {
  if (tempreture < 0) {
    return "its winter we can wear the coat and down jacket";
  } else if (tempreture >= 0 && tempreture < 10) {
    return "its winter we can wear the coat and pants and sweater";
  } else if (tempreture >= 10 && tempreture <= 20) {
    return "its autumm we can wear light coat and pants and huddies";
  } else if (tempreture > 20 && tempreture <= 30) {
    return "its summer we can wear tshirt and pants and socks";
  } else {
    return "its too hot we can wear shorts and tshirts and take lots of liquid";
  }
}
console.log(getIdeaOnWhatToWearToday(20));
console.log(getIdeaOnWhatToWearToday(20));

let class07Student = [];
function addNewStudent(studentName) {
  if (studentName.trim() === "") {
    console.log("can not add empty student name");
    return;
  }
  if (class07Student.includes(studentName)) {
    console.log(studentName + " is already in the class");
    return;
  }
  if (studentName === "queen") {
    class07Student.push(studentName);
    console.log("queen has been added");
    return;
  }

  if (class07Student.length >= 6) {
    console.log("we are full.we cannot add more people to the class");
    return;
  }
  class07Student.push(studentName);
}

function getNumberOfStudents() {
  return class07Student.length;
}
addNewStudent("Anita");
addNewStudent("Naomi");
addNewStudent("Ivy");
addNewStudent("Eliora");
addNewStudent("Valery");
addNewStudent("Bame");
addNewStudent("Afou");
addNewStudent("queen");

console.log(getNumberOfStudents() + " students are there in the class ");

const amountToSpend = Math.random() * 100;
const purchaseCandyPrices = [];
function addCandy(candyType, candyWieght) {
  let price = 0;
  if (candyType.toLowerCase() === "sweets") {
    price = 0.5 * candyWieght;
  } else if (candyType.toLowerCase() === "chocolate") {
    price = 0.7 * candyWieght;
  } else if (candyType.toLowerCase() === "toffee") {
    price = 1.1 * candyWieght;
  } else if (candyType.toLowerCase() === "chewing-gum") {
    price = 0.03 * candyWieght;
  }
  purchaseCandyPrices.push(price);
}

function canYouBuyMoreCandy() {
  let totalExpenditure = 0;
  for (let i = 0; i < purchaseCandyPrices.length; i++) {
    totalExpenditure += purchaseCandyPrices[i];
  }
  if (totalExpenditure < amountToSpend) {
    console.log("yes we can buy more");
    return;
  } else {
    console.log("we canot buy more");
    return;
  }
}
addCandy("sweet", 20);

addCandy("chewing-gum", 50);

canYouBuyMoreCandy();
