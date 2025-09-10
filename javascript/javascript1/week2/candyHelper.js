//CANDY HELPER APPLICATION FUNCTIONALITY

console.log("\n***** Homework Javascript Week02 Task 05-CANDY HELPER *****");

const boughtCandyPrices = [];

function addCandy(candyType, weight) {
  let pricePerGram;
  let totalPrice;
  if (!candyType) {
    console.log("You Must Enter Some Candy Name");
  } else {
    candyType = candyType.trim().replace(/\s+/g, "").toLowerCase();
  }
  if (candyType === "sweet") {
    pricePerGram = 0.5;
  } else if (candyType.toLowerCase() === "chocolate") {
    pricePerGram = 0.7;
  } else if (candyType === "toffee") {
    pricePerGram = 1.1;
  } else if (candyType === "chewing-gum") {
    pricePerGram = 0.03;
  } else {
    return "Invalid Candy Type";
  }
  totalPrice = pricePerGram * weight;
  boughtCandyPrices.push(totalPrice);
}

function canBuyMoreCandy() {
  let amountToSpend = Math.random() * 100;
  console.log("Amount to spend: " + amountToSpend);
  let totalPrice = 0;
  for (let i = 0; i < boughtCandyPrices.length; i++) {
    totalPrice += boughtCandyPrices[i];
  }
  console.log("Your total price for buying candies is : " + totalPrice);
  amountToSpend -= totalPrice;
  console.log("Now you have " + amountToSpend + " to spend");
  if (amountToSpend < 0) {
    //Its extra check because sometimes amountToSpend is negative just to add an extra check.
    console.log(
      "You are trying to spend more than you have! so please return some candies"
    );
  } else if (totalPrice < amountToSpend) {
    console.log("You can buy more, so please do!");
  } else {
    console.log("Enough candy for you!");
  }
}

if (addCandy("Sweet", 50) === "Invalid Candy Type") {
  console.log("Invalid Candy Type");
} else {
  canBuyMoreCandy();
}
