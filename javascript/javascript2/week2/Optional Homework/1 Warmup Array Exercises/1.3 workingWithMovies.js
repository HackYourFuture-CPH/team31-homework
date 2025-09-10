// Short Named Movies
const shortNamedMovies = movies.filter((movie) => !movie.title.includes(" "));
//console.log(shortNamedMovies);

//Long Named Movies
const longNamedMovies = movies.filter((movie) => {
  const noOfWords = movie.title.trim().split(" ").length;
  if (noOfWords > 3) {
    return noOfWords;
  }
});
//console.log(longNamedMovies);

// No of Movies made between 1980 - 1989 including the number
const moviesFrom1980Till1989 = movies.filter(
  (movie) => movie.year >= 1980 && movie.year <= 1989
);
//console.log("Total No of Movies released from 1980 til 1989 is:", moviesFrom1980Till1989.length);

// Putting tag key to all objects in movies array on the basis of rating
const moviesWithTag = movies.map((movie) => {
  let tag;
  if (movie.rating >= 7) {
    tag = "GOOD";
  } else if (movie.rating >= 4) {
    tag = "AVERAGE";
  } else {
    tag = "BAD";
  }
  return { ...movie, tag };
});

//console.log(moviesWithTag);

//Using chaining, first filter the movies array to only contain the movies rated higher than 6. Now map the movies array to only the rating of the movies.
const moviesWithRating6Plus = movies
  .filter((movie) => movie.rating > 6)
  .map((movie) => movie.rating);
//console.log(moviesWithRating6Plus);

// Count the total number of movies containing any of following keywords:
// Surfer, Alien or Benjamin. So if there were 3 movies that contained Surfer, 1 with Alien and 2 with Benjamin,
// you would return 6. Can you make sure the search is case insensitive?

const keyWordsToSearch = ["Surfer", "Alien", "Benjamin"];
const count = movies.filter((movie) =>
  keyWordsToSearch.some((keyword) =>
    movie.title.toLowerCase().includes(keyword.toLowerCase())
  )
).length;
//console.log(count);

// Create an array of movies where a word in the title is duplicated. Fx "Star Wars: The Clone Wars" the word Wars is duplicated.
// Here are some madeup examples of movies with duplicated words in the title: "The three men and the pistol", "Chase three - The final chase"

const movieNamesWithDuplicatedWords = movies.filter((movie) => {
  const words = movie.title
    .toLowerCase()
    .replace(/["']/g, "")
    .split(/\W+/)
    .filter((word) => word !== "");
  const wordCount = {};

  words.forEach((word) => {
    if (wordCount[word]) {
      wordCount[word] += 1;
    } else {
      wordCount[word] = 1;
    }
  });

  return Object.values(wordCount).some((count) => count > 1);
});
//console.log(movieNamesWithDuplicatedWords);

//Calculate the average rating of all the movies using reduce.

const averageOfRating = movies.reduce((acc, movie, index) => {
  acc += movie.rating;
  if (index === movies.length - 1) {
    return acc / movies.length;
  }
  return acc;
}, 0);

// console.log(averageOfRating.toFixed(2));

// Count the total number of Good, Average and Bad movies using reduce. A return could fx be {goodMovies: 33, averageMovies: 45, goodMovies: 123} Optional

const movieCountOnTheBasicOfRating = movies.reduce(
  (acc, movie) => {
    if (movie.rating >= 7) {
      acc.goodMovies += 1;
    } else if (movie.rating >= 4) {
      acc.averageMovies += 1;
    } else {
      acc.badMovies += 1;
    }
    return acc;
  },
  { goodMovies: 0, averageMovies: 0, badMovies: 0 }
);

// console.log(movieCountOnTheBasicOfRating);
