"use strict";
const title = document.querySelector(".title");
const manufact = document.querySelector(".manufact");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnOpenElysionChar = document.querySelector(".show-elysion-char");
const elysionModal = document.querySelector(".elysion-modal");
const btnCloseModal = document.querySelector(".close-modal");
const btnRapi = document.querySelector(".rapi");
const btnHelm = document.querySelector(".helm");
const btnBrid = document.querySelector(".brid");
const btnQuency = document.querySelector(".quency");
const btnSin = document.querySelector(".sin");
const btnCenti = document.querySelector(".centi");
const btnVolume = document.querySelector(".volume");
const btnLudmila = document.querySelector(".ludmila");
const btnYan = document.querySelector(".yan");

const img = document.querySelector(".img");

let char = "";

const callChar = function (title) {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  img.src = `./img/char1/${title.textContent}.png`;

};

const closeModal = function () {
  title.textContent = "Nikke"

  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};

btnRapi.addEventListener("click", function () {
  title.textContent = "Rapi";
  callChar(title);
});

btnHelm.addEventListener("click", function () {
  title.textContent = "Helm";
  callChar(title);
});

btnBrid.addEventListener("click", function () {
  title.textContent = "Brid";
  callChar(title);
});

btnQuency.addEventListener("click", function () {
  title.textContent = "Quency";
  callChar(title);
});

btnSin.addEventListener("click", function () {
  title.textContent = "Sin";
  callChar(title);
});

btnCenti.addEventListener("click", function () {
  title.textContent = "Centi";
  callChar(title);
});

btnYan.addEventListener("click", function () {
  title.textContent = "Yan";
  callChar(title);
});

btnLudmila.addEventListener("click", function () {
  title.textContent = "Ludmila";
  callChar(title);
});

btnVolume.addEventListener("click", function () {
  title.textContent = "Volume";
  callChar(title);
});

btnCloseModal.addEventListener("click", closeModal);
