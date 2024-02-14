const container = document.querySelector(".container");
const sections = document.querySelector("main");
const takeGiftButton = document.getElementById("take-gift-btn");

const giftItems = document.querySelectorAll(".clickable-gift");
let takenGiftCount = 0;

function screenAutoFit() {
  container.style.setProperty("--screen-size", window.innerHeight + "px");
}

document.addEventListener("DOMContentLoaded", () => {
  screenAutoFit();

  takeGiftButton.addEventListener("click", () => {
    sections.children[0].classList.add("hide");
    sections.children[1].classList.remove("hide");
  });

  giftItems.forEach((gift) => {
    gift.addEventListener("click", (e) => {
      e.currentTarget.classList.add("hidden");
      takenGiftCount++;

      if (takenGiftCount >= 4) {
        sections.children[0].classList.add("hide");
        sections.children[1].classList.add("hide");
        sections.children[2].classList.remove("hide");
      }
    });
  });
});

window.addEventListener("resize", () => {
  screenAutoFit();
});
