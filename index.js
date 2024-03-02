const create_task = document.querySelector(".create_task");
const add_task = document.querySelector(".add_task");
const tasks_container = document.querySelector(".tasks-container");
let taskValue;

create_task.addEventListener("click", () => {
  // popup form
  const form = document.querySelector("form");
  form.style.display = "block";

  add_task.addEventListener("input", (e) => {
    taskValue = e.target.value;
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    tasks_container.innerHTML += `
    <div class="task"></div>
    `;
  });

  // form hidden
  const close_form = document.querySelector(".close_form");
  close_form.addEventListener("click", (e) => {
    e.preventDefault();
    form.style.display = "none";
  });
});
