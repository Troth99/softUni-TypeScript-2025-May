
interface Task {
    title: string;
    status: status;
    assignedTo?: assigned;
    markAsCompleted(): void
}


interface assigned {
   username: string;
     joinedOn: Date;
}

type status = 'New' | 'InProgress' | 'Completed'  


function assignTask(user: assigned, task: Task): void {
   if(task.assignedTo === undefined){
    task.assignedTo = user
    console.log(`User ${user.username} assigned to task ${task.title}`)
    
} else {
    console.log(`Task ${task.title} is already assigned to ${task.assignedTo.username}`);
  }

}

let assign: assigned = {
username: 'Ivan',
joinedOn: new Date('2014-12-25')
}

let task: Task = {
    title: 'Обработване на поръчка',
    status: 'New',
    assignedTo: undefined,
    markAsCompleted() {
        this.status = 'Completed'
    }
}

assignTask(assign, task)

assignTask(assign, task);