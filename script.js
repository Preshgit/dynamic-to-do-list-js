// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Load tasks from Local Storage when page loads
  function loadTasks() {
    // Retrieve tasks from Local Storage or use empty array
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");

    // Clear existing list to prevent duplicates
    taskList.innerHTML = "";

    // Add each stored task to the list
    storedTasks.forEach((taskText) => {
      createTaskElement(taskText);
    });
  }

  // Function to create a task element
  function createTaskElement(taskText) {
    // Create a new list item for the task
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    // Create a remove button for the task
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");

    // Add click event to remove button to delete the task
    removeButton.onclick = () => {
      // Remove the task from the DOM
      taskList.removeChild(listItem);

      // Remove the task from Local Storage
      removeTaskFromStorage(taskText);
    };

    // Append remove button to the list item
    listItem.appendChild(removeButton);

    // Add the list item to the task list
    taskList.appendChild(listItem);
  }

  // Function to add a new task
  function addTask() {
    // Trim and validate the task input
    const taskText = taskInput.value.trim();

    // Check if task input is not empty
    if (taskText === "") {
      // Prompt user to enter a task if input is empty
      alert("Please enter a task!");
      return;
    }

    // Create task element
    createTaskElement(taskText);

    // Save task to Local Storage
    saveTaskToStorage(taskText);

    // Clear the input field after adding the task
    taskInput.value = "";
  }

  // Function to save task to Local Storage
  function saveTaskToStorage(taskText) {
    // Retrieve existing tasks or initialize empty array
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");

    // Add new task to the array
    storedTasks.push(taskText);

    // Save updated tasks back to Local Storage
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
  }

  // Function to remove task from Local Storage
  function removeTaskFromStorage(taskText) {
    // Retrieve existing tasks
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");

    // Remove the specific task
    const updatedTasks = storedTasks.filter((task) => task !== taskText);

    // Save updated tasks back to Local Storage
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  // Add event listener to the add task button
  addButton.addEventListener("click", addTask);

  // Add event listener to input field to allow adding tasks with Enter key
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });

  // Load existing tasks when page loads
  loadTasks();
});

// // Wait for the DOM to fully load before running the script
// document.addEventListener("DOMContentLoaded", () => {
//   // Select DOM elements
//   const addButton = document.getElementById("add-task-btn");
//   const taskInput = document.getElementById("task-input");
//   const taskList = document.getElementById("task-list");

//   // Function to add a new task
//   function addTask() {
//     // Trim and validate the task input
//     const taskText = taskInput.value.trim();

//     // Check if task input is not empty
//     if (taskText === "") {
//       // Prompt user to enter a task if input is empty
//       alert("Please enter a task!");
//       return;
//     }

//     // Create a new list item for the task
//     const listItem = document.createElement("li");
//     listItem.textContent = taskText;

//     // Create a remove button for the task
//     const removeButton = document.createElement("button");
//     removeButton.textContent = "Remove";
//     removeButton.classList.add("remove-btn");

//     // Add click event to remove button to delete the task
//     removeButton.onclick = () => {
//       taskList.removeChild(listItem);
//     };

//     // Append remove button to the list item
//     listItem.appendChild(removeButton);

//     // Add the list item to the task list
//     taskList.appendChild(listItem);

//     // Clear the input field after adding the task
//     taskInput.value = "";
//   }

//   // Add event listener to the add task button
//   addButton.addEventListener("click", addTask);

//   // Add event listener to input field to allow adding tasks with Enter key
//   taskInput.addEventListener("keypress", (event) => {
//     if (event.key === "Enter") {
//       addTask();
//     }
//   });
// });
