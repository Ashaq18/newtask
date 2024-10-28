let taskList = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue) {
        taskList.push({ text: taskValue, completed: false });
        taskInput.value = '';
        renderTasks();
    }
}

function toggleTask(index) {
    taskList[index].completed = !taskList[index].completed;
    renderTasks();
}

function deleteTask(index) {
    taskList.splice(index, 1);
    renderTasks();
}

function renderTasks() {
    const taskListDiv = document.getElementById('taskList');
    taskListDiv.innerHTML = '';

    taskList.forEach((task, index) => {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';
        taskDiv.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}" onclick="toggleTask(${index})">
                ${task.text}
            </span>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskListDiv.appendChild(taskDiv);
        
    });
}
