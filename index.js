const create_task = document.querySelector(".create_task");
const add_task = document.querySelector(".add_task");
const tasks_container = document.querySelector(".tasks-container");
let taskValue;

add_task.addEventListener("input", (e) => {
  taskValue = e.target.value;
});

create_task.addEventListener("click", () => {
  // popup form
  const form = document.querySelector("form");
  form.style.display = "block";

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (taskValue.length > 0) {
      form.style.display = "none";
      tasks_container.innerHTML += `
      <div class="task">
        <p>${taskValue}</p>
        <p>${input_date.value.split("-").reverse().join(" ")}</p>
      </div>
    `;
      add_task.value = "";
      taskValue = "";
    } else {
      alert("Veuillez entrer une tâche valide !");
      tasks_container.innerHTML += "";
    }
  });

  // form hidden
  const close_form = document.querySelector(".close_form");
  close_form.addEventListener("click", (e) => {
    e.preventDefault();
    form.style.display = "none";
  });
});
