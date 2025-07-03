document.addEventListener("DOMContentLoaded", () => {
      const taskInput = document.getElementById("taskInput");
      const addTaskBtn = document.getElementById("addTaskBtn");
      const taskList = document.getElementById("taskList");
    
      addTaskBtn.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
          addTask(taskText);
          taskInput.value = "";
          updateEmptyState();
        }
      });
      
      taskInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          addTaskBtn.click();
        }
      });
    
      function addTask(text) {
        // Remove empty message if it exists
        const emptyMessage = taskList.querySelector(".empty-message");
        if (emptyMessage) {
          taskList.removeChild(emptyMessage);
        }
        
        const li = document.createElement("li");
        
        const span = document.createElement("span");
        span.className = "task-text";
        span.textContent = text;
        
        const actions = document.createElement("div");
        actions.className = "task-actions";
        
        const completeBtn = document.createElement("button");
        completeBtn.className = "task-btn complete-btn";
        completeBtn.textContent = "Complete";
        completeBtn.addEventListener("click", () => {
          span.classList.toggle("completed");
          completeBtn.textContent = span.classList.contains("completed") 
            ? "Undo" 
            : "Complete";
        });
        
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "task-btn delete-btn";
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
          taskList.removeChild(li);
          updateEmptyState();
        });
        
        actions.appendChild(completeBtn);
        actions.appendChild(deleteBtn);
        li.appendChild(span);
        li.appendChild(actions);
        taskList.appendChild(li);
      }
      
      function updateEmptyState() {
        if (taskList.children.length === 0) {
          const emptyMessage = document.createElement("li");
          emptyMessage.className = "empty-message";
          emptyMessage.textContent = "No tasks yet. Add one above!";
          taskList.appendChild(emptyMessage);
        }
      }
    });
