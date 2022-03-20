const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
let toDoArr = [];

const getTodos = localStorage.getItem(TODOS_KEY);

if(getTodos) {
    const parsedTodos = JSON.parse(getTodos);
    toDoArr = parsedTodos;
    parsedTodos.forEach(paintTodo);
}

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDoArr));
}

function deleteTodo(e) {
    const target = e.target.parentElement.parentElement;
    let node;
    if(target.id === "todo-list") {
        node = e.target.parentElement;
        node.remove();
        toDoArr = toDoArr.filter((toDo) => toDo.id !== parseInt(node.id));
    } else {
        target.remove();
        toDoArr = toDoArr.filter((toDo) => toDo.id !== parseInt(target.id));
    }

    saveTodos();
}

function paintTodo(newTodoObj) {
    const li = document.createElement("li");
    const check = document.createElement("input");
    const span = document.createElement("span");
    const btn = document.createElement("button");
    const img = document.createElement("img");

    li.id = newTodoObj.id;
    li.classList.add("todo-li");
    check.type = "checkbox";
    check.classList.add("todo-check");
    span.innerText = newTodoObj.text;
    img.classList.add("delete-btn");
    img.src = "img/delete.png";
    btn.addEventListener("click", deleteTodo);

    btn.appendChild(img);
    li.appendChild(check);
    li.appendChild(span);
    li.appendChild(btn);
    
    todoList.appendChild(li);
}

function handleTodoSubmit(e) {
    e.preventDefault();
    const newTodo = todoInput.value;
    const newTodoObj = {id: Date.now(), text: newTodo};
    todoInput.value = "";
    toDoArr.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);