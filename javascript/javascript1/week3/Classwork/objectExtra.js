let objTest = {
  "First Name": "Sayyed",
  "Last Name": "Bukhari",
  loves: () => {
    console.log("Cats and Dogs");
  },
};
console.log(objTest);

delete objTest["First Name"];
const obj2 = new Object();
console.log(objTest);

objTest.age = 5;
console.log(objTest);

objTest["gender"] = "male";
console.log(objTest);

delete objTest.age;
console.log(objTest);

obj2.name = "Wasim";
obj2["age"] = 22;
obj2.location = "PAK";
console.log(obj2);

delete obj2.age;
console.log(obj2);

console.log(objTest.name, objTest["gender"]);
let property = "location";
console.log(`${obj2.name} ${obj2[property]}`);

for (let key in obj2) {
  //LOOP
  console.log(`${key}: ${obj2[key]}`);
}

for (let key in objTest) {
  console.log(`${key}: ${objTest[key]}`);
}

console.log(objTest.name);

let myClassMates = [];

function addStudent(student) {
  myClassMates.push(student);
}

addStudent({
  name: "Wasim",
  age: 25,
});
addStudent({
  name: "Aayan",
  age: 5,
});
addStudent({
  name: "Hamayal",
  age: 20,
});
addStudent({
  name: "Hamayal",
  age: 20,
});
addStudent({
  name: "Aayan",
  age: 20,
});
let ifTrueCounter1 = 0;

for (let i = 0; i < myClassMates.length; i++) {
  if (myClassMates[i].name === "Aayan") {
    ifTrueCounter1 += 1;

    console.log(
      `Record ${ifTrueCounter1}: We found ${myClassMates[i].name} at index ${i}`
    );
  }
}
let ifTrueCounter2 = 0;
for (let i = 0; i < myClassMates.length; i++) {
  if (myClassMates[i].name === "Aayan") {
    ifTrueCounter2 += 1;

    myClassMates[i].age = 100;
    console.log(
      `Record ${ifTrueCounter2}: ${myClassMates[i].name} found and its age updated, His new age is: ${myClassMates[i].age} at index ${i}`
    );
  }
}
