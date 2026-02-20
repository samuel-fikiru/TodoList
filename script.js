let todoLists = [
  "Buy groceries",
  "Finish VS Code project",
  "Call Alice",
  "Read JavaScript tutorial",
  "Exercise for 30 minutes",
  "Plan weekend trip",
  "Pay bills",
  "Clean the room",
];
const todoNameList = document.querySelectorAll(".js-todo-name");
const addButton = document.querySelector(".add-task-btn");

addButton.addEventListener("click", () => {
  const todoName = document.querySelector(".js-task-input");
  todoLists.push(todoName.value);
  renderHtml();
  todoName.value = "";
});

function handleDeleteBtn() {
  const deleteButton = document.querySelectorAll(".js-delete-icon-container");
  deleteButton.forEach((deletebtn) => {
    deletebtn.addEventListener("click", () => {
      const todoIndex = deletebtn.dataset["itemIndex"];
      todoLists.splice(todoIndex, 1);
      renderHtml();
    });
  });
}

let objectList;
let todoHTMLfinal = "";
renderHtml();

function renderHtml() {
  let todoHtml = [];
  todoLists.forEach((todo, index) => {
    todoHtml.push({
      index: `<div class="task-item">
        <p class="task-name js-todo-name">
            ${todo}
        </p>
        <div class="delete-icon-container js-delete-icon-container" data-item-index="${index}">
            <img class="delete-icon" src="images/delete-icon.png" alt="">
        </div>
        </div>
        <hr>`,
      name: `${todo}`,
    });
  });

  objectList = todoHtml;
  displayHtml();
}

function displayHtml() {
  objectList.forEach((code, index) => {
    todoHTMLfinal += objectList[index].index;
  });
  document.querySelector(".js-task-list-container").innerHTML = todoHTMLfinal;
  handleDeleteBtn();
}

let newList = [];

todoNameList.forEach((name) => {
  name.addEventListener("click", () => {
    newList = [];
    objectList.forEach((obj) => {
      const tempdiv = document.createElement("div");
      tempdiv.innerHTML = obj.index;
      const updateElement = tempdiv.querySelector(".task-name");

      if (
        tempdiv.querySelector(".task-name").innerText.trim() === name.innerText
      ) {
        updateElement.classList.add("completed-todo");
      }

      const objformat = {
        index: tempdiv.innerHTML,
        name: name.innerText,
      };
      newList.push(objformat);
    });
    objectList = newList;
    todoHTMLfinal = "";
    displayHtml();

    console.log(newList);
  });
});
