"use strict";
class Task {
    title;
    description;
    completed;
    _createdBy;
    constructor(title, description, createdBy) {
        this.title = title;
        this.description = description;
        this.completed = false;
        this._createdBy = createdBy;
    }
    get createdBy() {
        return `${this.createdBy}`;
    }
    toggleStatus() {
        this.completed = !this.completed;
    }
    getDetails() {
        const status = this.completed ? 'Completed' : "Pending";
        return `Task: ${this.title} - ${this.description} - ${status}`;
    }
    static createSampleTasks() {
        const resultTasks = [];
        resultTasks.push(new Task("Complete homework", "Finish math exercises", "Charlie"), new Task("Clean room", "Clean the room", "Mary"));
        return resultTasks;
    }
}
// const task1 = new Task("Complete homework", "Finish math exercises", "Charlie");
// task1.toggleStatus();
// console.log(task1.getDetails());
// const task2 = new Task("Clean room", "Clean the room", "Mary");
// console.log(task2.getDetails());
const tasks = Task.createSampleTasks();
tasks.forEach(task => console.log(task.getDetails()));
//# sourceMappingURL=simpleTask.js.map