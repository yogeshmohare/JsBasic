let player={
    name:"Yogesh",
    chips:1200
}
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");
let playerE1=document.getElementById("player-el");
playerE1.textContent =`${player.name}: Rs ${player.chips}`

function getRandom() {
  let rNo = Math.floor(Math.random() * 13) + 1;
  if (rNo > 10) {
    return 10;
  } else if (rNo === 1) {
    return 11;
  } else {
    return rNo;
  }
}
function startGame() {
  isAlive = true;
  let firstcard = getRandom();
  let secondcard = getRandom();
  sum = firstcard + secondcard;
  cards.push(firstcard);
  cards.push(secondcard);

  renderGame();
}
function renderGame() {
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  if (sum < 21) {
    message = "Do you want to draw new card 🤔";
  } else if (sum == 21) {
    message = "Wohoo! you have got black jack 🐱‍🚀🐱‍🚀🐱‍🚀";
    hasBlackJack = true;
  } else {
    message = "Your of out of the game!😭";
    isAlive = false;
  }
  messageEl.textContent = message;
}
function newCard() {
  if(isAlive == true && hasBlackJack ==false) {
    let thirdCard = getRandom();
    sum += thirdCard;
    cards.push(thirdCard);
    renderGame();
  }
 
}
