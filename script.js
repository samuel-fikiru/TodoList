let todoLists = ["Prepare meal for me", 'Lunch with Zack'];


let todoHtml = '';

todoLists.forEach((todoName)=>{
    todoHtml += `
    <div class="task-item">
      <p class="task-name">
        ${todoName}
      </p>
      <div class="delete-icon-container">
        <img class="delete-icon" src="images/delete-icon.png" alt="">
      </div>
    </div>
    <hr>
    `;
})

document.querySelector(".js-task-list-container").innerHTML =todoHtml;