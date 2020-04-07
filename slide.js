const slide = document.querySelector(".slides");
const arrowleft = document.querySelector(".arrowLeft");
const arrowRight = document.querySelector(".arrowRight");

arrowRight.addEventListener("click", () => {
  slide.style.width = "400px";
});
