console.log("=========CactusIO Interactive=========");


const activities = [{
    date: "13/02/2025",
    activity: "Facebook", //Had to add this manually, as inputs take today's date.
    duration: 35          //And i wanted to test if choosing only specific date would work.
}]; 
const today = new Date();
const todayDate = today.toLocaleDateString("en-GB")

function addActivity(activity, duration) {
    if (typeof activity === "string" && duration > 0) {
        activities.push({ date: todayDate, activity, duration });
        console.log("Activity added:", activities);
    } else {
        console.warn(`You have made a mistake in the input. Format: activity -> 'string', Duration -> number > 0`);
    }
}


addActivity("Youtube", 1);
addActivity(23, "Instagram");      
addActivity("Candy Crush Saga", 555);  

console.log(activities); 

function showStatus() {
    let activityDuration = 0;
    let activitiesToday = 0;

    for (let i = 0; i < activities.length; i++) {
        activityDuration += activities[i].duration;
    }

    for (let i = 0; i < activities.length; i++) {
        if (activities[i].date === todayDate) {
            activitiesToday++;
        }
    }

    if (!activitiesToday) {
        console.log("You don't have any activities registered for today.")
    } else if (!activities.length) {
        console.log("You don't have any registered activities.")
    } else {
        console.log(`You have added ${activitiesToday} activities. They amount to ${activityDuration} min. of usage`)
    }
}

showStatus();


function mostTimeSpent() {
    let mostUsedActivity = activities[0];

    if (activities.length === 0) {
        console.log("You don't have any registered activities.");
        return;
    }

    for (let i = 1; i < activities.length; i++) {
        if (activities[i].duration > mostUsedActivity.duration) {
            mostUsedActivity = activities[i];
        }
    }

    if (mostUsedActivity.duration === 0) {
        console.log("All your registered activities have a duration of 0 minutes.");
    } else {
        console.log("The activity you spent the most time on is '" + mostUsedActivity.activity + "' with a total duration of " + mostUsedActivity.duration + " minutes.");
    }
}

mostTimeSpent();