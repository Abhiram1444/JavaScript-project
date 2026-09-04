// ===============================
// DOM SELECTION
// ===============================

const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const loadTasksButton = document.getElementById("loadTasks");
const message = document.getElementById("message");


// ===============================
// LOCAL STORAGE
// ===============================

// Get tasks from Local Storage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


// ===============================
// DISPLAY TASKS
// ===============================

function displayTasks() {

    // Clear existing list
    taskList.innerHTML = "";

    tasks.forEach((task) => {

        // Create element dynamically
        const li = document.createElement("li");

        li.innerHTML = `
            <span class="${task.completed ? "completed" : ""}">
                ${task.text}
            </span>

            <div>
                <button class="complete" data-id="${task.id}">
                    Complete
                </button>

                <button class="delete" data-id="${task.id}">
                    Delete
                </button>
            </div>
        `;

        // Add dynamically created element
        taskList.appendChild(li);
    });
}


// Display saved tasks when page loads
displayTasks();


// ===============================
// FORM HANDLING
// ===============================

taskForm.addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    // Create new task object
    const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    // Add task to array
    tasks.push(newTask);

    // Save to Local Storage
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Update DOM
    displayTasks();

    // Clear input
    taskInput.value = "";
});


// ===============================
// EVENT DELEGATION
// ===============================

taskList.addEventListener("click", function(event) {

    const id = Number(event.target.dataset.id);

    // Complete button
    if (event.target.classList.contains("complete")) {

        tasks = tasks.map(function(task) {

            if (task.id === id) {
                return {
                    ...task,
                    completed: !task.completed
                };
            }

            return task;
        });

        localStorage.setItem("tasks", JSON.stringify(tasks));

        displayTasks();
    }


    // Delete button
    if (event.target.classList.contains("delete")) {

        tasks = tasks.filter(function(task) {
            return task.id !== id;
        });

        localStorage.setItem("tasks", JSON.stringify(tasks));

        displayTasks();
    }

});


// ===============================
// API CALL
// ===============================

loadTasksButton.addEventListener("click", async function() {

    try {

        message.textContent = "Loading tasks...";

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos?_limit=5"
        );

        // Check HTTP response
        if (!response.ok) {
            throw new Error("Failed to fetch tasks");
        }

        const apiTasks = await response.json();

        // Add API tasks to our application
        apiTasks.forEach(function(apiTask) {

            tasks.push({
                id: Date.now() + apiTask.id,
                text: apiTask.title,
                completed: apiTask.completed
            });

        });

        // Save API tasks
        localStorage.setItem("tasks", JSON.stringify(tasks));

        // Update DOM
        displayTasks();

        message.textContent = "Tasks loaded successfully!";

    } catch (error) {

        message.textContent = "Error: " + error.message;

    }

});