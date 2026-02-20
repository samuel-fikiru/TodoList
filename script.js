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
addButton.addEventListener('click', ()=>{
    const todoName = document.querySelector(".js-task-input");
    todoLists.push(todoName.value);
    renderHtml();
    todoName.value = '';
})

function handleDeleteBtn(){
    const deleteButton = document.querySelectorAll(".js-delete-icon-container");
    console.log(deleteButton);
    deleteButton.forEach((deletebtn) => {
    deletebtn.addEventListener("click", () => {
        console.log("clicked");
        const todoIndex = deletebtn.dataset["itemIndex"];
        todoLists.splice(todoIndex, 1);
        renderHtml();
    });
    });
}


renderHtml();
function renderHtml(){
    let todoHtml = "";
    todoLists.forEach((todo, index)=>{
        todoHtml += `
        <div class="task-item">
        <p class="task-name">
            ${todo}
        </p>
        <div class="delete-icon-container js-delete-icon-container" data-item-index="${index}">
            <img class="delete-icon" src="images/delete-icon.png" alt="">
        </div>
        </div>
        <hr>
        `;
    })

    document.querySelector(".js-task-list-container").innerHTML = todoHtml; 
    handleDeleteBtn();
}





