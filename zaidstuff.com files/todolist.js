localStorage.setItem("task", inputVal);
    const task = localStorage.getItem("task");
    var taskId = "task" + Math.floor(Math.random() * 1000);
function addTask(){
    var inputVal = document.getElementById("taskInput").value;
    if (inputVal === "") {
        alert("Please enter a task.");
        return;
    }
    function task(text, id){
        this.text = text;
        this.id = id;
        this.tasko = document.createElement("p");
        this.tasko.innerHTML = text;
        this.tasko.appendChild(document.createElement("button"));
        this.tasko.lastChild.innerHTML = "x";
        this.tasko.lastChild.setAttribute("onclick", "deleteTask()");
        this.tasko.setAttribute("id", id);
        this.tasko.appendParent(document.getElementById("taskList"));
    }
    var taskId = "task" + Math.floor(Math.random() * 1000);
    var newTask = new task(inputVal, taskId);
}
function deleteTask() {
    var taskId = this.getAttribute("id");
    localStorage.removeItem(taskId);
    document.getElementById(taskId).remove();
}
function clearAllTasks() {
    localStorage.clear();
    document.getElementById("taskList").innerHTML = "";
}