function generateId() {
    return 'task-' + Math.floor(Math.random() * 10000);
  }
  
  function addTask() {
    const input = document.getElementById("taskInput");
    const text = input.value.trim();
    if (!text) return;
  
    const task = { id: generateId(), text };
    const tasks = getTasks();
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  
    displayTask(task);
    input.value = "";
  }
  
  function deleteTask(id) {
    const tasks = getTasks().filter(task => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    document.getElementById(id).remove();
  }
  
  function clearTasks() {
    localStorage.removeItem("tasks");
    document.getElementById("taskList").innerHTML = "";
  }
  
  function displayTask(task) {
    const taskEl = document.createElement("p");
    taskEl.id = task.id;
    taskEl.innerHTML = `${task.text} <button onclick="deleteTask('${task.id}')">x</button>`;
    document.getElementById("taskList").appendChild(taskEl);
  }
  
  function getTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  }
  
  function loadTasks() {
    getTasks().forEach(displayTask);
  }
  
  function toggleTheme() {
    const body = document.body;
    const btn = document.getElementById("themeButton");
    body.classList.toggle("dark-mode");
    btn.innerText = body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
  }
  
  // Load tasks on page load
  window.onload = loadTasks;
  