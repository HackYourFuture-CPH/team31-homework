console.log("...💥...VOICE ASSISTANT🤖βeta Version...💥...");
let myName = [];
let toDo = [];
const checkName = (nameInput) => {
  if (myName.includes(nameInput)) {
    const index = myName.indexOf(nameInput);
    const returnName = myName[index];
    return returnName;
  } else {
    myName.pop(); //I used this to keep only latest name in the list
    myName.push(nameInput);
    return myName[myName.length - 1];
  }
};
const getReply = (command) => {
  if (command === undefined) {
    console.log("ERROR! Command Not Found");
    return;
  }
  if (!String(command).trim()) {
    console.log("ERROR! Command has no text");
    return;
  }
  if (!isNaN(command)) {
    console.log("ERROR! Command can not hold only numbers");
    return;
  }
  const commandLowerCased = command.toLowerCase().trim(); // Just to check conditions
  if (commandLowerCased === "What is your name?".toLocaleLowerCase()) {
    console.log(
      "I am VOICE ASSISTANT. βeta Version. I need more improvements to answer your maximum questions."
    );
  } else if (commandLowerCased.startsWith("hello")) {
    const splitedCommand = command.split(" ");
    const nameToShow = splitedCommand[splitedCommand.length - 1];
    console.log(`Nice to meet you ${checkName(nameToShow)}`);
  } else if (
    commandLowerCased.startsWith("what") &&
    commandLowerCased.endsWith("name?")
  ) {
    if (myName.length === 0) {
      console.log("I don't know you yet");
    } else {
      console.log(`Your name is ${myName[myName.length - 1]}`);
    }
  } else if (
    commandLowerCased.startsWith("add") &&
    commandLowerCased.endsWith("todo")
  ) {
    const task = command.split(" ").slice(1, -3).join(" ");
    const taskToShow = task.charAt(0).toUpperCase() + task.slice(1);
    if (toDo.includes(taskToShow)) {
      console.log(`${taskToShow}, already in your todo`);
    } else {
      toDo.push(taskToShow);
      console.log(`${taskToShow}, added to your todo`);
    }
  } else if (
    commandLowerCased.startsWith("remove") &&
    commandLowerCased.endsWith("todo")
  ) {
    const task = command.split(" ").slice(1, -3).join(" ");
    const taskToRemove = task.charAt(0).toUpperCase() + task.slice(1);
    const index = toDo.indexOf(taskToRemove);
    if (index < 0) {
      console.log(`${taskToRemove} is not found in todo`);
    } else {
      toDo.splice(index, 1);
      console.log(`Removed ${taskToRemove} from your todo`);
    }
  } else if (
    commandLowerCased.startsWith("what") &&
    commandLowerCased.endsWith("todo?")
  ) {
    if (toDo.length === 0) {
      console.log("TODO list empty");
    } else {
      console.log(`You have ${toDo.length} todos`);
      for (let i in toDo) {
        let count = parseInt(i);
        console.log(` ToDO ${count + 1}--> ${toDo[i]}`);
      }
    }
  } else if (
    commandLowerCased.startsWith("what") &&
    commandLowerCased.endsWith("today?")
  ) {
    const todayDate = new Date();
    const day = todayDate.getDate();
    const month = todayDate.toLocaleString("en-GB", { month: "long" });
    const year = todayDate.getFullYear();
    const formattedDate = `${day}. of ${month} ${year}`;
    console.log(formattedDate);
  } else if (commandLowerCased.match(/[+\-*/]/)) {
    const task = commandLowerCased.split(" ");
    const filteredTask = task.filter((item) => /[0-9+\-*/]/.test(item));
    const toSolve = filteredTask.join("");
    try {
      const result = eval(toSolve);
      console.log(result);
    } catch (error) {
      console.log("Invalid");
    }

    // Took Help from many Sources for this task
  } else if (commandLowerCased.includes("timer")) {
    const minutesFound = commandLowerCased.match(/(\d+)\s*(minutes?|min|m)/);
    const secondsFound = commandLowerCased.match(/(\d+)\s*(seconds?|sec|s)/);
    if (!minutesFound && !secondsFound) {
      console.log("Please specify valid minutes or seconds.");
      return;
    } else {
      const minutes = minutesFound ? minutesFound[1] : 0;
      const seconds = secondsFound ? secondsFound[1] : 0;
      const timeSetInMiliSeconds = (minutes * 60 + seconds) * 1000;
      setTimeout(() => {
        console.log("Timer Done");
      }, timeSetInMiliSeconds);
    }
  }
};

//---------set of tests and results ------------------//
//---------can be improved for making history by using objects----------//
// getReply(); //ERROR! Command Not Found
// getReply(1); //ERROR! Command can not hold only numbers
// getReply(""); //ERROR! Command has no text
// getReply("What is my name?"); //I don't know you yet
// getReply("Hello my name is Benjamin"); //Nice to meet you Benjamin
// getReply("What is my name?"); //Your name is Benjamin
// getReply("Hello my name is Benjamin"); //Nice to meet you Benjamin
// getReply("What is my name?"); //Your name is Benjamin
// getReply("Hello my name is Wasim"); //Nice to meet you Wasim
// getReply("What is my name?"); //Your name is Wasim
// getReply("Add fishing to my todo"); //Fishing, added to your todo
// getReply("Add singing in the shower to my todo"); //Singing in the shower, added to your todo
// getReply("Remove fishing from my todo"); //Removed Fishing from your todo
// getReply("Add singing in the shower to my todo"); //Singing in the shower, already in your todo
// getReply("Add Dancing to my todo"); //Dancing, added to your todo
// getReply("Remove fishing from my todo"); //Fishing is not added yet
// getReply("What is on my todo?"); //You have 2 todos, ToDO 1--> Singing in the shower, ToDO 2--> Dancing
// getReply("What day is it today?"); //24. of February 2025
// getReply("What is 3 + 3"); // 6
// getReply("WHat will be the result of  4*12"); //48
// getReply("What is my name?"); //Your name is Wasim
// getReply("Make my timer work after 5 sec"); // it can also work in Minutes, minutes and seconds
// getReply("What is your name?"); //
