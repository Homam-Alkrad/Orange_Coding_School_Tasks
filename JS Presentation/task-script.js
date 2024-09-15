let tasks = [];

// Function to add a task to the end (using push)
function addTask() {
    const taskInput = document.getElementById('taskInput').value;
    if (taskInput.trim()) {
        tasks.push(taskInput);
        updateTaskList();
        document.getElementById('taskInput').value = ''; // Clear input
    }
}

// Function to add a task to the beginning (using unshift)
function addTaskToStart() {
    const taskInput = document.getElementById('taskInput').value;
    if (taskInput.trim()) {
        tasks.unshift(taskInput);
        updateTaskList();
        document.getElementById('taskInput').value = ''; // Clear input
    }
}

// Function to remove the last task (using pop)
function completeLastTask() {
    if (tasks.length > 0) {
        const completedTask = tasks.pop();
        alert(`Task completed: ${completedTask}`);
        updateTaskList();
    } else {
        alert('No tasks to complete.');
    }
}

// Function to remove the first task (using shift)
function completeFirstTask() {
    if (tasks.length > 0) {
        const completedTask = tasks.shift();
        alert(`Task completed: ${completedTask}`);
        updateTaskList();
    } else {
        alert('No tasks to complete.');
    }
}

// Function to remove a specific task (using delete)
function removeTask() {
    const taskToRemove = prompt("Enter the task to delete (exact text):");
    const index = tasks.indexOf(taskToRemove);
    if (index > -1) {
        delete tasks[index];  // Using delete operator
        tasks = tasks.filter(task => task !== undefined); // Filter out undefined values
        alert(`Task removed: ${taskToRemove}`);
        updateTaskList();
    } else {
        alert('Task not found.');
    }
}

// Function to update the task list in the DOM
function updateTaskList() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerText = `${index + 1}. ${task}`;
        taskList.appendChild(li);
    });
}

// Function to display tasks as a string (using join)
function showTaskList() {
    if (tasks.length > 0) {
        const taskString = tasks.join(', ');
        document.getElementById('taskDisplay').innerText = `Tasks: ${taskString}`;
    } else {
        document.getElementById('taskDisplay').innerText = 'No tasks available.';
    }
}
