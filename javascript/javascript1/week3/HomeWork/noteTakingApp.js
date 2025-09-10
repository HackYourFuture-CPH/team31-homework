// This app will work for only current date other wise it will show Record not found
console.log("\n*******Note Taking App************");
const notes = [];
const week = ["Sun.", "Mon.", "Tue.", "Wed.", "Thur.", "Fri.", "Sat."];

// To get notes saved in array
function saveNote(content, id, day) {
  notes.push({ content: content, id: id, day: day });
}

// To Get Notes using ID and Date so it only show notes for current day
function getNote(id, day) {
  for (let i of notes) {
    if (i.id == id && i.day === day) {
      console.log(`You put a note for: ${i.content} on ${day}`);
      return;
    }
  }
  console.log("No Record Found");
}

function logOutNotesFormattedForToday(day) {
  const indexForWeekDayName = new Date().getDay();
  for (let i of notes) {
    if (i.day === day) {
      console.log(
        `The note with id: ${i.id}, has the following note text: ${i.content}, dated: ${week[indexForWeekDayName]} ${i.day}.`
      );
    }
  }
}

//I added extra feature to add the date when note is created.
function dayOfMonth() {
  const currentDay = new Date();
  const currentMonth = currentDay.getMonth() + 1;
  const currentDate = currentDay.getDate();
  const currentYear = currentDay.getFullYear();
  return `${currentDate}-${currentMonth}-${currentYear}`;
}

// Function Calls to do different things
saveNote("Homework Time", 1, dayOfMonth());
saveNote("Class Time", 2, dayOfMonth());
saveNote("Meeting Time", 3, dayOfMonth());
saveNote("Appointment with Doctor", 4, dayOfMonth());
saveNote("Old Note", 5, "15-01-2017");

//getNote(2, prompt("Enter any date in this format dd-mm-yyyy"));
getNote(4, dayOfMonth()); //
getNote(2, dayOfMonth());
getNote(5, dayOfMonth());
getNote(4, "19-1-2025");
logOutNotesFormattedForToday(dayOfMonth());

console.log(`Link of Codepen: https://codepen.io/Wasim51214/pen/qEBOKLv`);
