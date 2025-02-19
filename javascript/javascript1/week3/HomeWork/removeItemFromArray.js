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
const nameToRemove = "Ahmad";
console.log(names);
const index = names.indexOf(nameToRemove);
names.splice(index, 1); // This is asked in homework assignment
console.log(names);

names.splice(index, 0, nameToRemove); // I added the removed name back to array to do it some other way.
console.log(names);

const newNames = names.filter((name) => name !== nameToRemove); // Way Two . . . Just To Learn how we can get new array withouh any specific item
console.log(newNames);

console.log(names);
const newArray = names.slice(0, index).concat(names.slice(index + 1)); // Way Three . . . how we can acheive the same result
console.log(newArray);
names = names.slice(0, index).concat(nameToRemove, names.slice(index + 1)); //I changed the names array from const to let for assignment in this statement
console.log(names);
