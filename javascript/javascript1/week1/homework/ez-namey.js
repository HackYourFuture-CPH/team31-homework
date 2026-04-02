

console.log("======Exercise Ez Namey======");


const firstWords = ["Easy", "Awesome", "Corporate", "Quick", "Smart", "Affordable", "Good", "Interesting", "Agile", "Compact"];
const secondWords = ["Day", "Firm", "Tech", "Corporation", "IT", "Intelligence", "Business", "Exploration", "Solutions", "Company"];
const startupName = firstWords[Math.floor(Math.random() * 10)] + " " + secondWords[Math.floor(Math.random() * 10)];
console.log("The startup: " + "'" + startupName + "'" + " contains " + startupName.length + " characters.");