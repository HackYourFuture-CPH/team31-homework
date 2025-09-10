console.log("Week 3 Practice, ARRAYS");

// ****************************************************************************ARRAYS***************************************************************************

let arr1 = [2, 0, 1, 5, 2];
let arr2 = new Array(
  "XYZ",
  1,
  "Y1",
  "Wasim",
  "Aayan",
  "Jamshaid",
  "Ali",
  "Kashif"
);

if (arr2[1] === "Aayan") {
  arr2[1] = "AAYAN";
  console.log("Done");
} else {
  console.log("Not Found");
}
console.log(arr2);

arr2.push("Ahsan"); // Add element at the end of the array
console.log(arr2);

arr2.pop(); // Remove element from the end of the array
console.log(arr2);

arr2.shift(); // Remove element from the start of the array
console.log(arr2);

arr2.unshift("WASIM"); // Add element at the start of the array
console.log(arr2);

arr2.splice(2, 0, "Ahsan", "Ali"); // Add element at the specific index
console.log(arr2);

console.log(arr2.concat(arr1)); // Concatenate two arrays
console.log(arr2);
console.log(arr1);

console.log("arr2 length :" + arr2.length); // Get the length of the array
console.log("arr1 length :" + arr1.length);

arr2.reverse(); // Reverse the array
console.log(arr2);
arr1.reverse();
console.log(arr1);

arr2.sort(); // Sort the array
console.log(arr2);
arr1.sort();
console.log(arr1);

arr2.splice(2, 2); // Remove element from the specific index
console.log(arr2);

arr2.fill("FILL", 0, 2); // Fill the array with the specific value
console.log(arr2);

arr2.splice(0, 2, "XYZ", "AAYAN"); // Replace the element with the specific value
console.log(arr2);

arr2.copyWithin(2, 0, 1); // Copy the element from the specific index
console.log(arr2); // Filter the array
console.log(
  arr1.filter((value) => {
    return value > 2 && value < 6;
  })
);

console.log(arr1); //Someother Functions on Array

console.log(arr2);
console.log(arr2.every((x) => x === "Wasim"));
console.log(arr2.some((x) => x === "Wasim"));

console.log(arr2.indexOf("Wasim"));

arr2.sort();
console.log(arr2);

console.log(arr1.indexOf(2));
let indexOfAll2s = arr1.map((value, index) => (value === 2 ? index : -1));
console.log(indexOfAll2s);
console.log(
  "Index of all 2's is :" + indexOfAll2s.filter((index) => index !== -1)
);

let fruits = ["Apple", "Orange", "Plum"];

for (let fruit of fruits) {
  console.log(fruit);
}

for (let arr of arr1) {
  console.log(arr);
}

for (let arr of arr2) {
  console.log(arr);
}

arr3 = arr2.sort();
for (let arr of arr3) {
  console.log(arr);
}

let date = "2222-12-22"; //to reverse a string
console.log(date);
let testDate = date.split("-");
testDate = testDate.reverse();
console.log(testDate);
date = testDate.join("-");
console.log(date);
