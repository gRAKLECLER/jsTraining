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
