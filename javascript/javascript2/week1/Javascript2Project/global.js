let gameSize = 0;
let moveCounter = 0;
let timer = 0;
let startTime = 0;
let cardDiv;
let landingMenu;
let timeTaken = 0;
let gameTime = 0;
let cardsArray = [];

const cardStorageArray = [];
const randomCardsArray = [];
const backSrc = "./cards/cardBack.webp";

// Added this as Valentin suggested.
// Used template literals as Yasen suggested
document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = `
    <section id="cards" class="cards">
      <div id="landing-menu" class = landing__menu>
        <h1>This is a Memory Card Game</h1>
        <div id="difficulty-buttons" class="difficulty__buttons">
          <button class="difficulty__button" data-pairs="4">Easy</button>
          <button class="difficulty__button" data-pairs="6">Medium</button>
          <button class="difficulty__button" data-pairs="8">Hard</button>
          <button class="difficulty__button" data-pairs="10">Very Hard</button>
          <button class="difficulty__button" data-pairs="12">Insane</button>
          <button class="difficulty__button" data-pairs="16">Hell</button>
          <button class="difficulty__button" data-pairs="20">Nightmare</button>
          <button class="difficulty__button" data-pairs="24">Impossible</button>
        </div>
      </div>
      <div id="cards-grid" class="cards__box"></div>
    </section>
  `;

  cardDiv = document.getElementById("cards-grid");
  landingMenu = document.getElementById("landing-menu");

  const difficultyButtons = document.querySelectorAll("#difficulty-buttons button");
  difficultyButtons.forEach((button) => {
    button.addEventListener("click", () => startGame(button.dataset.pairs));
  });
});

// Creating a card deck from cards and suits
async function createCardDeck() {
  cardsArray = [];
  try {
    const response = await fetch("https://raw.githubusercontent.com/VadimTofan/team31-homework/refs/heads/main/javascript/javascript3/week1/cards.json");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const myData = await response.json();
    cardsArray = myData;
  } catch (error) {
    console.error("Error fetching card data:", error);
  }
}

createCardDeck();

// Preload images for better performance
function preloadImages() {
  cardsArray.forEach((card) => {
    const img = new Image();
    img.src = card.cardUrl;
  });
}

preloadImages();
