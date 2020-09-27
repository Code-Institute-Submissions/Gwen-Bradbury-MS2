let todoInput = document.querySelector('.todo-input');
let todoButton = document.querySelector('.todo-button');
let todoList = document.querySelector('.todo-list');

document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', removeLocation);

function addTodo(event) {

    event.preventDefault();

    let todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

let newTodo = document.createElement('li');
newTodo.innerText = todoInput.value;
newTodo.classList.add('todo-item');
todoDiv.appendChild(newTodo);

saveLocalTodos(todoInput.value)

let trashButton = document.createElement('button');
trashButton.innerHTML = '<i class="fas fa-trash"></i>';
trashButton.classList.add("trash-btn");
todoDiv.appendChild(trashButton);

todoList.appendChild(todoDiv);

todoInput.value = "";
}

function removeLocation(e) {
    let item = e.target;
    if(item.classList[0] === 'trash-btn') {
        let todo = item.parentElement;
        removeLocalTodos(todo);
        todo.remove();
    }
}

function saveLocalTodos(todo) {
    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo) {
         let todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

let newTodo = document.createElement('li');
newTodo.innerText = todo;
newTodo.classList.add('todo-item');
todoDiv.appendChild(newTodo);

let trashButton = document.createElement('button');
trashButton.innerHTML = '<i class="fas fa-trash"></i>';
trashButton.classList.add("trash-btn");
todoDiv.appendChild(trashButton);

todoList.appendChild(todoDiv);
    });
}

function removeLocalTodos(todo) {
    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    let todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}