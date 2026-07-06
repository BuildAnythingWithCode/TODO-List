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
  form: document.querySelector('form'),
  shitToDoSection: document.querySelector(
    '#all-the-shit-you-have-to-do-section',
  ),
  defaultProject: document.querySelector('#default-project'),
  customProject: document.querySelector('#custom-project'),
  choiceOfProject: document.querySelectorAll("input[name='project']"),
};

element.choiceOfProject.forEach((radio) => {
  radio.addEventListener('change', () => {
    if (element.defaultProject.checked) {
      element.customProject.disabled = true;
      element.customProject.required = false;
    } else {
      element.customProject.disabled = false;
      element.customProject.required = true;
    }
  });
});

// Values & Logic
const listOfShitToDo = [];

// Constructor Function
function ThingToDo(title, description, dueDate, priority) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
}

// Regular Functions
function addThingToDo(title, description, dueDate, priority) {
  title = document.querySelector('#the-shit').value;
  description = document.querySelector('#the-details-of-the-shit').value;
  dueDate = document.querySelector('#due-date').value;
  priority = document.querySelector('input[name="importance"]:checked').value;
  const newThingToDo = new ThingToDo(title, description, dueDate, priority);
  listOfShitToDo.push(newThingToDo);
  const newEntry = document.createElement('p');
  newEntry.textContent = `Title: ${title}, Description: ${description}, Due Date: ${dueDate}, Priority: ${priority}`;
  element.shitToDoSection.appendChild(newEntry);
}

// Event Handlers
button.beginAdding.addEventListener('click', () => {
  element.modal.showModal();
});

button.closeModalLazy.addEventListener('click', () => {
  element.form.reset();
  element.modal.close();
});

button.closeModalX.addEventListener('click', () => {
  element.form.reset();
  element.modal.close();
});

element.form.addEventListener('submit', (event) => {
  event.preventDefault();
  addThingToDo();
  console.log('form submitted!', listOfShitToDo);
  element.form.reset();
  element.modal.close();
});
