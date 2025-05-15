function HouseyPricey(width, height, depth, gardenSize) {
    return (width * height * depth) * 2.5 * 1000 + gardenSize * 300;
}

let peterHousePrice = HouseyPricey(8, 10, 10, 100);
let peterActualPrice = 2500000;

let juliaHousePrice = HouseyPricey(5, 8, 11, 70);
let juliaActualPrice = 1000000;

if (peterActualPrice > peterHousePrice) {
    console.log("Peter is paying too much.");
} else {
    console.log("Peter is paying a fair price or too little.");
}

if (juliaActualPrice > juliaHousePrice) {
    console.log("Julia is paying too much.");
} else {
    console.log("Julia is paying a fair price or too little.");
}

console.log(peterHousePrice);
console.log(juliaHousePrice);