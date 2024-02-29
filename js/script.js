function toArray() {
  for (let i = 0; i < wordArr.length; i++) {
    hiddenWord[i] = "_";
  }
}

function letterComparison() {
  for (let j = 0; j < wordArr.length; j++) {
    if (wordArr[j] === answer) {
      hiddenWord[j] = answer;
      congrat = true;
    }
  }
  markLetter();
  answer = "";
}

function markLetter() {
  if (congrat) {
    event.target.classList.add("right");
  }
  if (congrat === false && answer.length === 1) {
    event.target.classList.add("wrong");
    attempts--;
  }
  congrat = false;
}

function handleClick(event) {
  answer = event.target.textContent;
  letterComparison();
  attemptsQuantity.textContent = attempts;
  title.textContent = hiddenWord.join(" ");
  thereAreAttemts();
}

function thereAreAttemts() {
  if (attempts === 0) {
    setTimeout(openModalUnsucces, 500);
  }

  if (hiddenWord.join("") === word) {
    setTimeout(openModalSucces, 800);
  }
}

function openModalSucces() {
  succes.classList.remove("is-hidden");
}

function openModalUnsucces() {
  unsucces.classList.remove("is-hidden");
}

function closeUnsucces() {
  unsucces.classList.add("is-hidden");
  location.reload();
}

function closeSucces() {
  succes.classList.add("is-hidden");
  location.reload();
}
const words = [
  "острів",
  "пальма",
  "пляж",
  "ведмідь",
  "літак",
  "анаконда",
  "восьминіг",
  "какаду",
  "автомобіль",
  "чашка",
  "диван",
  "астероїд",
  "мамонт",
  "шорти",
  "пенал",
  "водоспад",
  "кокос",
  "акваріум",
  "телевізор",
  "картина",
  "годинник",
  "хліб",
  "мотоикл",
  "динозавр",
  "ложка",
  "яблуко",
  "груша",
  "гардероб",
];
const word = words[Math.floor(Math.random() * words.length)];
let wordArr = word.split("");
let answer = "";
let attempts = 10;
let hiddenWord = [];
let congrat = false;
let ls = [];

const title = document.getElementById("word");
const attemptsQuantity = document.getElementById("attempts");
const list = document.querySelector(".buttons");
const btnCloseUnsucces = document.getElementById("unsuccesfully__button");
const unsucces = document.querySelector(".unsuccesfully");
const btnCloseSucces = document.getElementById("succes__button");
const succes = document.querySelector(".succes");
const mysteryWord = document.querySelector(".mystery-word");

list.addEventListener("click", handleClick);
btnCloseUnsucces.addEventListener("click", closeUnsucces);
btnCloseSucces.addEventListener("click", closeSucces);

toArray(wordArr);
attemptsQuantity.textContent = attempts;
title.textContent = hiddenWord.join(" ");
mysteryWord.textContent = word;
