//Item array removal
function removeName(namesArray, nameToRemove) {
    return namesArray.filter(name => name !== nameToRemove);
}

const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];

const nameToRemove = "Ahmad";

const updatedNames = removeName(names, nameToRemove);

console.log(updatedNames); 

//2-When will we be there??
function calculateTravelTime(travelInfo) {
    const { speed, destinationDistance } = travelInfo;
    const totalTimeInHours = destinationDistance / speed;
    
    const hours = Math.floor(totalTimeInHours);
    const minutes = Math.round((totalTimeInHours - hours) * 60);

    return `${hours} hours and ${minutes} minutes`;
}

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

const travelTime = calculateTravelTime(travelInformation);
console.log(travelTime);


//3- Series duration of my life
const seriesDurations = [
    {
      title: "Game of Thrones",
      days: 3,
      hours: 1,
      minutes: 0,
    },
    {
      title: "Sopranos",
      days: 3,
      hours: 14,
      minutes: 0,
    },
    {
      title: "The Wire",
      days: 2,
      hours: 12,
      minutes: 0,
    },
    {
      title: "Breaking Bad",
      days: 2,
      hours: 14,
      minutes: 0,
    },
  ];
  
  function formatPercentage(value) {
      return value.toFixed(3);
  }
  
  function logOutSeriesText() {
      const avgLifespanInMinutes = 80 * 365 * 24 * 60;
      let totalPercentage = 0;
  
      seriesDurations.forEach(series => {
          const seriesTimeInMinutes = 
              (series.days * 24 * 60) + (series.hours * 60) + series.minutes;
          const percentage = (seriesTimeInMinutes / avgLifespanInMinutes) * 100;
          totalPercentage += percentage;
          console.log(`${series.title} took ${formatPercentage(percentage)}% of my life`);
      });
  
      console.log(`In total that is ${formatPercentage(totalPercentage)}% of my life`);
  }
  
  logOutSeriesText();


  //4-Smart-ease - Back to the basics!
  const memoList = [];

const storeMemo = (text, identifier) => memoList.push({ text, identifier });

const retrieveMemo = (identifier) => {
    if (typeof identifier !== "number") return console.log("Invalid identifier.");
    return memoList.find(memo => memo.identifier === identifier) || console.log("Memo not found.");
};

const displayMemos = () => 
    memoList.forEach(({ identifier, text }) => console.log(`Memo ID: ${identifier} | Content: "${text}"`));

const archivedMemos = [];

const moveToArchive = (identifier) => {
    const index = memoList.findIndex(memo => memo.identifier === identifier);
    if (index === -1) return console.log("Memo not found.");
    archivedMemos.push(...memoList.splice(index, 1));
    console.log(`Memo ${identifier} archived.`);
};

const retrieveFromArchive = (identifier) => {
    const index = archivedMemos.findIndex(memo => memo.identifier === identifier);
    if (index === -1) return console.log("Archived memo not found.");
    memoList.push(...archivedMemos.splice(index, 1));
    console.log(`Memo ${identifier} restored.`);
};

const displayArchivedMemos = () => 
    archivedMemos.forEach(({ identifier, text }) => console.log(`Archived Memo ID: ${identifier} | Content: "${text}"`));

// Testing
storeMemo("Pick up groceries", 1);
storeMemo("Do laundry", 2);
storeMemo("Finish homework", 3);

console.log(retrieveMemo(1));

displayMemos();

moveToArchive(2);
displayMemos();
displayArchivedMemos();

retrieveFromArchive(2);
displayMemos();
displayArchivedMemos();

//5-CactusIO-interactive (Smart phone usage app) optional
const activities = [];
const usageLimit = 100;

function addActivity(activity, duration, date = new Date().toLocaleDateString()) {
    if (typeof activity !== "string" || typeof duration !== "number") {
        console.log("Invalid input. Activity must be a string and duration must be a number.");
        return;
    }
    activities.push({ date, activity, duration });
}

function showStatus() {
    if (!activities.length) {
        console.log("You haven't added any activities yet. Try adding one!");
        return;
    }

    const totalTime = activities.reduce((sum, entry) => sum + entry.duration, 0);
    console.log(`You have logged ${activities.length} activities, totaling ${totalTime} minutes of screen time.`);

    if (totalTime > usageLimit) {
        console.log("You've exceeded your daily limit! Time to take a break from your phone. 📵");
    }
}

function getMostUsedActivity() {
    if (activities.length === 0) {
        console.log("No activities recorded yet.");
        return;
    }

    const usageMap = {};
    for (const { activity, duration } of activities) {
        usageMap[activity] = (usageMap[activity] || 0) + duration;
    }

    let mostUsed = null;
    let maxTime = 0;

    for (const [activity, time] of Object.entries(usageMap)) {
        if (time > maxTime) {
            mostUsed = activity;
            maxTime = time;
        }
    }

    console.log(`Your most used activity is "${mostUsed}" with a total of ${maxTime} minutes.`);
}


addActivity("Watching YouTube", 40);
addActivity("Browsing Facebook", 30);
addActivity("Reading News", 20);
showStatus();
getMostUsedActivity();