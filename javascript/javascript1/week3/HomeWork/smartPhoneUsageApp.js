console.log("\n*********** Smart Phone Activity Log ****************");
const activities = [];
const todayDate = getTodayDate();

addActivity(todayDate, "LinkedIn", 50);
addActivity(todayDate, "Google,", 5);
addActivity(todayDate, "facebook", 25);
addActivity(todayDate, "instagram", 36);
addActivity(todayDate, "whatsapp", 1);
showActivities();
showStatus();
mostTimeSpentOn();

function getTodayDate() {
  const currentDate = new Date();
  const date = [
    currentDate.getDate(),
    currentDate.getMonth(),
    currentDate.getFullYear(),
  ];
  const [day, month, year] = date;
  const dateObj = new Date(`${year}-${month}-${day}`);
  const options = { year: "numeric", month: "short", day: "numeric" };
  return dateObj.toLocaleDateString("en-US", options).replace(",", "");
}

function addActivity(date, activity, duration) {
  activities.push({
    date: date,
    activity: activity,
    duration: duration,
  });
}

function showActivities() {
  for (let i of activities) {
    console.log(
      `On ${i.date} you spent ${i.duration} minutes on ${i.activity}.`
    );
  }
}

function showStatus() {
  let totalDuration = 0;
  const maximumTimeLimit = 150;
  for (let i of activities) {
    totalDuration += i.duration;
  }
  console.log(totalDuration);
  if (activities.length === 0) {
    console.log("Add some activities before calling showStatus");
    return;
  }
  if (totalDuration >= maximumTimeLimit) {
    console.log("You have reached your limit, no more smartphoning for you!");
    console.log(`Max Limit is ${minutesToHoursConverter(maximumTimeLimit)}`);
    console.log(
      `You already spent ${minutesToHoursConverter(
        totalDuration
      )} on smart phone usage.`
    );
    return;
  } else {
    console.log(
      `You spent ${minutesToHoursConverter(
        totalDuration
      )} on smart phone usage.`
    );
    console.log(`Max Limit is ${minutesToHoursConverter(maximumTimeLimit)}`);
  }
}

function minutesToHoursConverter(time) {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  return `${hours}:${minutes}`;
}

function mostTimeSpentOn() {
  let arrayOfDuration = [];
  for (let i of activities) {
    arrayOfDuration.push(i.duration);
  }
  const maximumTime = Math.max(...arrayOfDuration);
  for (let i in activities) {
    if (arrayOfDuration[i] === maximumTime) {
      console.log(
        `You spent Max Time: ${activities[i].duration} minutes on ${activities[i].activity}.`
      );
    }
  }
}
