// Starting the Game by requesting user to input the amount of card pairs they want
function startGame(pairs) {
  if (!gameSize) {
    gameSize = Number(pairs);
    if (landingMenu) landingMenu.style.display = "none";
    choseGameDifficulty(gameSize);
    generateRandomCard();
    addTimer();

    const timerElement = document.getElementById("timer");
    if (timerElement.style.display === "none" || timerElement.style.display === "") {
      timerElement.style.display = "block";
    }
  }
}

function toggleCard(event) {
  const card = event.target;

  // Prevent clicking more than two cards at a time
  const flippedCards = document.querySelectorAll(".oneOfTwo");
  if (flippedCards.length >= 2) return;

  // Move counter
  moveCounter++;

  // Starting the timer when first card is flipped
  if (!startTime) startTimer();

  // Check if the card is already stored (has an assigned image)
  let storedCard = cardStorageArray.find((c) => c.cardId === card.id);

  // Flip the card based on stored data
  if (storedCard) {
    if (card.src.includes("cardBack")) {
      card.src = storedCard.cardSource;
      card.alt = storedCard.cardAlt;
    } else {
      card.src = backSrc;
      card.alt = "Back side of a playing card";
      card.classList.remove("card__info--flipped", "oneOfTwo");
      return;
    }
  } else {
    // If card is not stored, assign a random one
    if (!randomCardsArray.length) return;
    const random = Math.floor(Math.random() * randomCardsArray.length);
    const selectedCard = randomCardsArray[random];

    card.src = selectedCard.cardUrl;
    card.alt = selectedCard.cardName;

    cardStorageArray.push({
      cardId: card.id,
      cardSource: card.src,
      cardAlt: card.alt,
    });

    randomCardsArray.splice(random, 1);
  }

  // Add class to track flipped state
  card.classList.add("card__info--flipped", "oneOfTwo");

  const currentCards = document.querySelectorAll(".oneOfTwo");

  if (currentCards.length === 2) {
    const [firstCard, secondCard] = currentCards;

    if (firstCard.alt === secondCard.alt) {
      // Matched cards logic
      setTimeout(() => {
        [firstCard, secondCard].forEach((card) => {
          card.style.opacity = "0.1";
          card.removeEventListener("click", toggleCard);
          card.classList.remove("oneOfTwo");
          card.classList.add("matched");
        });

        checkWinCondition();
      }, 500);
    } else {
      // Unmatched cards flip back
      setTimeout(() => {
        [firstCard, secondCard].forEach((card) => {
          card.src = backSrc;
          card.alt = "Back side of a playing card";
          card.classList.remove("card__info--flipped", "oneOfTwo");
        });
      }, 1000);
    }
  }
}
