"use strict";
const title = document.querySelector(".title");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnChar = document.querySelectorAll(".btn");
const img = document.querySelector(".img");

let charName = "";

//Declarando uma função de expressão que abri o modal + overlay + um determinado personagem
const callChar = function (charName) {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  img.src = `./img/char1/${charName}.gif`;
};

//Função para fechar o modal e overlay
const closeModal = function () {
  title.textContent = "Nikke";
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};

//Adicionando evento click em todos os botões
for (let i = 0; i < btnChar.length; i++) {
  btnChar[i].addEventListener("click", function () {
    charName = btnChar[i].dataset.char;
    title.textContent = charName;
    callChar(charName);
  });
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

//Função para fechar modal e overlay através da tecla ESC
document.addEventListener("keydown", function (a) {
  if (a.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});
