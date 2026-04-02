// Starting the Game by requesting user to input the amount of card pairs they want
function startGame(pairs) {
  if (!gameSize) {
    gameSize = Number(pairs);
    totalPairs = gameSize;
    matchedPairs = 0;
    moveCounter = 0;
    boardLocked = false;
    cardStorageArray.length = 0;
    randomCardsArray.length = 0;

    if (landingMenu) landingMenu.style.display = "none";
    generateRandomCard();
    choseGameDifficulty(gameSize);

    const gameShell = document.getElementById("game-shell");
    if (gameShell) gameShell.classList.remove("game__shell--hidden");

    updateHud();
  }
}

function toggleCard(event) {
  const card = event.target;

  if (
    boardLocked ||
    card.classList.contains("matched") ||
    card.classList.contains("oneOfTwo")
  ) {
    return;
  }

  // Prevent clicking more than two cards at a time
  const flippedCards = document.querySelectorAll(".oneOfTwo");
  if (flippedCards.length >= 2) return;

  // Starting the timer when first card is flipped
  if (!startTime) startTimer();

  card.src = card.dataset.cardUrl;
  card.alt = card.dataset.cardName;

  // Add class to track flipped state
  card.classList.add("card__info--flipped", "oneOfTwo");

  const currentCards = document.querySelectorAll(".oneOfTwo");

  if (currentCards.length === 2) {
    moveCounter++;
    updateHud();

    const [firstCard, secondCard] = currentCards;

    if (firstCard.dataset.cardName === secondCard.dataset.cardName) {
      // Matched cards logic
      setTimeout(() => {
        matchedPairs++;
        [firstCard, secondCard].forEach((card) => {
          card.style.opacity = "0.35";
          card.removeEventListener("click", toggleCard);
          card.classList.remove("oneOfTwo");
          card.classList.add("matched");
        });

        updateHud();
        checkWinCondition();
      }, 500);
    } else {
      // Unmatched cards flip back
      boardLocked = true;
      setTimeout(() => {
        [firstCard, secondCard].forEach((card) => {
          card.src = backSrc;
          card.alt = "Back side of a playing card";
          card.classList.remove("card__info--flipped", "oneOfTwo");
        });
        boardLocked = false;
      }, 1000);
    }
  }
}
