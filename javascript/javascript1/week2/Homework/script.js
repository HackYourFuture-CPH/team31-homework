

//Homework Week 2 - JavaScript 1
// https://www.freecodecamp.org/vadimto

console.log("======= Homework Week 2 =======");

//Exercise 1
console.log("======= Exercise 1 =======");


function getFullname (firstname, surname){
    return firstname + " " + surname;
}

console.log(getFullname("Albert", "Grimaldi"));
const fullname1 = getFullname("Carl-Philip", "Bertil");
console.log(fullname1);
const fullname2 = getFullname("George-Alexander", "Louis");
console.log(fullname2);



//Exercise 2
console.log("======= Exercise 2 =======");


function formalName (firstName, surname, useFormalName){
    if (!firstName || firstName.trim() === "") {
        return "The first name you entered is invalid, please fill the name correctly!";
    } 
    if (!surname || surname.trim() === "") {
        return "The last name you entered is invalid, please fill the name correctly!";
    } 

    const fullName = firstName + " " + surname;
    if (useFormalName){
        return "Lord " + fullName;
    } else {
        return fullName;
    }
}

console.log(formalName("", "Grimaldi", true));
console.log(formalName("Albert", "Grimaldi", false));
console.log(formalName("Carl-Philip", "Bertil", true));
console.log(formalName("Carl-Philip", "      ", false));
console.log(formalName("George-Alexander", "Louis", true));
console.log(formalName("George-Alexander", "Louis", false));

//If the the person was a woman I would have used "Lady" instead of "Lord".
//To achieve that I would have added an if to check if the person
//Is actually a woman or not. That would require also a checkbox in the form.
//If the checkbox is checked then the person is Lady, if not then the person is Lord.
//In formula i would add a new parameter called isWoman and check if it is true or false.
//This if statement would be inside the main if statement.
//If it is true then the person is Lady, if not then the person is Lord.
//If the person wouldn't chose any of the options then the person would be called by the full name.

/*
function formalName (firstName, surname, useFormalName, isWoman){
    const fullName = firstName + " " + surname;
    if (useFormalName){
        if (isWoman){
            return "Lady " + fullName;
        } else {
            return "Lord " + fullName;
        }
    } else {
        return fullName;
    }s
}
*/


//Exercise 3
console.log("======= Exercise 3 =======");


function getEventWeekday (daysFomToday){
    const today = new Date();
    const eventDate = new Date();
    eventDate.setDate(today.getDate() + daysFomToday);
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const eventDay = eventDate.getDay();    
    const dd = String(eventDate.getDate()).padStart(2, '0'); //Applied the technique we discussed in class for an extra touch.
    const mm = String(eventDate.getMonth() + 1).padStart(2, '0');
    const yyyy = eventDate.getFullYear();

    return `Your event will be held on ${days[eventDay]}, ${dd}-${mm}-${yyyy}`;
}

console.log(getEventWeekday(199));





//Exercise 4
console.log("======= Exercise 4 =======");


function clothesToWear (temperature){

    const clothes30 = ["Shorts", "T-shirt", "Sandals", "Sunglasses", "Sunscreen", "Baseball cap!"];
    const clothes25 = ["Shirt", "Jeans", "Sneakers", "Sunglasses", "Sunscreen", "Baseball cap!"];
    const clothes20 = ["Shirt", "Jeans", "Sneakers", "Baseball cap!"];
    const clothes15 = ["Shirt", "Trousers", "Sneakers", "Coat", "Baseball cap!"];
    const clothes10 = ["Sweater", "Trousers", "Coat", "G loves", "Hat", "Boots", "Scarf!"];
    const clothes00 = ["Sweater", "Trousers", "Winter Jacket", "Isothermal Wear", "Gloves", "Hat", "Boots", "Scarf!"];
    const clothesMinus = ["Sweater", "Three pairs of Trousers", "Some Napapijri Winter Jacket", "Isothermal Wear", "Gloves", "Hat", "Thick Boots", "Kanye's Scarf!"];
    
    if (temperature >= 30){
        return `It is hawt as hell outside! Gotta go Light: ${clothes30.join(", ")}`;
    } else if (temperature >= 25){      
        return `The weather is OK! You may go with: ${clothes25.join(", ")}`;
    } else if (temperature >= 20){
        return `The weather is OK-ish! Go for: ${clothes20.join(", ")}`;
    } else if (temperature >= 15){
        return `It is chilly outside, chose something thicker: ${clothes15.join(", ")}`;    
    } else if (temperature >= 10){
        return `It is quite cold, go for: ${clothes10.join(", ")}`;
    } else if (temperature >= 0){
        return `It is freezing outside, go with: ${clothes00.join(", ")}`;
    } else {
        return `Oh lawd, either stay at home or wear: ${clothesMinus.join(", ")}`;  
    }   
}

console.log(clothesToWear(15));



//Exercise 5
console.log("======= Exercise 5 =======");

const class07Students = [];

function addStudentToClass(studentName) {
    if (!studentName) {
        return `You cannot add an empty string to a class`;
    } else if (class07Students.includes(studentName)) {
        return `Student ${studentName} is already in the class`;
    } else if (class07Students.length >= 6 && studentName !== "Queen"){
        return `Cannot add more students to class 07`;
    } else {
        class07Students.push(studentName);
        return `Student ${studentName} added to the class 07`;
    }
}

function getNumberOfStudents() {
    return `The total amount of students is ${class07Students.length}`;
}

console.log(addStudentToClass("Vadim"));
console.log(addStudentToClass("Vadim"));
console.log(addStudentToClass());
console.log(addStudentToClass("Lorem"));
console.log(addStudentToClass("Ipsum"));
console.log(addStudentToClass("Dolor"));
console.log(addStudentToClass("Sit"));
console.log(addStudentToClass("Amet"));
console.log(addStudentToClass("Queen"));

console.log(getNumberOfStudents());






//Exercise 6
console.log("======= Exercise 6 =======");

const sweet = 0.5;
const chocolate = 0.7;
const toffee = 1.1;
const chewingGum = 0.03;
const boughtCandyPrices = [];
const amountToSpend = Math.random() * 100;

function addCandy(candyType, weight) {
    let candyPrice = 0;
    const candyTypeCaps = candyType.toUpperCase();
    if (candyTypeCaps === "SWEET") {
        candyPrice = sweet * weight;
    } else if (candyTypeCaps === "CHOCOLATE") {
        candyPrice = chocolate * weight;
    } else if (candyTypeCaps === "TOFFEE") {
        candyPrice = toffee * weight;
    } else if (candyTypeCaps === "CHEWING-GUM") {
        candyPrice = chewingGum * weight; 
    } else {
        console.log(`You have entered an invalid type of candy!`)
        return 
    }
    boughtCandyPrices.push(candyPrice);
}

function totalPrice() {
    let price = 0;
    for (let i = 0; i < boughtCandyPrices.length; i++) {
        price += boughtCandyPrices[i];
    }
    return price; 
}

function canBuyMoreCandy() {
    const currentTotal = totalPrice();
    if (currentTotal < amountToSpend) {
        const amountLeft = amountToSpend - currentTotal;
        return `You can buy more candy! Remaining amount: ${amountLeft.toFixed(2)}`;
    } else if (currentTotal === amountToSpend){
        return `Your budget was just enough!`;
    } else 
        amountOver = currentTotal - amountToSpend
        return `Actually, you are over the budget by: ${amountOver.toFixed(2)}`;
}


addCandy("NotCandy", 20);
addCandy("Sweet", 20);
addCandy("Chewing-Gum", 20);
addCandy("Sweet", 20); 
addCandy("Sweet", 20); 
addCandy("Sweet", 20); 

console.log("Your budget is:", amountToSpend.toFixed(2));
console.log("Total Price:", totalPrice().toFixed(2));
console.log(canBuyMoreCandy());