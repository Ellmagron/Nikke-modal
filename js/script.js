'use strict';
const title = document.querySelector('.title');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnChar = document.querySelectorAll('.btn');
const img = document.querySelector('.img');
const nikkeTable = document.querySelector('.nikke_container');

let charName = '';

//Declarando uma função de expressão para abrir  modal + overlay + um determinado personagem
const callChar = function (charName) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  img.src = `./img/char1/${charName}.gif`;
};

//Função para fechar o modal e overlay
const closeModal = function () {
  title.textContent = 'Nikke';
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
};

//Adicionando evento click em todos os botões
// btnChar.forEach(btn =>
//   btn.addEventListener('click', function () {
// charName = btn.dataset.char;
// title.textContent = charName;
// callChar(charName);
//   })
// );

//Usando delegação de evento, para adicionar evento click em todas as imagens
nikkeTable.addEventListener('click', function (e) {
  if (e.target.tagName === 'IMG') {
    charName = e.target.dataset.char; // Obetendo valor do atributo data da imagem clicada
    title.textContent = charName; //
    callChar(charName);
  }
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//Função para fechar modal e overlay através da tecla ESC
document.addEventListener('keydown', function (a) {
  if (a.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
