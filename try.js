let tasks = [];

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");


// Add Task
function addTask() {

    let taskText = taskInput.value.trim();

    // Validation
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    let task = {
        text: taskText,
        completed: false
    };

    tasks.push(task);

    taskInput.value = "";

    renderTasks();
}


// Display Tasks
function renderTasks() {

    taskList.innerHTML = "";

    tasks.forEach((task, index) => {

        let li = document.createElement("li");

        li.className = "task-item";

        li.innerHTML = `
            <span
                class="task-text ${task.completed ? "completed" : ""}"
            >
                ${task.text}
            </span>

            <button class="delete-btn">
                Delete
            </button>
        `;

        // Complete Task
        li.querySelector(".task-text").addEventListener("click", () => {

            tasks[index].completed = !tasks[index].completed;

            renderTasks();

        });


        // Delete Task
        li.querySelector(".delete-btn").addEventListener("click", () => {

            tasks.splice(index, 1);

            renderTasks();

        });


        taskList.appendChild(li);

    });


    taskCount.textContent = `Total Tasks: ${tasks.length}`;
}


// Button click
addBtn.addEventListener("click", addTask);


// Enter key
taskInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        addTask();
    }

});