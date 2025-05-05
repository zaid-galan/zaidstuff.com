function addTask(){
    var inputVal = document.getElementById("taskInput").value;
    if (inputVal === "") {
        alert("Please enter a task.");
        return;
    }
    localStorage.setItem("task", inputVal);
    const task = localStorage.getItem("task");
    function task(text, id){
        this.text = text;
        this.id = id;
        this.task = document.createElement("p");
        this.task.innerHTML = text;
        this.task.setAttribute("id", id);
        this.task.appendParent(document.getElementById("taskList"));
    }
    var taskId = "task" + Math.floor(Math.random() * 1000);
    var newTask = new task(inputVal, taskId);
}