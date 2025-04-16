//Item array removal
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

// Write some code here
for (let i = 0; i < names.length; i++) {
  if (names[i] === nameToRemove) {
    names.splice(i, 1);
  }
}

console.log(names);

// Code done

//When will we be there?
const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function travelTime(travelInformation) {
  if(travelInformation.speed===0){
    return "Error: speed can not be 0"
  }

  const time = travelInformation.destinationDistance / travelInformation.speed;

  const hours = Math.floor(time);
  const minutes = Math.round((time - hours) * 60);

  return `${hours} hours and ${minutes} minutes`;
}

console.log(travelTime(travelInformation));

//Series duration of my life
const seriesDurations = [
  {
    title: "Game of thrones",
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
];

function logOutSeriesText(array) {
  let totalPercentageOfTheShowInLife = 0;
  for (let i = 0; i < array.length; i++) {
    const daysOfShow =
      array[i].days + array[i].hours / 24 + array[i].minutes / 60 / 24;

    const percentageOfLife = (daysOfShow * 100) / (80 * 365);

    totalPercentageOfTheShowInLife += percentageOfLife;

    console.log(
      `${array[i].title} took ${Number(
        percentageOfLife.toFixed(3)
      )}% of my life`
    );
  }
  console.log(
    `In total that is ${Number(
      totalPercentageOfTheShowInLife.toFixed(2)
    )}% of my life`
  );
}

logOutSeriesText(seriesDurations);

//Note taking app
const notes = [];

function saveNote(content, id) {
  notes.push({ content: content, id });
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

function getNote(id) {
  // your code here
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      return notes[i];
    }
    }

    return null 
    // revised based on comment: 
    // should return null after for loop otherwise it doesn't check all the notes[i].id
  }


const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

function logOutNotesFormatted(notes) {
  // your code here
  for (let i = 0; i < notes.length; i++) {
    console.log(
      `The note with id: ${i + 1},  has the following note text: ${
        notes[i].content
      }`
    );
  }
}

logOutNotesFormatted(notes); // should log out the text below

// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry

//Unique function : search notes by keyword
function searchForNotes(keyword) {
  for (let i = 0; i < notes.length; i++) {
    const lowerCaseContent = notes[i].content.toLowerCase();
    if (lowerCaseContent.includes(keyword.toLowerCase())) {
      console.log(`Notes: ${notes[i].content}`);
    } else {
      console.log(`No notes found`);
    }
  }
}

searchForNotes("laundry");

//CactusIO-interactive (Smart phone usage app) optional

const activities = [];
const today = new Date(); //improve on date
function addActivity(activity, duration) {
  activities.push({
    date: today.toLocaleDateString("en-US", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    }),
    activity: activity,
    duration: duration,
  });

  return activities;
}

console.log(addActivity("Youtube", 30));

//Show my status
const limitUsageTime = 120;
function showStatus(activities, date) {
  if (activities.length < 1) {
    console.log(`Add some activities before calling showStatus`);
  } else {
    // let usageTime = 0;
    // for (let i = 0; i < activities.length; i++) {
    //   usageTime += activities[i].duration;
    // }
    // if (usageTime < limitUsageTime) {
    //   console.log(
    //     `You have added ${activities.length} activities. They amount to ${usageTime} min. of usage`
    //   );
    // } else {
    //   console.log(`You have reached your limit, no more smartphoning for you!`);
    // }
    let numberOfActivities = 0;
    for (let i = 0; i < activities.length; i++) {
      if (date === activities[i].date) {
        numberOfActivities += 1;
      }
      console.log(
        `The number of activities on ${date} is ${numberOfActivities}`
      );
    }
  }
}

showStatus(activities, "2/19/2025");

// Extra feature
function showActivities(activities) {
  if (activities.length < 1) {
    console.log(`You don't have any activities`);
  } else {
    for (let i = 0; i < activities.length; i++) {
      console.log(
        `On ${activities[i].date}, You have been on ${activities[i].activity} for ${activities[i].duration} minutes`
      );
    }
  }
}

showActivities(activities);

//Create a function for calculating the activity a user has spent the most time on.

function activitySpentMostTimeOn(activities) {
  if (activities.length < 1) {
    console.log(`Please add some activities first`);
  }

  const activitiesTotalTime = {};

  for (let i = 0; i < activities.length; i++) {
    const activity = activities[i].activity;
    const duration = activities[i].duration;

    if (activitiesTotalTime[activity]) {
      activitiesTotalTime[activity] += duration;
    } else {
      activitiesTotalTime[activity] = duration;
    }
  }

  const allActivities = Object.keys(activitiesTotalTime);
  const allActivitiesTime = Object.values(activitiesTotalTime);
  let maxTime = allActivitiesTime[0];
  let indexOfMaxTime = 0;
  for (let i = 1; i < allActivitiesTime.length; i++) {
    if (maxTime < allActivitiesTime[i]) {
      maxTime = allActivitiesTime[i];
      indexOfMaxTime = i;
    }
  }
      console.log(`You have spent most time on ${allActivities[indexOfMaxTime]}`);
}

activitySpentMostTimeOn(activities);
