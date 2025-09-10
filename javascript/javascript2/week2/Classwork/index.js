/* ## Excercise 1
1. Loop through the list of restaurants and display each object in the console **using a traditional loop**.
2. Loop through the list of restaurants and display each object in the console **using an array function**. */

for (let i = 0; i < restaurants.length; i++) {
  console.log(restaurants[i]);
}

restaurants.forEach((restaurant) => {
  console.log(restaurant);
});

/* ## Excercise 2
1. Create a new array containing the restaurant names **using a traditional loop**.
2. Create a new array containing the restaurant names **using an array function**. */

for (let i = 0; i < restaurants.length; i++) {
  console.log(restaurants[i].name);
}

const restNames = restaurants.map((res) => res.name);
console.log(restNames);

const lowRatedResurants = [];
for (let i = 0; i < restaurants.length; i++) {
  if (restaurants[i].rating < 4) {
    console.log(restaurants[i].name);
    lowRatedResurants.push(restaurants[i].name);
  }
}
console.log(lowRatedResurants);

/*
## Excercise 3
1. List all the `italian` and `pizza` restaurants in the console **using a traditional loop**.
2. List all the `italian` and `pizza` restaurants in the console **using an array function**.

## Excercise 5: Fuuuusion!!
1. Use the results of the Excercise 3 and sort them from the lowest to the highest. Then create a new array containing their names.
*/

const wish = "Italian";
const lowerCaseWish = wish.toLocaleLowerCase();
const italianAndPizaResturants = [];
for (let i = 0; i < restaurants.length; i++) {
  if (restaurants[i].type === lowerCaseWish) {
    italianAndPizaResturants.push(restaurants[i]);
  }
}

console.log("You Can Visit These Shops:", italianAndPizaResturants);

const italianAndPizzaResturants2 = restaurants
  .filter((item) => {
    return item.type === lowerCaseWish;
  })
  .sort((itemA, itemB) => {
    if (itemA.rating > itemB.rating) {
      return -1;
    }
    if (itemA.rating < itemB.rating) {
      return 1;
    }
    return 0;
  });

console.log(
  "You Can Visit These Shops",
  italianAndPizzaResturants2.map((restaurant) => restaurant)
);

/* # Excercise 4
1. Sort the restaurants by their rating **from the highest to the lowest** */

restaurants.sort((itemA, itemB) => {
  if (itemA.rating > itemB.rating) {
    return -1;
  }
  if (itemA.rating < itemB.rating) {
    return 1;
  }
  return 0;
});

console.log(
  restaurants.map((item) => {
    return `${item.name}, ${item.rating}`;
  })
);
