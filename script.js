const $button = document.querySelector(".button");

$button.addEventListener("click", () => {
  let body = document.querySelector("body");
  body.classList.toggle("change");
});

const number = document.querySelector(".number");
const more = document.querySelector(".more");
const less = document.querySelector(".less");
let count = 0;

more.addEventListener("click", () => {
  count++;
  number.innerHTML = count;
});

less.addEventListener("click", () => {
  if (count > 0) {
    count--;
    number.innerHTML = count;
  }
});

const input = document.querySelector(".input[name = text]");
input.addEventListener("keydown", () => {
  let letter = document.querySelector(".lettercounter");
  letter.innerHTML = input.value.length;
});

const HTML = document.querySelector(".html");
const CSS = document.querySelector(".css");
const JS = document.querySelector(".js");

JS.addEventListener("click", () => {
  if (
    (JS.style.border = "none") &&
    (CSS.style.border = "none") &&
    (HTML.style.border = "none")
  ) {
    HTML.style.border = "1px solid orangered";
  } else {
    JS.style.border = "none";
    HTML.style.border = "none";
    CSS.style.border = "none";
  }
});

HTML.addEventListener("click", () => {
  if ((JS.style.border = "none")) {
    CSS.style.border = "1px solid blue";
  } else {
    JS.style.border = "none";
  }
});

CSS.addEventListener("click", () => {
  if ((HTML.style.border = "none")) {
    JS.style.border = "1px solid orange";
  } else {
    HTML.style.border = "none";
  }
});

//guess number

let mysteryNumber = Math.floor(Math.random() * 99);
let playerGuess = 0;
let $input = document.querySelector("#in");
let output = document.querySelector("#output");
var bouton = document.querySelector(".bouton");

bouton.addEventListener("click", () => {
  playerGuess = parseInt($input.value);

  if (playerGuess > mysteryNumber) {
    output.innerHTML = "c'est moins que" + " " + playerGuess;
  } else if (playerGuess < mysteryNumber) {
    output.innerHTML = "c'est plus que" + " " + playerGuess;
  } else {
    output.innerHTML = "tu as trouvé";
  }
});
