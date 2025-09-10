console.log('\n***** Homework Javascript Week02 Task 01-FULL NAME" *****');

function getFullname(firstName, surName, useFormalName, gender) {
  if (!firstName || !surName) {
    return "ERROR: *Please enter both First Name and Last Name*";
  } else if (useFormalName) {
    if (gender.toLowerCase() === "male") {
      return "Lord" + " " + firstName + " " + surName;
    } else {
      return "Lady " + firstName + " " + surName;
    }
  } else {
    return firstName + " " + surName;
  }
}

console.log(getFullname("Benjamin", "Hughes")); // Benjamin Hughes
console.log(getFullname("Benjamin", "Hughes", true, "Male")); //Lord Benjamin Hughes
console.log(getFullname("Benjamin", "Hughes", false)); // Benjamin Hughes
console.log(getFullname("Benjamin", "Hughes", true, "female")); //Lady Benjamin Hughes
console.log(getFullname());

console.log(
  "Click on the link to see my code on CodePen without gender functinality" +
    "\nhttps://codepen.io/Wasim51214/pen/PwoYaXe"
); //CodePen link
