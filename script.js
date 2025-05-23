document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
  
    addTaskBtn.addEventListener("click", () => {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        addTask(taskText);
        taskInput.value = "";
      }
    });
  
    function addTask(text) {
      const li = document.createElement("li");
  
      const span = document.createElement("span");
      span.className = "task-text";
      span.textContent = text;
  
      const actions = document.createElement("div");
      actions.className = "task-actions";
  
      const completeBtn = document.createElement("button");
      completeBtn.innerHTML = "✅";
      completeBtn.title = "Mark as completed";
      completeBtn.addEventListener("click", () => {
        span.classList.toggle("completed");
      });
  
      const deleteBtn = document.createElement("button");
      deleteBtn.innerHTML = "🗑️";
      deleteBtn.title = "Delete task";
      deleteBtn.addEventListener("click", () => {
        taskList.removeChild(li);
      });
  
      actions.appendChild(completeBtn);
      actions.appendChild(deleteBtn);
  
      li.appendChild(span);
      li.appendChild(actions);
      taskList.appendChild(li);
    }
  });
  