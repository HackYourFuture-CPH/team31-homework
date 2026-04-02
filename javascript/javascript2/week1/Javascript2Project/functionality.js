// Generate random cards from the deck, the amount of cards is determined by user in gameSize
function generateRandomCard() {
  randomCardsArray.length = 0;

  const shuffledCards = [...cardsArray].sort(() => Math.random() - 0.5);
  for (let i = 0; i < gameSize; i++) {
    const selectedCard = shuffledCards[i];
    randomCardsArray.push(selectedCard, selectedCard);
  }

  randomCardsArray.sort(() => Math.random() - 0.5);
}

// Setting up the game, according to the gameSize
function choseGameDifficulty(cardPairs) {
  if (!cardDiv) return;
  cardDiv.innerHTML = "";
  document.getElementById("cards-grid").style.display = "";
  for (let i = 0; i < cardPairs * 2; i++) {
    const currentCard = randomCardsArray[i];
    const img = document.createElement("img");
    img.src = backSrc;
    img.alt = "Back side of a playing Card";
    img.classList.add("card__info");
    img.id = `card-${i + 1}`;
    img.dataset.cardName = currentCard.cardName;
    img.dataset.cardUrl = currentCard.cardUrl;
    img.addEventListener("click", toggleCard);
    cardDiv.appendChild(img);
  }
}

// Check if all cards matched.
function checkWinCondition() {
  if (matchedPairs !== totalPairs) return;
  setTimeout(() => {
    // Stop the timer
    clearInterval(timer);
    updateScoreboard();
  }, 500);
}

function updateScoreboard() {
  const scoreBase = Math.pow(gameSize, 2);
  const efficiencyBonus = Math.max(totalPairs * 4 - moveCounter, 0) * 6;
  const speedBonus = Math.max(totalPairs * 18 - gameTime, 0);
  const finalScore = Math.max(scoreBase * 10 + efficiencyBonus + speedBonus, 0);
  const record = {
    score: finalScore,
    moves: moveCounter,
    time: gameTime,
  };
  const existingRecord = getBestRecord(gameSize);
  const isNewBest =
    !existingRecord ||
    finalScore > existingRecord.score ||
    (finalScore === existingRecord.score && gameTime < existingRecord.time);

  if (isNewBest) {
    saveBestRecord(gameSize, record);
  }

  updateHud();

  document.getElementById("cards-grid").style.display = "none";

  const scoreboard = document.createElement("section");
  scoreboard.id = "scoreboard";
  scoreboard.classList.add("scoreboard");
  scoreboard.innerHTML = `
        <p class="scoreboard__eyebrow">Table cleared</p>
        <h2 class="scoreboard__title">Round complete</h2>
        <p class="level-difficulty">Difficulty: ${getDifficultyLabel(gameSize)}</p>
        <div class="score">
          <p class="score__label">Score</p>
          <p class="score__value">${finalScore} pts</p>
        </div>
        <div class="score">
          <p class="score__label">Time</p>
          <p class="score__value">${timeTaken}</p>
        </div>
        <div class="score">
          <p class="score__label">Moves</p>
          <p class="score__value">${moveCounter}</p>
        </div>
        <div class="score">
          <p class="score__label">Best</p>
          <p class="score__value">${formatBestRecord(getBestRecord(gameSize))}</p>
        </div>
        <p class="scoreboard__message">${isNewBest ? "New best record for this level." : "Try again and beat your best run."}</p>
        <button id="reset" class="reset">Play Again</button>
      `;
  document.body.appendChild(scoreboard);
  document.getElementById("reset").addEventListener("click", resetGame);
}

// Function to get the difficulty name based on game size
function getDifficultyLabel(size) {
  const difficultyLevels = {
    4: "Easy",
    6: "Medium",
    8: "Hard",
    10: "Very Hard",
    12: "Insane",
    16: "Hell",
    20: "Nightmare",
    24: "Impossible",
  };
  return difficultyLevels[size] || "Unknown";
}

// If all cards matched, the game reloads.
function resetGame() {
  const scoreboard = document.getElementById("scoreboard");
  const timerElement = document.getElementById("timer");
  const gameShell = document.getElementById("game-shell");

  cardDiv.innerHTML = "";
  if (scoreboard) scoreboard.remove();
  if (timerElement) timerElement.textContent = "0 seconds";
  if (gameShell) gameShell.classList.add("game__shell--hidden");
  gameSize = 0;
  moveCounter = 0;
  matchedPairs = 0;
  totalPairs = 0;
  boardLocked = false;
  cardStorageArray.length = 0;
  randomCardsArray.length = 0;
  if (landingMenu) landingMenu.style.display = "block";
  resetTimer();
  updateHud();
}

// Creating a timer
function startTimer() {
  startTime = Date.now();
  timer = setInterval(() => {
    const time = Math.floor((Date.now() - startTime) / 1000);
    gameTime = time;
    timeTaken = formatTime(time);
    updateHud();
  }, 1000);
}

// Resetting the timer
function resetTimer() {
  clearInterval(timer);
  timer = 0;
  startTime = 0;
  gameTime = 0;
  timeTaken = "0 seconds";

  const timerElement = document.getElementById("timer");
  if (timerElement) {
    timerElement.textContent = "0 seconds";
  }
}

function updateHud() {
  const difficultyElement = document.getElementById("difficulty-value");
  const movesElement = document.getElementById("moves-value");
  const timerElement = document.getElementById("timer");
  const progressElement = document.getElementById("progress-value");
  const bestElement = document.getElementById("best-value");

  if (difficultyElement) {
    difficultyElement.textContent = gameSize ? getDifficultyLabel(gameSize) : "Waiting";
  }
  if (movesElement) {
    movesElement.textContent = `${moveCounter}`;
  }
  if (timerElement) {
    timerElement.textContent = timeTaken || "0 seconds";
  }
  if (progressElement) {
    progressElement.textContent = `${matchedPairs} / ${totalPairs}`;
  }
  if (bestElement) {
    bestElement.textContent = formatBestRecord(getBestRecord(gameSize));
  }
}

function formatBestRecord(record) {
  if (!record) return "No record";
  return `${record.score} pts`;
}
