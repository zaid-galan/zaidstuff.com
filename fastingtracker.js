function generateId() {
    return 'task-' + Math.floor(Math.random() * 10000);
  }
  function editTask(id) {
    const taskEl = document.getElementById(id);
    const text = taskEl.textContent.replace(" xEdit", "").trim();
    const input = document.getElementById("taskInput");
    input.value = text;
  
    // Remove the task from the list
    deleteTask(id);
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
    taskEl.innerHTML = `${task.text} <button class="taskBtn" onclick="deleteTask('${task.id}')">x</button><button class="taskBtn" onclick="editTask('${task.id}')">Edit</button>`;
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
    const isDarkMode = body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    btn.innerText = isDarkMode ? "Light Mode" : "Dark Mode";
}

function loadTheme() {
    const savedTheme = localStorage.getItem("theme");
    const body = document.body;
    const btn = document.getElementById("themeButton");
    if (savedTheme === "dark") {
        body.classList.add("dark-mode");
        btn.innerText = "Light Mode";
    } else {
        body.classList.remove("dark-mode");
        btn.innerText = "Dark Mode";
    }
}

// Load tasks and theme on page load
window.onload = function() {
    loadTasks();
    loadTheme();
};
  
