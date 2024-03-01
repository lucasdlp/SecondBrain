const create_task = document.querySelector(".create_task");
const add_task = document.querySelector(".add_task");
const form = document.querySelector("form");
const tasks_container = document.querySelector(".tasks-container");
let taskValue;

create_task.addEventListener("click", () => {
  document.body.innerHTML += `
    <form>
      <input
      type="text"
      autocomplete="off"
      placeholder="Ecrire une tâche"
      class="add_task"/>
      <input type="submit" value="Ajouter" />
    </form>
  `;
});
