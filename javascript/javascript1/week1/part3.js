


console.log("===== PART 3 =====");

restaurantName = owner+"'s Pizzeria";
console.log(restaurantName);   
owner = "Maria";
restaurantName = owner+"'s Pizzeria";
console.log(restaurantName);   

const pizzas = [pizzaBbqChicken, pizzaMargherita, pizzaPepperoni, pizzaPesto, pizzaWhite];  
const pizzaPrices = [pizzaBbqChickenPrice, pizzaMargheritaPrice, pizzaPepperoniPrice, pizzaPestoPrice, pizzaWhitePrice];  
 
console.log("Our Menu");
console.log("#1", pizzas[0], "-", pizzaPrices[0], "DKK");
console.log("#2", pizzas[1], "-", pizzaPrices[1], "DKK");
console.log("#3", pizzas[2], "-", pizzaPrices[2], "DKK");
console.log("#4", pizzas[3], "-", pizzaPrices[3], "DKK");   
console.log("#5", pizzas[4], "-", pizzaPrices[4], "DKK");   


let order = [pizzas[3], pizzas[2], pizzas[4], pizzas[3], pizzas[1]];

let totalPrice = pizzaPrices[3] + pizzaPrices[2] + pizzaPrices[4] + pizzaPrices[3] + pizzaPrices[1];
console.log("Order:", order);
console.log("Total price:", totalPrice, "DKK");

