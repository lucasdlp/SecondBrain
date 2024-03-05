const create_task = document.querySelector(".create_task");
const add_task = document.querySelector(".add_task");
const title_task = document.querySelector(".title_task");
const tasks_container = document.querySelector(".tasks-container");
let taskValue;
let titleTask;

add_task.addEventListener("input", (e) => {
  taskValue = e.target.value;
});

title_task.addEventListener("input", (e) => {
  titleTask = e.target.value;
});

create_task.addEventListener("click", () => {
  // popup form
  const form = document.querySelector("form");
  form.style.display = "block";

  // create task
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (taskValue.length > 0) {
      form.style.display = "none";
      tasks_container.innerHTML += `
      <div class="task">
        <button class="task_menu"><img src="./assets/svg/task_menu.svg" 
        alt="menu de la tache" /></button>
        <p>${titleTask}</p>
        <p>${taskValue}</p>
        <p>${input_date.value.split("-").reverse().join("/")}</p>
      </div>
    `;
      add_task.value = "";
      taskValue = "";
      title_task.value = "";
      titleTask = "";
    }
  });

  // priority

  priority.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".task").classList.add("priority1");
  });

  // task menu

  // form hidden
  const close_form = document.querySelector(".close_form");
  close_form.addEventListener("click", (e) => {
    e.preventDefault();
    form.style.display = "none";
  });
});
