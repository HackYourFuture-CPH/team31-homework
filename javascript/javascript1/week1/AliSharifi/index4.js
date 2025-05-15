window.onload = function () {
    const firstWords = ["Swift", "Brilliant", "Elite", "Innovative", "Agile", "Creative", "Sharp", "Pioneer", "Visionary", "Bold"];
    const secondWords = ["Solutions", "Tech", "Corporation", "Hub", "Labs", "Systems", "Industries", "Networks", "Ventures", "Concepts"];

    let randomIndex1 = Math.floor(Math.random() * 10);
    let randomIndex2 = Math.floor(Math.random() * 10);

    let startupName = firstWords[randomIndex1] + " " + secondWords[randomIndex2];
    let nameLength = startupName.length;

    let outputText = `The startup: "${startupName}" contains ${nameLength} characters.`;

    document.getElementById("startupOutput").innerText = outputText;
};