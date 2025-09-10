// ************************************************************OBJECTS**************************************************************

const obj1 = {
  yourName: "Wasim",
  age: 25,
  city: "Karachi",
  country: "Pakistan",
  education: "Bachelors",
  profession: "Software Engineer",
};

if (obj1.age < 30) {
  console.log(
    `Hi ${obj1.yourname}.You are ${obj1.age} years old. You are from ${obj1.city}, ${obj1.country}. You have done ${obj1.education}. You are a ${obj1.profession}.`
  );
} else {
  console.log("Record Not For Found");
}
//Loop for iterating object properties.
for (let key in obj1) {
  console.log(key + obj1[key]);
}
//Extracting Properties from object and assigning to variables
const { yourname = "Not Found", prOfession = "Not Found" } = obj1;
console.log(yourname);
console.log(prOfession);
console.log(yourname + " " + prOfession);

const user = {};
user.name = "John";
user.surname = "Smith";
console.log(user); // To confirm adding properties
user.name = "Peter";
console.log(user); // To confirm updating properties
delete user.surname;
console.log(user);
user.surname = "Smith";

const keysOfObject = Object.keys(user); //To check names of keys and make array of keys name of an object
const valuesOfObject = Object.values(user); // To check values of the Object againt the Keys and making an Array of values
console.log(keysOfObject);
console.log(valuesOfObject);

function isEmpty(obj) {
  // to check object stats
  for (let key in obj) {
    //Itrating the properties of object
    if (Object.keys(obj).length === 0);
    return user; // Object has at least one property
  }
  return "Object is empty"; // Object has no properties
}

console.log(isEmpty(user));

delete user.name;
delete user.surname;

console.log(isEmpty(user));

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
for (let i in salaries) {
  sum += salaries[i];
}

console.log(sum); // 390

let test = {
  no1: 2,
  no2: 3,
  no3: "24",
  no4: "wasim",
};

console.log(test);

for (let i in test) {
  if (typeof test[i] === "string") {
    test[i] = test[i].toUpperCase().split("").reverse().join("");
  }
}

console.log(test);
