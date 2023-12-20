const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

let todos = [];
const TODOS = "Todos"

function handleTodoSubmit(e){
    e.preventDefault();
    
    const newTodo = todoInput.value;
    todoInput.value = "";

    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    };

    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

function saveTodos(){
    localStorage.setItem(TODOS, JSON.stringify(todos));
}

function deleteTodo(e){
    const li = e.target.parentElement;
    li.remove();
    todos = todos.filter((t) => {t.id !== parseInt(li.id)});
    saveTodos();
}

function paintTodo(todo){
    const li = document.createElement("li");
    li.id = todo.id;
    const span = document.createElement("span");
    span.innerText = todo.text;

    const btn = document.createElement("button");
    btn.innerText = "X";
    btn.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(btn);
    todoList.appendChild(li);
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS);

if(savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}