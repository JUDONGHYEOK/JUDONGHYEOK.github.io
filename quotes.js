const title = document.querySelector("#title");

const QUOTES = [
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "All that glitters is not gold.",
  "Eighty percent of success is showing up.",
  "For those to whom much is given, much is required.",
  "Go ahead, make my day.",
  "I think therefore I am.",
  "Keep your friends close, but your enemies closer.",
  "Knowledge is power.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "No one can make you feel inferior without your consent.",
];

const numberOfQuotes = QUOTES.length;

function submitQuotes() {
  const randomNumber = Math.floor(Math.random() * numberOfQuotes);
  title.innerText = `${QUOTES[randomNumber]}`;
}

function init() {
  submitQuotes();
}

init();
