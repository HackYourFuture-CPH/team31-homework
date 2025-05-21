// Get DOM  Element
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

//Movies data
function getMovieRating(movieId) {
  const rating = localStorage.getItem(`movie-${movieId}-rating`);
  return rating ? parseInt(rating) : 0;
}

function displayRatingStars(rating) {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    stars += `<i class="fas fa-star ${i <= rating ? "active" : ""}"></i>`;
  }
  return stars;
}

function initializeMovies() {
  const moviesContainer = document.querySelector(".container");
  moviesContainer.innerHTML = "";

  // Create modal if it doesn't exist
  if (!document.querySelector(".modal")) {
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close-modal">&times;</span>
        <div class="modal-body"></div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  movies.forEach((movie) => {
    const movieRating = getMovieRating(movie.id);
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");

    movieCard.innerHTML = `
      <img src="${movie.poster_url}" alt="${
      movie.title
    } Poster" onerror="this.src='https://via.placeholder.com/600x900?text=No+Image+Available'" />
      <div class="movie-info">
        <h2>${movie.title}</h2>
        <p>${movie.description}</p>
        <div class="movie-brief">
          <p><strong>Year:</strong> ${movie.movie_year}</p>
          <p><strong>Director:</strong> ${movie.director}</p>
        </div>
        <div class="movie-rating">
          <p><strong>Rating:</strong></p>
          <div class="stars-display">
            ${displayRatingStars(movieRating)}
          </div>
        </div>
        <button class="read-more-btn" data-movie-id="${
          movie.id
        }">Read More</button>
      </div>
    `;

    moviesContainer.appendChild(movieCard);
  });

  // Set up event listeners for Read More buttons
  setupReadMoreListeners();
}

function setupReadMoreListeners() {
  const modal = document.querySelector(".modal");
  const modalContent = modal.querySelector(".modal-body");
  const closeBtn = modal.querySelector(".close-modal");

  // Remove any existing event listeners
  const readMoreButtons = document.querySelectorAll(".read-more-btn");
  readMoreButtons.forEach((button) => {
    button.replaceWith(button.cloneNode(true));
  });

  // Add new event listeners
  document.querySelectorAll(".read-more-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const movieId = parseInt(button.dataset.movieId);
      const movie = movies.find((m) => m.id === movieId);
      //Refer to Notice 1
      if (movie) {
        modalContent.innerHTML = `
          <h2>${movie.title}</h2>
          <p>${movie.description}</p>
          <div class="movie-details">
            <p><strong>Year:</strong> ${movie.movie_year}</p>
            <p><strong>Director:</strong> ${movie.director}</p>
            <p><strong>Price:</strong> $${movie.price}</p>
          </div>
          <div class="actors">
            <h3>Main Actors:</h3>
            <ul>${movie.actors
              .map((actor) => `<li>${actor}</li>`)
              .join("")}</ul>
          </div>
          
          <div class="rating-section">
            <h3>Rate this movie:</h3>
            <div class="stars">
              <i class="fas fa-star" data-rating="1"></i>
              <i class="fas fa-star" data-rating="2"></i>
              <i class="fas fa-star" data-rating="3"></i>
              <i class="fas fa-star" data-rating="4"></i>
              <i class="fas fa-star" data-rating="5"></i>
            </div>
            <p class="rating-display"></p>
          </div>

          <div class="comments-section">
            <h3>Comments:</h3>
            <div class="comment-form">
              <textarea class="comment-input" placeholder="Write your comment here..."></textarea>
              <button class="submit-comment">Submit Comment</button>
            </div>
            <div class="comments-list"></div>
          </div>
        `;

        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open (I found in internet )
        setupModalEventListeners(modalContent, movie.id);
      }
    });
  });

  // Close modal
  closeBtn.addEventListener("click", () => {
    closeModal(modal);
  });
  // e is a short form of event, which represents the event
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal(modal);
    }
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "block") {
      closeModal(modal);
    }
  });
}

//close modal
function closeModal(modal) {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

function setupModalEventListeners(modalContent, movieId) {
  const stars = modalContent.querySelectorAll(".stars i");
  const ratingDisplay = modalContent.querySelector(".rating-display");
  const submitComment = modalContent.querySelector(".submit-comment");
  const commentInput = modalContent.querySelector(".comment-input");
  const commentsList = modalContent.querySelector(".comments-list");

  // Load existing ratings and comments for this movie
  const savedRating = localStorage.getItem(`movie-${movieId}-rating`);
  const savedComments =
    JSON.parse(localStorage.getItem(`movie-${movieId}-comments`)) || [];

  // Set up rating system
  if (savedRating) {
    highlightStars(stars, parseInt(savedRating));
    ratingDisplay.textContent = `Your rating: ${savedRating}/5`;
  }

  stars.forEach((star) => {
    star.addEventListener("mouseover", () => {
      highlightStars(stars, parseInt(star.dataset.rating));
    });

    star.addEventListener("mouseout", () => {
      if (savedRating) {
        highlightStars(stars, parseInt(savedRating));
      } else {
        clearStars(stars);
      }
    });

    star.addEventListener("click", () => {
      const rating = parseInt(star.dataset.rating);
      localStorage.setItem(`movie-${movieId}-rating`, rating);
      highlightStars(stars, rating);
      ratingDisplay.textContent = `Your rating: ${rating}/5`;
    });
  });

  // Load existing comments
  savedComments.forEach((comment) => {
    const commentElement = document.createElement("div");
    commentElement.className = "comment";
    commentElement.textContent = comment;
    commentsList.appendChild(commentElement);
  });

  // Set up comment submission
  submitComment.addEventListener("click", () => {
    const commentText = commentInput.value.trim();
    if (commentText) {
      const commentElement = document.createElement("div");
      commentElement.className = "comment";
      commentElement.textContent = commentText;
      commentsList.insertBefore(commentElement, commentsList.firstChild);

      // Save comment
      saveComment(movieId, commentText);

      commentInput.value = "";
    }
  });
}

function highlightStars(stars, rating) {
  stars.forEach((star) => {
    const starRating = parseInt(star.dataset.rating);
    if (starRating <= rating) {
      star.classList.add("active");
    } else {
      star.classList.remove("active");
    }
  });
}

function clearStars(stars) {
  stars.forEach((star) => star.classList.remove("active"));
}

// Function to save comments to localStorage
function saveComment(movieId, comment) {
  let comments =
    JSON.parse(localStorage.getItem(`movie-${movieId}-comments`)) || [];
  comments.unshift(comment);
  localStorage.setItem(`movie-${movieId}-comments`, JSON.stringify(comments));
}

// Function to sort movies
function sortMovies(criteria) {
  const sortOptions = {
    name: (a, b) => a.title.localeCompare(b.title),
    "name-desc": (a, b) => b.title.localeCompare(a.title),
    year: (a, b) => a.movie_year - b.movie_year,
    "year-desc": (a, b) => b.movie_year - a.movie_year,
    director: (a, b) => a.director.localeCompare(b.director),
  };

  const sortedMovies = [...movies].sort(sortOptions[criteria] || (() => 0));
  renderMovies(sortedMovies);
}

// Add event listener for sort dropdown
const sortSelect = document.querySelector(".sort-select");

if (sortSelect) {
  // Automatic sorting when dropdown value changes
  sortSelect.addEventListener("change", () => {
    const selectedValue = sortSelect.value;
    sortMovies(selectedValue);
  });
}

// Initialize the page
initializeMovies();

// Function to search movies by title
function searchMoviesByTitle(keyword) {
  // Convert keyword to lowercase for better search
  const searchTerm = keyword.toLowerCase();

  // Filter movies based on keyword
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm)
  );

  return filteredMovies;
}

// Function to render movies in the container
function renderMovies(moviesToRender) {
  const container = document.querySelector(".container");
  container.innerHTML = ""; // Clear current movies

  if (moviesToRender.length === 0) {
    container.innerHTML = '<div class="no-results">No movies found</div>';
    return;
  }

  moviesToRender.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");
    movieCard.innerHTML = `
            <img src="${movie.poster_url}" alt="${
      movie.title
    } Poster" onerror="this.src='https://via.placeholder.com/600x900?text=No+Image+Available'" />
            <div class="movie-info">
                <h2>${movie.title}</h2>
                <p>${movie.description}</p>
                <div class="movie-brief">
                    <p><strong>Year:</strong> ${movie.movie_year}</p>
                    <p><strong>Director:</strong> ${movie.director}</p>
                </div>
                <div class="movie-rating">
                    <p><strong>Rating:</strong></p>
                    <div class="stars-display">
                        ${displayRatingStars(getMovieRating(movie.id))}
                    </div>
                </div>
                <button class="read-more-btn" data-movie-id="${
                  movie.id
                }">Read More</button>
            </div>
        `;
    container.appendChild(movieCard);
  });

  // Re-initialize event listeners for the new cards
  setupReadMoreListeners();
}

// Initialize search functionality
const searchInput = document.querySelector("#searchInput");
searchInput.addEventListener("input", (e) => {
  const keyword = e.target.value;
  const searchResults = searchMoviesByTitle(keyword);
  // Display search results
  renderMovies(searchResults);
});

// Add styles for no results message
const noResultsStyle = document.createElement("style");
noResultsStyle.textContent = `
    .no-results {
        text-align: center;
        padding: 2rem;
        color: var(--text-light);
        font-size: 1.2rem;
        grid-column: 1 / -1;
    }
`;
document.head.appendChild(noResultsStyle);

// Timer functionality
class Timer {
  constructor() {
    this.selectionTimer = null;
    this.pageTimer = null;
    this.startTime = null;
    this.initializeTimers();
  }

  initializeTimers() {
    // Initialize movie selection timer
    const startSelectionTimerBtn = document.getElementById(
      "startSelectionTimer"
    );
    const selectionTimeInput = document.getElementById("selectionTime");
    const selectionTimerDisplay = document.getElementById(
      "selectionTimerDisplay"
    );

    startSelectionTimerBtn.addEventListener("click", () => {
      const minutes = parseInt(selectionTimeInput.value) || 5;
      this.startSelectionTimer(minutes);
    });

    // Initialize page time timer
    this.startPageTimer();
  }

  startSelectionTimer(minutes) {
    // Clear existing timer if any
    if (this.selectionTimer) {
      clearInterval(this.selectionTimer);
    }

    let timeLeft = minutes * 60;
    const selectionTimerDisplay = document.getElementById(
      "selectionTimerDisplay"
    );

    // Update display immediately
    this.updateSelectionTimerDisplay(timeLeft);

    // Start countdown
    this.selectionTimer = setInterval(() => {
      timeLeft--;
      this.updateSelectionTimerDisplay(timeLeft);

      if (timeLeft <= 0) {
        clearInterval(this.selectionTimer);
        this.handleTimerComplete();
      }
    }, 1000);
  }

  updateSelectionTimerDisplay(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const display = document.getElementById("selectionTimerDisplay");
    display.textContent = `${minutes}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  }

  startPageTimer() {
    this.startTime = Date.now();
    const pageTimeDisplay = document.getElementById("pageTimeDisplay");

    this.pageTimer = setInterval(() => {
      const elapsed = Math.floor((Date.now() - this.startTime) / 1000);
      const hours = Math.floor(elapsed / 3600);
      const minutes = Math.floor((elapsed % 3600) / 60);
      const seconds = elapsed % 60;

      pageTimeDisplay.textContent = `${hours
        .toString()
        .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
    }, 1000);
  }

  handleTimerComplete() {
    // Play notification sound
    const audio = new Audio(
      "https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3"
    );
    audio.play();

    // Show notification
    if ("Notification" in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification("Time's Up!", {
            body: "Your movie selection time has expired!",
            icon: "https://via.placeholder.com/64",
          });
        }
      });
    }

    // Visual feedback
    const display = document.getElementById("selectionTimerDisplay");
    display.textContent = "Time's Up!";
    display.style.color = "#ff4444";
    setTimeout(() => {
      display.style.color = "white";
      display.textContent = "00:00";
    }, 2000);
  }
}

// Initialize timers when the page loads
document.addEventListener("DOMContentLoaded", () => {
  const timer = new Timer();
});
