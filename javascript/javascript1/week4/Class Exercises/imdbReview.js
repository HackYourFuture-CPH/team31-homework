console.log("=======1.2 IMDB Review=======");

function filter(movie) {
  let array = [];
  for (let i = 0; i < movie.length; i++) {
    if (movie[i].rating >= 8) {
      array.push(movie[i].title);
    }
  }
  return array;
}

let movieData = [
  { title: "Interstellar", rating: 8.6 },
  { title: "The Room", rating: 3.7 },
  { title: "The Godfather", rating: 9.2 },
  { title: "Cars", rating: 7.1 },
];

console.log(filter(movieData));

// This function filters the array of ojbects (movieData)
// and pushes the object names of movies with rating more than 8
// into a new array called (array)
