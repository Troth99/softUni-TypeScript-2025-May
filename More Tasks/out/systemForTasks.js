"use strict";
function assignTask(user, task) {
    if (task.assignedTo === undefined) {
        task.assignedTo = user;
        console.log(`User ${user.username} assigned to task ${task.title}`);
    }
    else {
        console.log(`Task ${task.title} is already assigned to ${task.assignedTo.username}`);
    }
}
let assign = {
    username: 'Ivan',
    joinedOn: new Date('2014-12-25')
};
let task = {
    title: 'Обработване на поръчка',
    status: 'New',
    assignedTo: undefined,
    markAsCompleted() {
        this.status = 'Completed';
    }
};
assignTask(assign, task);
assignTask(assign, task);
//# sourceMappingURL=systemForTasks.js.map