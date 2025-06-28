
console.log("===== PART 4 =====");


let order2 = [pizzas[1], pizzas[2], pizzas[2]];
let totalPrice2 = pizzaPrices[1] + pizzaPrices[2] + pizzaPrices[2];
let pizzaDiscount = pizzaPrices[1]*0.2;

console.log("Order:", order2);
console.log("Total price:", totalPrice2, "DKK");
console.log("Pizza discount:",pizzaDiscount, "DKK");

const addPlasticBag = true;
if (addPlasticBag){
    let plasticBagPrice = 5;
    console.log ("Added plastic bag:", plasticBagPrice, "DKK");
} else {
    let plasticBagPrice = 0;
    console.log ("No plastic bag added");
}

let finalPrice1 = totalPrice2 - pizzaDiscount;
const addVat = finalPrice1 * 0.25;

console.log("VAT (25%): ", addVat, "DKK");

let finalPrice2 = finalPrice1 + addVat + addPlasticBag;
console.log("Final price: ", finalPrice2, "DKK");   






