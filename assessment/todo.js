let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");
let taskCount = document.getElementById("taskCount");

let totalTasks = 0;

function addTask(){

    let taskText = taskInput.value.trim();

    if(taskText===""){
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.innerText = taskText;

    span.addEventListener("click",function(){

        span.classList.toggle("completed");

    });

    let deleteBtn = document.createElement("button");

    deleteBtn.innerText="Delete";

    deleteBtn.className="delete-btn";

    deleteBtn.onclick=function(){

        taskList.removeChild(li);

        totalTasks--;

        updateCount();

    };

    li.appendChild(span);

    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    totalTasks++;

    updateCount();

    taskInput.value="";
}

function updateCount(){

    taskCount.innerText=totalTasks;

}