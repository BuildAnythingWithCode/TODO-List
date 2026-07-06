'use strict';

// Buttons
const button = {
  beginAdding: document.querySelector('#start-to-add-some-shit'),
  closeModalLazy: document.querySelector('#close-modal-lazy'),
  closeModalX: document.querySelector('#close-modal-x'),
  addToDo: document.querySelector('#add-to-do'),
};

// Elements
const element = {
  modal: document.querySelector('dialog'),
};

// Values & Logic
const listOfShitToDo = [];

// Functions

// Event Handlers
button.beginAdding.addEventListener('click', () => {
  element.modal.showModal();
});

button.closeModalLazy.addEventListener('click', () => {
  element.modal.close();
});

button.closeModalX.addEventListener('click', () => {
  element.modal.close();
});

button.addToDo.addEventListener('click', () => {});
