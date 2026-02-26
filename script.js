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

const addButton = document.querySelector(".add-task-btn");

addButton.addEventListener("click", () => {
  const todoName = document.querySelector(".js-task-input");
  todoLists.push(todoName.value);
  renderHtml();
  todoName.value = "";
});

const inputField = document.querySelector(".js-task-input");

inputField.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    const todoName = document.querySelector(".js-task-input");
    todoLists.push(todoName.value);
    renderHtml();
    todoName.value = "";
  }
});


function handleDeleteBtn() {
  const deleteButton = document.querySelectorAll(".js-delete-icon-container");
  deleteButton.forEach((deletebtn) => {
    deletebtn.addEventListener("click", () => {
      const todoIndex = deletebtn.dataset["itemIndex"];
      
      throughEventListener();
      todoLists.splice(objectList[todoIndex], 1);
      console.log(objectList);
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
  todoHTMLfinal = "";
  objectList.forEach((code, index) => {
    todoHTMLfinal += objectList[index].index;
  });
  document.querySelector(".js-task-list-container").innerHTML = todoHTMLfinal;
  handleDeleteBtn();
  throughEventListener();
}




function throughEventListener() {
  let newList = [];

  const todoNameList = document.querySelectorAll(".js-todo-name");
 // console.log(todoNameList);
  todoNameList.forEach((name) => {
    name.addEventListener("click", () => {
      const clickedTodoName = name.innerText;
      newList = [];
      objectList.forEach((obj) => {
        const tempdiv = document.createElement("div");
        tempdiv.innerHTML = obj.index;
        const updateElement = tempdiv.querySelector(".task-name");

        if (
          tempdiv.querySelector(".task-name").innerText.trim() ===
          name.innerText
        ) {
          updateElement.classList.add("completed-todo");
        }

        const objformat = {
          index: tempdiv.innerHTML,
          name: name.innerText,
        };
        newList.push(objformat);
      });

      //console.log(newList);

      objectList = newList;
      todoHTMLfinal = "";
      displayHtml();
    });
  });
}
