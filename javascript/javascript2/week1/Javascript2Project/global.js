let gameSize = 0;
let moveCounter = 0;
let timer = 0;
let startTime = 0;
let cardDiv;
let landingMenu;
let timeTaken = 0;
let gameTime = 0;
let cardsArray = [];
let boardLocked = false;
let matchedPairs = 0;
let totalPairs = 0;

const cardDefinitions = [
	['Two', 'H', 'Hearts'],
	['Two', 'D', 'Diamonds'],
	['Two', 'C', 'Clubs'],
	['Two', 'S', 'Spades'],
	['Three', 'H', 'Hearts'],
	['Three', 'D', 'Diamonds'],
	['Three', 'C', 'Clubs'],
	['Three', 'S', 'Spades'],
	['Four', 'H', 'Hearts'],
	['Four', 'D', 'Diamonds'],
	['Four', 'C', 'Clubs'],
	['Four', 'S', 'Spades'],
	['Five', 'H', 'Hearts'],
	['Five', 'D', 'Diamonds'],
	['Five', 'C', 'Clubs'],
	['Five', 'S', 'Spades'],
	['Six', 'H', 'Hearts'],
	['Six', 'D', 'Diamonds'],
	['Six', 'C', 'Clubs'],
	['Six', 'S', 'Spades'],
	['Seven', 'H', 'Hearts'],
	['Seven', 'D', 'Diamonds'],
	['Seven', 'C', 'Clubs'],
	['Seven', 'S', 'Spades'],
	['Eight', 'H', 'Hearts'],
	['Eight', 'D', 'Diamonds'],
	['Eight', 'C', 'Clubs'],
	['Eight', 'S', 'Spades'],
	['Nine', 'H', 'Hearts'],
	['Nine', 'D', 'Diamonds'],
	['Nine', 'C', 'Clubs'],
	['Nine', 'S', 'Spades'],
	['Ten', 'H', 'Hearts'],
	['Ten', 'D', 'Diamonds'],
	['Ten', 'C', 'Clubs'],
	['Ten', 'S', 'Spades'],
	['Jack', 'H', 'Hearts'],
	['Jack', 'D', 'Diamonds'],
	['Jack', 'C', 'Clubs'],
	['Jack', 'S', 'Spades'],
	['Queen', 'H', 'Hearts'],
	['Queen', 'D', 'Diamonds'],
	['Queen', 'C', 'Clubs'],
	['Queen', 'S', 'Spades'],
	['King', 'H', 'Hearts'],
	['King', 'D', 'Diamonds'],
	['King', 'C', 'Clubs'],
	['King', 'S', 'Spades'],
	['Ace', 'H', 'Hearts'],
	['Ace', 'D', 'Diamonds'],
	['Ace', 'C', 'Clubs'],
	['Ace', 'S', 'Spades'],
];

const cardStorageArray = [];
const randomCardsArray = [];
const backSrc = './cards/cardBack.webp';
const bestScoreStorageKey = 'memory-card-game-best-scores';

document.addEventListener('DOMContentLoaded', () => {
	document.body.innerHTML = `
    <main class="memory-app">
      <section class="hero">
        <div class="hero__copy">
          <p class="hero__eyebrow">Card Strategy Drill</p>
          <h1 class="hero__title">Memory Card Game</h1>
          <p class="hero__text">
            Pick a difficulty, keep your turns tight, and clear the table with the fewest moves possible.
          </p>
        </div>

        <div id="landing-menu" class="landing__menu">
          <div class="landing__panel">
            <p class="landing__label">Choose difficulty</p>
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
        </div>
      </section>

      <section id="game-shell" class="game__shell game__shell--hidden" aria-live="polite">
        <div class="status__bar">
          <div class="status__chip">
            <span class="status__label">Level</span>
            <strong id="difficulty-value" class="status__value">Easy</strong>
          </div>
          <div class="status__chip">
            <span class="status__label">Moves</span>
            <strong id="moves-value" class="status__value">0</strong>
          </div>
          <div class="status__chip">
            <span class="status__label">Time</span>
            <strong id="timer" class="status__value">0 seconds</strong>
          </div>
          <div class="status__chip">
            <span class="status__label">Progress</span>
            <strong id="progress-value" class="status__value">0 / 0</strong>
          </div>
          <div class="status__chip">
            <span class="status__label">Best</span>
            <strong id="best-value" class="status__value">No record</strong>
          </div>
        </div>

        <div class="table__frame">
          <div id="cards-grid" class="cards__box"></div>
        </div>
      </section>
    </main>
  `;

	cardDiv = document.getElementById('cards-grid');
	landingMenu = document.getElementById('landing-menu');

	const difficultyButtons = document.querySelectorAll('#difficulty-buttons button');
	difficultyButtons.forEach((button) => {
		button.addEventListener('click', () => startGame(button.dataset.pairs));
	});
});

// Create the card deck locally so the game works without network access.
function createCardDeck() {
	cardsArray = cardDefinitions.map(([rank, suitCode, suitName]) => ({
		cardName: `${rank} of ${suitName}`,
		cardUrl: `./cards/${rank}${suitCode}.webp`,
	}));
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

function formatTime(totalSeconds) {
	const hours = Math.floor(totalSeconds / 3600);
	const minutes = Math.floor((totalSeconds % 3600) / 60);
	const seconds = totalSeconds % 60;
	const parts = [];

	if (hours > 0) {
		parts.push(`${hours} ${hours === 1 ? 'hour' : 'hours'}`);
	}
	if (minutes > 0) {
		parts.push(`${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`);
	}
	parts.push(`${seconds} ${seconds === 1 ? 'second' : 'seconds'}`);

	return parts.join(' ');
}

function getBestScores() {
	try {
		return JSON.parse(localStorage.getItem(bestScoreStorageKey)) || {};
	} catch (error) {
		return {};
	}
}

function getBestRecord(size) {
	return getBestScores()[size] || null;
}

function saveBestRecord(size, record) {
	try {
		const bestScores = getBestScores();
		bestScores[size] = record;
		localStorage.setItem(bestScoreStorageKey, JSON.stringify(bestScores));
	} catch (error) {
		console.error('Unable to save best score:', error);
	}
}
