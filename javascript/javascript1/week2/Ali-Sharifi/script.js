function getFullname(firstname, surname) {
  return firstname + " " + surname;
}

const fullname1 = getFullname("Ali", "Sharifi");
const fullname2 = getFullname("Christopher", "Hansen");

console.log(fullname1); // "Ali Sharifi"
console.log(fullname2); // "Christopher Hansen"