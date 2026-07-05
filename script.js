'use strict';

// Buttons
const button = {
  beginAdding: document.querySelector('#start-to-add-some-shit'),
  closeModal: document.querySelector('#close-modal'),
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

button.closeModal.addEventListener('click', () => {
  element.modal.close();
});

button.addToDo.addEventListener('click', () => {});
