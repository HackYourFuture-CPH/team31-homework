// Movie data
const movie = {
  id: 1,
  title: "Interstellar",
  description:
    "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
  movie_year: 2014,
  director: "Christopher Nolan",
  actors: [
    "Matthew McConaughey",
    "Anne Hathaway",
    "Jessica Chastain",
    "Michael Caine",
    "Casey Affleck",
  ],
  poster_url:
    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  price: "120.00",
};

// DOM
const moviePoster = document.getElementById("movie-poster");
const movieTitle = document.getElementById("movie-title");
const movieDescription = document.getElementById("movie-description");
const movieYear = document.getElementById("movie-year");
const movieDirector = document.getElementById("movie-director");
const moviePrice = document.getElementById("movie-price");
const movieActors = document.getElementById("movie-actors");
const stars = document.querySelectorAll(".stars i");
const ratingDisplay = document.getElementById("rating-display");
const commentInput = document.getElementById("comment-input");
const submitComment = document.getElementById("submit-comment");
const commentsList = document.getElementById("comments-list");

// movie data
function initializeMovie() {
  moviePoster.src = movie.poster_url;
  movieTitle.textContent = movie.title;
  movieDescription.textContent = movie.description;
  movieYear.textContent = movie.movie_year;
  movieDirector.textContent = movie.director;
  moviePrice.textContent = `DKK${movie.price}`;

  // Display actors
  movie.actors.forEach((actor) => {
    const li = document.createElement("li");
    li.textContent = actor;
    movieActors.appendChild(li);
  });
}

// Rating functionality
let currentRating = 0;

stars.forEach((star) => {
  star.addEventListener("mouseover", () => {
    const rating = parseInt(star.dataset.rating);
    highlightStars(rating);
  });

  star.addEventListener("click", () => {
    currentRating = parseInt(star.dataset.rating);
    highlightStars(currentRating);
    ratingDisplay.textContent = `Your rating: ${currentRating}/5`;
  });
});

function highlightStars(rating) {
  stars.forEach((star) => {
    const starRating = parseInt(star.dataset.rating);
    if (starRating <= rating) {
      star.classList.add("active");
    } else {
      star.classList.remove("active");
    }
  });
}

// Comments functionality
submitComment.addEventListener("click", () => {
  const commentText = commentInput.value.trim();
  if (commentText) {
    const commentElement = document.createElement("div");
    commentElement.className = "comment";
    commentElement.textContent = commentText;
    commentsList.insertBefore(commentElement, commentsList.firstChild);
    commentInput.value = "";
  }
});

// Initialize the page
initializeMovie();
