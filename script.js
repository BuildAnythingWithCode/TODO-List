'use strict';

// Buttons
const button = {
  addToDo: document.querySelector('#add-some-shit'),
  closeModal: document.querySelector('#close-modal'),
};

// Elements
const element = {
  modal: document.querySelector('dialog'),
};

// Values & Logic
const listOfShitToDo = [];

// Functions

// Event Handlers
button.addToDo.addEventListener('click', () => {
  element.modal.showModal();
});

button.closeModal.addEventListener('click', () => {
  element.modal.close();
});
