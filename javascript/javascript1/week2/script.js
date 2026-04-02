

console.log("JS WEEK 2 CLASS EXERCISES");

const balance = 1000;
if (balance <= 0) {
    console.log("Please deposit some money!");
} else if (balance > 0 && balance <= 1000) {
    console.log("Your balance is looking okay");
} else if (balance > 1000 && balance <= 3000) {
    console.log("Your balance is looking good");
} else if (balance > 3000  && balance <= 10000) {
    console.log("Your balance is fantastic");
} else {
    console.log("Your balance is AMAZING!");
}


function getCircleArea(radius) {
    let area = radius * 2;
    return area;
}

console.log(getCircleArea(7));

function celsiusToFahrenheit (celsius) {
    let fahrenheit = celsius * 1.8 + 32;    
    return fahrenheit;
}

console.log(celsiusToFahrenheit(15));

function convertDate (dateString) {
    let newDate = dateString.split("-").reverse().join("-");
    return newDate;
}

console.log(convertDate("2025-02-09"));


function getAgeInDays (age) {
    let days = age * 365;
    return days;
}   


function date (datestr) {
    newDate = new Date(datestr);
    return newDate = newDate.getDate() + "-" + newDate.getMonth() + 1 + "-" + newDate.getFullYear();

}

console.log(date("2025-02-09")); 

function numberLoop (a, b){
    for (let i = a; i <= b; i++) {
        console.log(i);
    }
}

numberLoop(74, 98); 


function sendEmailTo (recipient) {
    recipient = email.split("|");
    for (let i = 0; i < email.length; i++) {
        console.log("Email sent to " + recipient[i]);
    }
}

console.log(sendEmailTo("benjamin@gmail.com|peter@gmail.com|hans@gmail.com|ahmad@gmail.com|sana@gmail.com|virgeen@gmail.com|mohammed@gmail.com"));