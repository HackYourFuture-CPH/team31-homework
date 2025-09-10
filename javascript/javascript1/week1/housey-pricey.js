console.log('**JAVASCRIPT1-WEEK01: Housey-Pricey**');

//Peter's house

let volumeInMeters = 8 * 10 * 10;
let gardenSizeInM2 = 100;
let actualHouseCost = 2500000;
let calcultaedHouseCost = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

console.log("The actual house price offered to Peter is " + actualHouseCost + ".");
console.log("Our system calculates that Peter should pay no more than " + calcultaedHouseCost + " for this house.");
console.log("SYSTEMS SUGGESTION");
if (actualHouseCost > calcultaedHouseCost) {
    console.info("Hi Peter, offered price of the house is more than our system's calculated price so its not reccommendto buy it.");
}
else {
    console.info("Hi Peter, offered price of the house is less than our system's calculated price so its reccommendto buy it.");
}


// Julia's house

volumeInMeters = 5 * 11 * 8;
gardenSizeInM2 = 70;
actualHouseCost = 1000000;
calcultaedHouseCost = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

console.log("The actual house price offered to Julia is " + actualHouseCost + ".");
console.log("Our system calculates that Julia should pay no more than " + calcultaedHouseCost + " for this house.");
console.log("SYSTEMS SUGGESTION");
if (actualHouseCost > calcultaedHouseCost) {
    console.info("Hi Julia, offered price of the house is more than our system's calculated price so its not reccommendto buy it.");
}
else {
    console.info("Hi Julia, offered price of the house is less than our system's calculated price so its reccommendto buy it.");
}


