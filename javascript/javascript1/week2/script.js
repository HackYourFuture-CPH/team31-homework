// function getFullname(firstname, surname) {
//   return firstname + " " + surname;
// }

// const fullname1 = getFullname("Benjamin", "Hughes");

// const fullname2 = getFullname("Nina", "Lin");

// console.log(fullname1);
// console.log(fullname2);

//formal fullname (revised according to comment)
function getFullname(firstname, surname, useFormalName) {
  if (!firstname || !surname){
    return "Error: Please make sure both names are provided"
    // In this way, if the first name and surname is not provided, it will return Error 
  }else if(useFormalName) {
    return "Lord" + firstname + " " + surname;
  } else {
    return firstname + " " + surname;
  }
}

// But what if the person is a woman? Describe how you would fix the getFullname so it also works for women?

// //  function getFullname(firstname, surname, gender, useFormalName) {
/* There's a repetition of firstname + " " + surname;
*/
// const fullName= firstname + " " + surname
// if(useFormalName){
//   if(gender='female'){
//     return "Lady" + fullName;}
//   else{ return "Lord" + fullName;}
// } else {
//   return firstname + fullName;}
// }

// Event application 
function getEventWeekday(dayToEvent){
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  // const today = new Date()
  // const todayIndex = today.getDay()
// revise below
const todayIndex= new Date().getDay()

  const dayOfEventIndex=  (dayToEvent + todayIndex) % 7;
  return days[dayOfEventIndex];
}

console.log(getEventWeekday(9));

// Weather wear 
function whatToWear(temperature){
  if(temperature <= 0){
    return "Wear a winter coat, boots and a hat";
  } else if(temperature>0 && temperature <= 10){
    return "Wear a jacket and a hat";
  } else if(temperature >10 && temperature <= 20){
    return "Wear a jacket";
  } else if(temperature >20 && temperature <= 30){
    return "Wear a t-shirt and shorts";
  } else {
    return "Wear a tanktop and shorts";
  }
}

console.log(whatToWear(50)); 

// Student manager 
const class07Students = [];
function addStudentToClass(studentName) {
  //Revise: change the order of conditions. 
  // First check if student's name is empty 
  // second, check for duplicates
  // third check for queen
  // fourth check for class capacity
  // fifth, add the student 
  if (studentName === "") {
  console.log("Please enter a valid name");
   return 'error'
  } 
  
  if(class07Students.includes(studentName)){
     console.log(`Student ${studentName} is already in the class`);
     return 'error'
  } 
  
  if(studentName === "Queen" && !class07Students.includes("Queen")) {
    class07Students.push(studentName);
    return class07Students;
  } 

  if (class07Students.length >= 6) {
    console.log("Cannot add more students to class 07");
    return "error";
  }

  //Pass all the above, so push the student to the array
    class07Students.push(studentName);
    return class07Students;
  }



function getNumberOfStudents() {
  return class07Students.length;
}

addStudentToClass('Benjamin')
addStudentToClass('Nina')
addStudentToClass('Nancy')
addStudentToClass('Tom')
addStudentToClass('Nina')
addStudentToClass('Jerry')
addStudentToClass('')
addStudentToClass('Gary')
addStudentToClass('Queen')
addStudentToClass('Queen')
addStudentToClass('Jenny')

console.log(getNumberOfStudents())


// Candy helper optional 
const boughtCandyPrices = [];
function addCandy(candyType, weight){

  if(typeof candyType !== "string") {
  console.log("Error: Candy type must be a string")
  return
}

const lowerCaseCandyType= candyType.toLowerCase()

  if(lowerCaseCandyType === "sweet"){
    boughtCandyPrices.push(weight * 0.5);
  } else if (lowerCaseCandyType === "chocolate") {
    boughtCandyPrices.push(weight * 0.7);
  } else if (lowerCaseCandyType === "toffee") {
    boughtCandyPrices.push(weight * 1.1);
  } else if (lowerCaseCandyType === "chewing-gum") {
    boughtCandyPrices.push(weight * 0.03);
  } else {
    console.log("Error: Please enter the right candy type")
    return
  }

  return boughtCandyPrices
}


const amountToSpent = Math.random() * 100;

function canBuyMoreCandy(boughtCandyPrices){
let total = 0
for (let i=0; i<boughtCandyPrices.length; i++){
  total += boughtCandyPrices[i];
  if (total >= amountToSpent){
    console.log(`Enough candy for you!`)
    return false;
  }else {
    console.log(`You can buy more, so please do!`)
    return true;
  }
}}

addCandy("sweet", 20);
addCandy("chocolate", 10);
addCandy("toffee", 30); 
console.log(addCandy("chewing-gum", 50))



console.log(canBuyMoreCandy(boughtCandyPrices))