"use strict";

const closeCard = document.querySelector(".btn__open-close");
const closeCard2 = document.querySelector(".btn__open-close-2");
const closeCard3 = document.querySelector(".btn__open-close-3");
const card = document.querySelector(".card");
const card2 = document.querySelector(".card-2");
const card3 = document.querySelector(".card-3");

closeCard.addEventListener("click", function() {
    card.classList.toggle("card_active");
});

closeCard2.addEventListener("click", function() {
    card2.classList.toggle("card-2_active");
});

closeCard3.addEventListener("click", function() {
    card3.classList.toggle("card-3_active");
});