function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value.trim() === "") return;

  const li = document.createElement("li");
  li.textContent = taskInput.value;

  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  taskList.appendChild(li);
  taskInput.value = "";
}
