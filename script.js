let todoLists = [
  { name: "Buy groceries", completed: false },
  { name: "Finish VS Code project", completed: false },
  { name: "Call Alice", completed: false },
];

// adding new task by add button and enter key
const addButton = document.querySelector(".add-task-btn");
const inputField = document.querySelector(".js-task-input");

addButton.addEventListener("click", () => {
  const taskName = document.querySelector(".js-task-input");
  todoLists.push({ name: taskName.value, completed: false });
  renderHtml();
  taskName.value = "";
});

// adding new task by enter key
inputField.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    todoLists.push({ name: inputField.value, completed: false });
    renderHtml();
    inputField.value = "";
  }
});

// Desplaying the task on the webpage
renderHtml();
function renderHtml() {
  let todoHtml = "";
  todoLists.forEach((todo, index) => {
    const completedTask = todo.completed ? "completed-todo" : "";
    todoHtml += `<div class="task-item">
        <p class="task-name js-todo-name ${completedTask}" data-task-index=${index}>
            ${todo.name}
        </p>
        <div class="delete-icon-container js-delete-icon-container" data-item-index="${index}">
            <img class="delete-icon" src="images/delete-icon.png" alt="">
        </div>
        </div>
        <hr>`;
  });
  document.querySelector(".js-task-list-container").innerHTML = todoHtml;
  handleDeleteBtn();
  markComplited();
}

// deletes element when delete icon clicked
function handleDeleteBtn() {
  const deleteButtons = document.querySelectorAll(".js-delete-icon-container");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const todoIndex = button.dataset["itemIndex"];
      todoLists.splice(Number(todoIndex), 1);
      renderHtml();
    });
  });
  starterText();
}

// placeholder text for empty todo lists
function starterText() {
  noTaskElement = document.querySelector(".js-task-list-container");
  if (noTaskElement.innerHTML === "") {
    noTaskElement.innerHTML = `<p class="initial-text">Add a Todo List</p>`;
  }
}

// mark/unmarks todos
function markComplited() {
  const Tasks = document.querySelectorAll(".js-todo-name");
  Tasks.forEach((task) => {
    task.addEventListener("click", () => {
      const index = task.dataset.taskIndex;

      todoLists[index].completed = todoLists[index].completed ? false : true;
      renderHtml();
    });
  });
}
