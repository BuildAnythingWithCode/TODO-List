'use strict';

// Thing To Do Array
const listOfShitToDo = [];

// Classes
// ThingToDo will use classes and composition, since there is no pre-made, default thing to do...
class ThingToDo {
  constructor(title, description, dueDate, priority, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
  }
}

// Folder will use inheritance and prototypes (from the Default folder), since there is already a "Default" folder by default...
class Folder {
  constructor(name) {
    this.name = name;
  }
}
