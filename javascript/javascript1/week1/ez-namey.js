
console.log('**JAVASCRIPT1-WEEK01: EZ-Namey**');

const firstWords = ['Tech', 'Power', 'Code', 'Web', 'Data', 'Info', 'Cyber', 'Net', 'Soft', 'Sys'];
const secondWords = ['Master', 'Genius', 'Wizard', 'Guru', 'Ninja', 'Pro', 'Hacker', 'Coder', 'Script', 'Dev']; 

// I want to create 5 random names from the above arrays

for (let i = 0; i < 5; i++) {
    const indexForFirstWords = Math.floor(Math.random() * firstWords.length);
    const indexForSecondWords = Math.floor(Math.random() * secondWords.length);
    const startupName = firstWords[indexForFirstWords] + ' ' + secondWords[indexForSecondWords];
    const noOfCharacters = startupName.length;
    console.log(`"The startup:  "${startupName}" contains ${noOfCharacters} characters."`);
}   