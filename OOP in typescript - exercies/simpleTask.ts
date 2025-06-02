class Task {
    title: string;
    description: string;
    completed: boolean;
    private _createdBy!: string;
    
    constructor(title: string, description: string, createdBy: string){
        this.title = title;
        this.description =description;
        this.completed = false;
        this._createdBy = createdBy
    }

    get createdBy(): string {
        return `${this.createdBy}`
    }

    toggleStatus(): void {
        this.completed = !this.completed
    }

    getDetails(): string {
        const status = this.completed ? 'Completed': "Pending"
        return `Task: ${this.title} - ${this.description} - ${status}`
    }

    static createSampleTasks(): Task[]{
        const resultTasks = []
        resultTasks.push(
            new Task("Complete homework", "Finish math exercises", "Charlie"), 
            new Task("Clean room", "Clean the room", "Mary"))

        return resultTasks
    }
}






// const task1 = new Task("Complete homework", "Finish math exercises", "Charlie");
// task1.toggleStatus();
// console.log(task1.getDetails());


// const task2 = new Task("Clean room", "Clean the room", "Mary");
// console.log(task2.getDetails());

const tasks = Task.createSampleTasks();
tasks.forEach(task => console.log(task.getDetails()));

