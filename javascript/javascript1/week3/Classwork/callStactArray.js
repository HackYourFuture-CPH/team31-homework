let callStackArray = [];

function bookPlaneTickets() {
  callStackArray.push("bookPlaneTickets() START"); // draw
  console.log("Plane tickets booked");
  requestVacationDays();
  callStackArray.pop(); // draw
}

function bookHotel() {
  console.log("Hotel booked");
  callStackArray.push("planItinerary() START"); // draw
  planItinerary();
  callStackArray.pop(); // draw
}

function requestVacationDays() {
  callStackArray.push("requestVaccationDays() START"); // draw
  console.log("Vacation days requested");
  callStackArray.pop(); // draw
}

function planItinerary() {
  console.log("Itinerary done");
  callStackArray.pop(); // draw
}

function planTrip() {
  bookPlaneTickets();
  callStackArray.push("bookHotel() START"); // draw
  bookHotel();
  callStackArray.pop();
  console.log("Trip planned");
}

callStackArray.push("plainTrip() START"); // draw
planTrip();
console.log(`The call stack array [${callStackArray}] is empty.`); // it will show an empty array as functions are popped from it after execution finished.
