//Used various ways as well as the one asked in homework task to remove an item from array using index.
console.log("\n*******Removing Item in Array***************");
let names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Rasmus";
console.log(names);

const index = names.indexOf(nameToRemove);
if (index >= 0) {
  names.splice(index, 1); // This is asked in homework assignment
  console.log(`${nameToRemove} removed from the list`);
} else {
  console.log(`${nameToRemove} is not found in the list`);
}
console.log(names);
