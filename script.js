const task_text = document.getElementById("task-input");
const task_add_button = document.getElementById("task-add-button");
const task_clear_button = document.getElementById("task-clear-button");
const task_list = document.getElementById("task-list");

task_add_button.addEventListener("click", addTask);
task_clear_button.addEventListener("click", clearTasks);

function addTask() {
  const taskText = task_text.value.trim();
  console.log("test");
  if (taskText !== "") {
    const taskItem = document.createElement("li");
    taskItem.classList.add("list-group-item", "d-flex", "align-items-center");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("mr-2");

    checkbox.addEventListener("change", () => {
      taskItem.remove();
    });

    const textNode = document.createTextNode(taskText);

    taskItem.appendChild(checkbox);
    taskItem.appendChild(textNode);

    task_list.appendChild(taskItem);

    task_text.value = "";
  }
}

function clearTasks() {
  const myNode = task_list;
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
  console.log("trying to clear tasks");
}

task_text.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
