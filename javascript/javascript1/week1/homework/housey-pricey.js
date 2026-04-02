

console.log("======Exercise Housey pricey======");

// Peter's house price
let houseEstimatedCost = 2500000;
let volumeInMeters = 8 * 10 * 10;
let gardenSizeInM2 = 100;
let houseActualPrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
console.log("Peter's estimated house price is:", houseActualPrice);
if (houseActualPrice < houseEstimatedCost) {
    console.log("By paying", houseEstimatedCost.toLocaleString()+" Peter is overpaying for the house.");
} else {
    console.log("Peter, my friend, that price is a steal!");
}



// Julia's house price
houseEstimatedCost = 1000000;
volumeInMeters = 5 * 11 * 8;
gardenSizeInM2 = 70;
houseActualPrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
console.log("Julia's estimated house price is:", houseActualPrice);
if (houseActualPrice < houseEstimatedCost) {
    console.log("By paying", houseEstimatedCost.toLocaleString()+" Julia is overpaying for the house.");
} else {
    console.log("Julia, my friend, the price of", houseEstimatedCost.toLocaleString(),"is a steal!");    
}