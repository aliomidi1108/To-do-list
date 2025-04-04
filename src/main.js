const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const todoList = document.getElementById("todoList");

addButton.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    console.log("Input is empty!");
    return;
  }

  const li = document.createElement("li");
  li.className = "flex items-center justify-between p-2 bg-gray-50 rounded-lg";

  const textDiv = document.createElement("div");
  textDiv.className = "flex items-center space-x-2";

  const span = document.createElement("span");
  span.textContent = taskText;
  span.className = "text-gray-600 text-sm";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      span.classList.add("line-through", "text-gray-400");
    } else {
      span.classList.remove("line-through", "text-gray-400");
    }
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "×";
  deleteButton.className =
    "w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-gray-500 hover:bg-orange-500 hover:text-white transition-colors";
  deleteButton.addEventListener("click", () => li.remove());

  textDiv.appendChild(span);
  li.appendChild(deleteButton);
  li.appendChild(textDiv);

  li.appendChild(checkbox);

  todoList.appendChild(li);
  taskInput.value = "";
}
