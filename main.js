"use strict";

const sliderElem = document.querySelector(".hero-list");
const btnNextElem = document.querySelector(".next");
const btnPrevElem = document.querySelector(".prev");

AOS.init({
  duration: 1000,
});

new SimpleLightbox(".gallery a");

const mySiema = new Siema({
  selector: sliderElem,
  loop: true,
  duration: 1000,
  easing: "cubic-bezier(.17,.67,.32,1.34)",
});

btnNextElem.addEventListener("click", onSliderNext);
btnPrevElem.addEventListener("click", onSliderPrev);

function onSliderNext() {
  mySiema.next();
}

function onSliderPrev() {
  mySiema.prev();
}
