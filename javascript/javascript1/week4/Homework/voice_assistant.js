console.log("===========Voice Assistant===========");

const voiceAssistant = {
  hello: ["Hello", "Hi there", "Greetings", "Hey", "Good to see you", "Howdy"],
  yourName: ["Your name is:", "Have you forgotten that your name is:", "I think your name is:", "As far as i can remember, your name is:"],
  yourNameError: ["You need to provide a name.", "I can't save an empty name. Please tell me your name.", "It looks like you didn't say your name.", "I need a name to remember you.", "Your name is missing. Can you try again?", "I can't save a blank name. What should I call you?"],
  howAreYou: ["how are you today?", "how can I help you?", "is there anything I can do for you?", "what's on your mind?", "how's your day going?", "need any assistance?"],
  todo: ["Your todo list contains:", "You have added the following to your todo list:", "Last time I checked, your todo list had the following items:", "Here's what's on your todo list:", "Your tasks for today are:"],
  todoExists: ["is already in your todo list!", "is already added to your list.", "is already on your todo.", "is already planned for.", "is already listed. No need to add it again!", "is in your todo list. Anything else?"],
  todoNotExists: ["not in your todo list.", "is missing from your list.", "isn't on your todo list.", "was not found in your tasks.", "doesn't seem to be in your list.", "isn't on the list. Want to add it?"],
  todoEmpty: ["Your todo list is empty.", "There's nothing on your todo list right now.", "Your task list is currently empty.", "You have no tasks in your todo list.", "Your todo list is blank. Want to add something?", "Looks like your todo list is empty. Need any tasks?"],
  add: ["has been added to your todo list.", "was just added to the list.", "is added to your todo list.", "is now on your todo list.", "has been successfully added.", "is added to your tasks."],
  remove: ["has been removed from your todo list.", "was just removed from the list.", "is removed from your todo list.", "has been deleted from your tasks.", "is no longer on your todo list.", "has been cleared from your list."],
  day: ["Today is", "Last time I checked, it was", "I am pretty sure it's", "According to my calendar, it's", "The date is", "It's currently"],
  result: ["The total amount is:", "The result is:", "Bruv, quick maffs got me:", "After calculating, I got:", "The answer is:", "Here's the result:"],
  resultError: ["I couldn't calculate that.", "Sorry, I couldn't process that calculation.", "That doesn't seem to be a valid calculation.", "I'm not sure how to compute that.", "I couldn't figure that one out.", "Hmm, that doesn't look like a valid math problem."],
  timer: ["Timer was set for", "I've set timer for", "The timer has been set for", "Your timer is set for", "Countdown starts now for", "Timer activated for"],
  timerError: ["Sorry, I couldn't understand the timer duration.", "I didn't catch the time you wanted for the timer.", "Can you repeat that? I couldn't set the timer.", "I need a clear duration to set the timer.", "Hmm, I couldn't figure out how long to set the timer for.", "Please specify a valid time for the timer."],
};

const userData = {};

function getRandomAnswer(answer) {
  return answer[Math.floor(Math.random() * answer.length)];
}

function fetchRandomHello(command) {
  const match = command.match(/name is (.+)/i);
  const sayHello = getRandomAnswer(voiceAssistant.hello);
  const sayHowAreYou = getRandomAnswer(voiceAssistant.howAreYou);
  const sayYourNameError = getRandomAnswer(voiceAssistant.yourNameError);

  if (!match) {
    return `${sayYourNameError}`;
  }
  const userName = match[1];
  userData.userName = userName;

  return `${sayHello} ${userName} ${sayHowAreYou}`;
}

function addToTodoList(command) {
  const todoItem = command.toLowerCase().match(/add (.+?) to my todo/i)[1];
  const sayAddedTodo = getRandomAnswer(voiceAssistant.add);
  const sayTodoExists = getRandomAnswer(voiceAssistant.todoExists);

  if (!userData.todoList) {
    userData.todoList = [];
  }
  if (userData.todoList.includes(todoItem)) {
    return `${todoItem} ${sayTodoExists}`;
  }
  userData.todoList.push(todoItem);
  return `${todoItem} ${sayAddedTodo}`;
}

function removeFromTodoList(command) {
  const todoItem = command.toLowerCase().match(/remove (.+?) from my todo/i)[1];
  const itemIndex = userData.todoList.indexOf(todoItem);
  const sayRemovedTodo = getRandomAnswer(voiceAssistant.remove);
  const sayTodoNotExists = getRandomAnswer(voiceAssistant.todoNotExists);

  if (itemIndex > -1) {
    userData.todoList.splice(itemIndex, 1);
    return `${todoItem} ${sayRemovedTodo}`;
  }
  return `${todoItem} ${sayTodoNotExists}`;
}

function whatIsOnTodoList() {
  const sayTodoEmpty = getRandomAnswer(voiceAssistant.todoEmpty);
  const sayTodoList = getRandomAnswer(voiceAssistant.todo);

  if (!userData.todoList || !userData.todoList.length) {
    return `${sayTodoEmpty}`;
  }
  let reply = `${sayTodoList}`;
  for (let i = 0; i < userData.todoList.length; i++) {
    reply += `\n ${i + 1}. ${userData.todoList[i]}`;
  }
  return reply;
}

function getDate() {
  const todayDate = new Date();
  const day = todayDate.getDate();
  const month = todayDate.toLocaleString("default", { month: "long" });
  const year = todayDate.getFullYear();
  const formattedDate = `${day}. of ${month} ${year}`;
  const sayDate = getRandomAnswer(voiceAssistant.day);

  return `${sayDate} ${formattedDate}`;
}

function doBasicMath(command) {
  const sayMath = getRandomAnswer(voiceAssistant.result);
  const sayMathError = getRandomAnswer(voiceAssistant.resultError);
  const replacedCommand = command.replace(/\D/g, " ");
  const trimmedInput = replacedCommand.trim();
  const splitInput = trimmedInput.split(/\s+/);
  const filteredInput = splitInput.filter((str) => str !== "");
  const numbers = filteredInput.map(Number);

  loweredCommand = command.toLowerCase();

  let result;

  if (numbers.length === 0) {
    return `${sayMathError}`;
  }
  if (loweredCommand.includes("+") || loweredCommand.includes("sum")) {
    result = numbers.reduce((acc, num) => acc + num, 0);
  } else if (loweredCommand.includes("-") || loweredCommand.includes("subtract")) {
    result = numbers.reduce((acc, num) => acc - num);
  } else if (loweredCommand.includes("*") || loweredCommand.includes("multiply")) {
    result = numbers.reduce((acc, num) => acc * num, 1);
  } else if (loweredCommand.includes("/") || loweredCommand.includes("divide")) {
    result = numbers.reduce((acc, num) => acc / num);
  } else if (loweredCommand.includes("%") || loweredCommand.includes("remainder")) {
    result = numbers.reduce((acc, num) => acc % num);
  }
  return `${sayMath} ${result}`;
}

function setTimer(command) {
  const timerMatch = command.match(/(\d+)\s*minutes/);
  const sayTimer = getRandomAnswer(voiceAssistant.timer);
  const sayTimerError = getRandomAnswer(voiceAssistant.timerError);

  if (timerMatch) {
    const minutes = parseInt(timerMatch[1]);
    setTimeout(() => {
      console.log("Timer done!");
    }, minutes * 60 * 1000);
    return `${sayTimer} ${minutes} minutes`;
  }
  return `${sayTimerError}`;
}

function getReply(command) {
  loweredCommand = command.toLowerCase();
  if (loweredCommand.includes("hello") && loweredCommand.includes("my name is")) {
    return fetchRandomHello(command);
  }

  if (loweredCommand.includes("what") && loweredCommand.includes("my name")) {
    const sayName = getRandomAnswer(voiceAssistant.yourName);
    const sayUserName = userData.userName;
    const sayUserNameError = getRandomAnswer(voiceAssistant.yourNameError);

    if (!userData.userName) {
      return `${sayUserNameError}`;
    }
    return `${sayName} ${sayUserName}`;
  }

  if (loweredCommand.includes("add") && loweredCommand.includes("to my todo")) {
    return addToTodoList(command);
  }

  if (loweredCommand.includes("remove") && loweredCommand.includes("from my todo")) {
    return removeFromTodoList(command);
  }

  if (loweredCommand.includes("what") && loweredCommand.includes("on my todo")) {
    return whatIsOnTodoList();
  }

  if (loweredCommand.includes("what day") && loweredCommand.includes("today")) {
    return getDate();
  }

  if (loweredCommand.includes("what is") && (loweredCommand.includes("/") || loweredCommand.includes("*") || loweredCommand.includes("+") || loweredCommand.includes("-"))) {
    return doBasicMath(command);
  }

  if (loweredCommand.includes("set") && loweredCommand.includes("timer") && loweredCommand.includes("for")) {
    return setTimer(command);
  }

  return;
}

console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("Hello my name is Benjamin Franklin"));
console.log(getReply("Hello my name is"));
console.log(getReply("What is my name?"));
console.log(getReply("Add Fishing to my todo"));
console.log(getReply("Add Fishing to my todo"));
console.log(getReply("Add Camping to my todo"));
console.log(getReply("Add Buy groceries to my todo"));
console.log(getReply("Add Singing in the Shower to my todo"));
console.log(getReply("Remove Fishing from my todo"));
console.log(getReply("What is on my todo"));
console.log(getReply("What day is it today?"));
console.log(getReply("What is 3 + 2?"));
console.log(getReply("What is three + two?"));
console.log(getReply("Set timer for 1 minutes"));
console.log(getReply("Set timer for five minutes"));
