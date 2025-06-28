// for (i = 0; i < restaurants.length; i++) {
//   console.log(restaurants[i]);
// }

// restaurants.forEach((restaurant) => {
//   console.log(restaurant);
// });

// let i = 0;
// while (i < restaurants.length) {
//   console.log(restaurants[i]);
//   i++;
// }

// for (let restaurant of restaurants) {
//   console.log(restaurant);
// }

// function changeCase(name) {
//   return `${name.toUpperCase()} - ${Math.random()}`;
// }

// const mentorNamesTrad = [];

// for (i = 0; i < mentors.length; i++) {
//   const name = mentors[i].name;
//   const changedName = changeCase(name);
//   mentorNamesTrad.push(changedName);
// }
// console.log(mentorNamesTrad);

// const mentorsNamesMap = mentors.map((mentor, i) => {
//   return changeCase(mentor.name);
// });

// console.log(mentorsNamesMap);

// const restaurantNames = [];
// for (let i = 0; i < restaurants.length; i++) {
//   restaurantNames.push(restaurants[i].name);
// }
// console.log(restaurantNames);

// const restaurantNamesMap = restaurants.map((restaurant) => {
//   return restaurant.name;
// });
// console.log(restaurantNamesMap);

// const mentorsWithDbSkills = [];
// for (i = 0; i < mentors.length; i++) {
//   const mentor = mentors[i];
//   const subjectsLowerCase = mentor.subjects.map((subject) => {
//     return subject.toLowerCase();
//   });
//   if (subjects.includes("database") || subjects.includes("db")) {
//     mentorsWithDbSkills.push(mentors[i].name);
//   }
// }
// console.log(mentorsWithDbSkills);

// const mentorsTeachingDb = mentors.filter((mentor) => {
//   const subjectsLowerCase = mentor.subjects.map((subject) => {
//     return subject.toLowerCase();
//   });

//   if (subjectsLowerCase.includes("database") || subjectsLowerCase.includes("db")) {
//     return true;
//   }
//   return false;
// });
// console.log(mentorsTeachingDb);

// const namesOfMentorsTeachingDb = mentorsTeachingDb.map((mentor) => {
//   return mentor.name;
// });

// const italianAndPizzaRestaurants = [];
// for (let i = 0; i < restaurants.length; i++) {
//   const type = restaurants[i].type.toLowerCase();
//   if (type === "pizza" || type === "italian") {
//     italianAndPizzaRestaurants.push(restaurants[i]);
//   }
// }
// console.log(italianAndPizzaRestaurants);

// const italianAndPizzaPlaces = restaurants.filter((restaurant) => {
//   const type = restaurant.type.toLowerCase();
//   if (type === "pizza" || type === "italian") {
//     return true;
//   }
//   return false;
// });
// console.log(italianAndPizzaPlaces);

// mentors.sort((itemA, itemB) => {
//   if (itemA.yearsOfExperience > itemB.yearsOfExperience) {
//     return 1;
//   }
//   if (itemA.yearsOfExperience < itemB.yearsOfExperience) {
//     return -1;
//   }
//   return 0;
// });

// restaurants.sort((a, b) => {
//   return a.rating < b.rating ? 1 : -1;
// });

// console.log(restaurants);

// const newMentors = mentors.map((mentor) => {
//   return mentor;
// });
// console.log(`New Mentors: `, newMentors);

const italianAndPizzaPlacesSorted = restaurants
  .filter((restaurant) => {
    const type = restaurant.type.toLowerCase();
    return type === "pizza" || type === "italian" ? 1 : 0;
  })
  .sort((a, b) => {
    return a.rating > b.rating ? -1 : 1;
  })

  .map((resto) => {
    return resto.name;
  });

console.log(italianAndPizzaPlacesSorted);
