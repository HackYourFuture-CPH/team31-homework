// Take an array and remove every second element from the array.
// Always keep the first element and start removing with the next element.

const testArray1 = ["Keep", "Remove", "Keep", "Remove", "Keep"]; // remove all "Remove" to make ["Keep", "Keep", "Keep"]
const testArray2 = [1, 0, 1, 0, 1]; // Remove all "0" to make [1, 1, 1]
let result;
function removeEveryOther(arr) {
  return arr.reduce((acc, curr, index) => {
    if (index % 2 === 0) {
      acc.push(curr);
    }
    return acc;
  }, []);
}

result = removeEveryOther(testArray1);
console.log(result);
result = removeEveryOther(testArray2);
console.log(result);
