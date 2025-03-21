let newTask = [];

let addTask = document.getElementById("add-task");
let taskBtn = document.getElementById("task-btn");
let ulEl = document.getElementById("ul-el");


let completedEl = document.createElement("ul");
completedEl.id = "completed-el";
document.body.appendChild(completedEl);

taskBtn.addEventListener("click", function () {
    if (addTask.value.trim() !== "") {

        newTask.push(addTask.value.trim());

        renderTasks();


        addTask.value = "";
    }
});

function renderTasks() {
    ulEl.innerHTML = "";

    for (let i = 0; i < newTask.length; i++) {
        
        let li = document.createElement("li");
        li.textContent = newTask[i];

        
        li.addEventListener("click", function () {
            moveToCompleted(newTask[i]);
            newTask.splice(i, 1); 
            renderTasks(); 
        });

        ulEl.appendChild(li);
    }
}


function moveToCompleted(task) {
    let completedTask = document.createElement("li");
    completedTask.textContent = task;
    completedTask.style.textDecoration = "line-through";
    completedEl.appendChild(completedTask);
}
