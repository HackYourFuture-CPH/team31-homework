console.log("=======0.2 Variables=======");

const userName = "Alice";
const age = 16;
const country = "USA";
let ageStatus;

if (age < 18) {
  ageStatus = "minor";
} else {
  ageStatus = "adult";
}

const message = `${userName} is a ${ageStatus} from ${country}.`;

console.log(message); // Alice is a minor from USA.
