// This is a simple JavaScript code for a to-do list application.
// It allows users to add tasks, delete them, and clear all tasks.
// The tasks are stored in the local storage of the browser, so they persist even after refreshing the page.
// The code uses basic HTML elements and JavaScript functions to create the functionality.
function generateId() {
    return 'task-' + Math.floor(Math.random() * 10000);
}
function addTask(taskNum){
    var inputVal = document.getElementById("taskInput").value;
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
    if (inputVal === "") {
        var tasklo = JSON.parse(localStorage.getItem("task")) || [];
        var localTask = new taski(String(tasklo), taskId);
    } else {
        var newTask = new taski(inputVal, taskId);
    }
    document.getElementById("taskInput").value = "";
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
}
window.onload = function() {
    var taskList = document.getElementById("taskList").childElementCount;
    addTask(taskList);
}