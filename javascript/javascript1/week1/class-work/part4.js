console.log("==== PART 4 ====")
const order2 =[1, 2, 2];


const totalPrice2 = pizzaPrices[ order2[0]] + pizzaPrices[order2[1]] + pizzaPrices[order2[2]];
console.log(totalPrice2)
console.log("order no 2",order2)
console.log("total Price for order 2",totalPrice2)
const firstPizzaDiscount=pizzaPrices[ order2[0]]*0.2
let discountedPrice=totalPrice2-firstPizzaDiscount
console.log ("total price after discount is discountedPrice",firstPizzaDiscount,"DKK")
console.log ("total price after discount is discountedPrice",firstPizzaDiscount,"DKK")
const addPlasticBag=true
if(addPlasticBag){
    const PlasticBagPrice = 5
    discountedPrice=discountedPrice+PlasticBagPrice

}
let vat =discountedPrice*0.25
console.log("VAT(25%",vat,"DKK")
let finalPrice =discountedPrice + vat
console.log("Final Price After Vat and discount",finalPrice,"DKK")
let dileveryFee = 0
if(totalPrice2>300){
    dileveryFee=50
    console.log ("dileveryFeeAdded",dileveryFee,"DKK")
}
console.log("after Delivery the final price is")
finalPrice =finalPrice +dileveryFee
console.log(finalPrice)





