const todoList1 = [];
const todoList2 = [];
const todoList3 = [];

function addTodoConsole() {
    const inputElement = document.querySelector('.js-name-input-1');
    const name = inputElement.value;
    if(name === ''){
        alert('Todo name is required!')
        return
    }
    todoList1.push(name);
    console.log(todoList1);
    inputElement.value = '';
}

function addTodoPage() {
    const inputElement = document.querySelector('.js-name-input-');
    const name = inputElement.value;
    if(name === ''){
        alert('Todo name is required!')
        return
    }
    const totalCountDiv = document.querySelector('.js-todo-list-count')
    const div = document.querySelector('.js-todo-list-2');
    todoList2.push(name)
    totalCountDiv.innerHTML = `<p>Total todo --> ${todoList2.length}</p>`
    div.innerHTML += `<p>${name}</p>`
    inputElement.value = ''
}

function addTodoPage2() {
    const inputElement = document.querySelector('.js-name-input-3');
    const inputDateElement = document.querySelector('.js-date-input-3');
    const name = inputElement.value;
    const date = inputDateElement.value;
    if(name === '' || date === ''){
        alert('Todo name/data is required!')
        return
    }
    const totalCountDiv = document.querySelector('.js-todo-list-count-3')
    const div = document.querySelector('.js-todo-list-3');
    todoList3.push(name)
    totalCountDiv.innerHTML = `<p>Total todo --> ${todoList3.length}</p>`
        div.innerHTML +=
        `<p class="js-delete-row">
            ${name} - ${date}
            <button
                onclick="deleteMission();">Delete
            </button>
        </p>`
        inputElement.value = ''
        inputDateElement.value = ''
    }

function deleteMission() {
    const input = document.querySelector('.js-delete-row');
    input.innerHTML = ''
    todoList3.pop()
    const totalCountDiv = document.querySelector('.js-todo-list-count-3')
    totalCountDiv.innerHTML = `<p>Total todo --> ${todoList3.length}</p>`
}
