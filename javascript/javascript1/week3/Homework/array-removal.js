console.log("=========Array removal!=========");


const names = [
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

function removeName(names, nameToRemove) {
  const index = names.indexOf(nameToRemove);
  
  if (index === -1) {
    console.log(`Name not found`)
    return; 
  }

  names.splice(index, 1);

  console.log(names); 
}

removeName(names, nameToRemove);