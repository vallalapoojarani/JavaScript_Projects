// 3rd Todo: Global todo list
const todoList = [
  { name: "HTML CSS", dueDate: "2022-12-22" },
  { name: "JavaScript", dueDate: "2022-12-22" },
];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-todo-button js-delete-todo-button">Delete</button> 
    `;
    todoListHTML += html;
  });

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;

  document
    .querySelectorAll(".js-delete-todo-button")
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener("click", () => {
        todoList.splice(index, 1);
        renderTodoList();
      });
    });
}

// 3rd Todo: Add with name and date
document.querySelector(".js-add-todo-button3").addEventListener("click", () => {
  addTodo3();
});

function addTodo3() {
  const inputElement = document.querySelector(".js-name-input3");
  const name = inputElement.value;

  const dateInputElement = document.querySelector(".js-due-date-input3");
  const dueDate = dateInputElement.value;

  if (name && dueDate) {
    todoList.push({ name, dueDate });
    inputElement.value = "";
    dateInputElement.value = "";
    renderTodoList();
  }
}
const todoList1 = [];
// 1st Todo: Console only
function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  todoList1.push(name);
  console.log(todoList1);
  inputElement.value = "";
}

// 2nd Todo: Show result on screen
function addTodo2() {
  const inputElement = document.querySelector(".js-name-input2");
  const name = inputElement.value;
  const result = document.querySelector(".js-p-result");

  if (name) {
    result.innerHTML += `<p>${name}</p>`;
    inputElement.value = "";
  }
}