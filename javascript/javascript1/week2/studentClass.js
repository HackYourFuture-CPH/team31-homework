//STUDENT CLASS FUNCTIONALITY

console.log(
  "\n***** Homework Javascript Week02 Task 04-ADD STUDENTS TO CLASS *****"
);

const class07Students = [];

function addStudentToClass(studentName) {
  if (studentName === "") {
    console.log("ERROR: *You cannot add an empty string to a class 07*");
    return;
  }
  if (class07Students.includes(studentName)) {
    console.log(
      "ERROR: *Student " + studentName + " is already in the class 07"
    );
    return;
  }
  if (studentName === "Queen") {
    class07Students.push(studentName);
    console.log(studentName + " has been added to class 07");
    return;
  }
  if (class07Students.length < 6) {
    class07Students.push(studentName);
    console.log(studentName + " has been added to class 07");
    return;
  }
  if (class07Students.length >= 6 && studentName !== "Queen") {
    console.log("ERROR: *Cannot add more students to class 07*");
    return;
  }
}

function getNumberOfStudents() {
  return class07Students.length;
}

addStudentToClass("Benjamin");
addStudentToClass("Wasim");
addStudentToClass("");
addStudentToClass("Kaleem");
addStudentToClass("Jamshaid");
addStudentToClass("Johan");
addStudentToClass("Benjamin");
addStudentToClass("Shahveer");
addStudentToClass("King");
addStudentToClass("Queen");
addStudentToClass("NewStudent");

console.log("Number of students in class 07 is: 0" + getNumberOfStudents());
console.log(class07Students);

console.log(
  "Click on the link to see my code on CodePen" +
    "\nhttps://codepen.io/Wasim51214/pen/jEONeJJ"
);
