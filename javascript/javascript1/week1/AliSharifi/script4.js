window.onload = function () {
    const firstWords = ["Swift", "Brilliant", "Elite", "Innovative", "Agile", "Creative", "Sharp", "Pioneer", "Visionary", "Bold"];
    const secondWords = ["Solutions", "Tech", "Corporation", "Hub", "Labs", "Systems", "Industries", "Networks", "Ventures", "Concepts"];

    const randomIndex1 = Math.floor(Math.random() * 10);
    const randomIndex2 = Math.floor(Math.random() * 10);

    const startupName = firstWords[randomIndex1] + " " + secondWords[randomIndex2];
    const nameLength = startupName.length;

    const outputText = `The startup: "${startupName}" contains ${nameLength} characters.`;

    document.getElementById("startupOutput").innerText = outputText;
};