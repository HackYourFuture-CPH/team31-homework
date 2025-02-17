//CodeWar-Add property to every object

var questions = [
  {
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0,
  },
  {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0,
  },
];
for (let i = 0; i < questions.length; i++) {
  questions[i].usersAnswer = null;
  console.log(questions[i]);
}

//CodeWar-Color Association

var array = [
  ["white", "goodness"],
  ["blue", "tranquility"],
  ["red", "energy"],
  ["yellow", "creativity"],
  ["brown", "friendly"],
  ["green", "growth"],
];

function colourAssociation(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    const obj = {};
    obj[array[i][0]] = array[i][1];
    newArray.push(obj);
  }
  return newArray;
}
console.log(colourAssociation(array));

// CodeWar-Unfinished Loop

function createArray(number) {
  const newArray = [];
  for (let counter = 0; counter < number; counter++) {
    newArray.push(counter + 1);
  }
  return newArray;
}
console.log(createArray(5));

//CodeWars-LongestString

function findLongest(str) {
  var spl = str.split(" ");
  console.log(spl);
  var longest = 0;
  let longestWord;
  let index = 0;

  for (var i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
      longest = spl[i].length;
      longestWord = spl[i];
      index = i;
    }
  }
  console.log(
    ` '${longestWord}', is the longest word (Characters = ${longest}) in given string. The index is ${index}`
  );
}

findLongest("The quick white fox jumped around the massive dog");
findLongest("Take me to tinseltown with you");
findLongest("Sausage chops");
findLongest("Wind your body and wiggle your belly");
findLongest("Lets all go on holiday");

// CodeWars-Who'sOnline
const users = [
  {
    username: "David",
    status: "online",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "Offline",
    lastActivity: 22,
  },
  {
    username: "Wasim",
    status: "online",
    lastActivity: 104,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 10,
  },
  {
    username: "Jamshaid",
    status: "online",
    lastActivity: 1000000,
  },
  {
    username: "Nepun",
    status: "online",
    lastActivity: 104,
  },
];
function whosOnline(friends) {
  const result = {
    online: [],
    offline: [],
    away: [],
  };

  for (let i = 0; i < friends.length; i++) {
    if (friends[i].status === "online") {
      if (friends[i].lastActivity <= 10) {
        result.online.push(friends[i].username);
      } else {
        result.away.push(friends[i].username);
      }
    } else {
      result.offline.push(friends[i].username);
    }
  }
  for (let i in result) {
    if (result[i].length === 0) {
      delete result[i];
    }
  }
  return result;
}
const statusOnlineOffline = whosOnline(users);
console.log(statusOnlineOffline);
