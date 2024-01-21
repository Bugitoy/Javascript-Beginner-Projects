function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        const taskText = taskInput.value;

        // Create task element
        const taskElement = document.createElement("li");
        taskElement.classList.add("task");
        taskElement.innerHTML = `
            <span>${taskText}</span>
            <button onclick="removeTask(this)">Remove</button>
        `;

        // Append task element to the list
        taskList.appendChild(taskElement);

        // Clear the input field
        taskInput.value = "";
    }
}

function removeTask(button) {
    const taskElement = button.parentNode;
    const taskList = document.getElementById("taskList");

    // Remove the task element from the list
    taskList.removeChild(taskElement);
}