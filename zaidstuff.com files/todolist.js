// This is a simple JavaScript code for a to-do list application.
// It allows users to add tasks, delete them, and clear all tasks.
// The tasks are stored in the local storage of the browser, so they persist even after refreshing the page.
// The code uses basic HTML elements and JavaScript functions to create the functionality.
    var taskId;
function addTask(taskNum){
    var inputVal = document.getElementById("taskInput").value;
    if (inputVal === "") {
        alert("Please enter a task.");
        return;
    }
    localStorage.setItem("task", inputVal);
    function taski(text, id){
        this.text = text;
        this.id = id;
        this.tasko = document.createElement("p");
        this.tasko.innerHTML = text;
        this.tasko.appendChild(document.createElement("button"));
        this.tasko.lastChild.innerHTML = "x";
        this.tasko.lastChild.setAttribute("onclick", "deleteTask()");
        this.tasko.setAttribute("id", id);
        document.getElementById("taskList").appendChild(this.tasko);
    }
    taskId = "task" + Math.floor(Math.random() * 1000);
    var newTask = new taski(inputVal, taskId);
    var taskList = document.getElementById("taskList").childElementCount;
    window.onload = function() {
        for (var i = 0; i < taskList; i++) {
            var task = localStorage.getItem("task" + i);
            if (task) {
                var taskId = "task" + i;
                var newTask = new taski(task, taskId);
                document.getElementById("taskList").appendChild(newTask.tasko);
            }
        }
    };
}
function deleteTask() {  
    localStorage.removeItem(taskId);
    document.getElementById(taskId).remove();
}
function clearTasks() {
    localStorage.clear();
    document.getElementById("taskList").innerHTML = "";
}
function toggleTheme() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var button = document.getElementById("themeButton");
    if (element.classList.contains("dark-mode")) {
        button.innerHTML = "Light Mode";
    } else {
        button.innerHTML = "Dark Mode";
    }
    element
}