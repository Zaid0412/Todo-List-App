import './style.css';
import deleteIcon from './imgs/delete-icon.png'

import date from 'date-and-time';

import { Todo } from './Todo';

const todoInput = document.querySelector('.todo-input')
const todosDisplay = document.querySelector('.todos-display')
const taskCountDisplay = document.querySelector('.task-num')

let delBtns
const allBtn = document.querySelector('.allTasks-btn')
const activeBtn = document.querySelector('.activeTasks-btn')
const compBtn = document.querySelector('.compTasks-btn')
const btns = [allBtn, activeBtn, compBtn]

let allTodos = JSON.parse(localStorage.getItem("todoStorage"))
  ? JSON.parse(localStorage.getItem("todoStorage"))
  : [];

const findTodo = (id) => {
    const [todo] = allTodos.filter(todo => todo.id == id)
    return todo
}

const checkTodo = (todo) => {
    if (!todo.isChecked) {
        todo.isChecked = true
    }else if (todo.isChecked) {
        todo.isChecked = false
    }
}

const saveSolvesToStorage = () => {
    localStorage.setItem("todoStorage", JSON.stringify(allTodos)); // Saving allTodos to localStorage
}


const displayDate = () => {
    const now = new Date()
    const curDate = date.format(now, 'ddd MMM DD YYYY')
    
    const dateTxt = document.querySelector('.date')
    dateTxt.textContent = curDate
    return curDate
}

const displayTodos = (todos) => {
    if (todos.length !== 0) {
        todosDisplay.innerHTML = ''
        todosDisplay.classList.remove('isEmpty')
                
        for (const todo of todos) {
            const html = `
            <div class="checkbox-wrapper-11">
            <input id=${todo.id} type="checkbox" name="r" value="2" ${todo.isChecked ? 'checked' : ''}>
            <label for=${todo.id}>${todo.title}</label>
            <img class="icon" src=${deleteIcon}>
            </div>
            `
            todosDisplay.insertAdjacentHTML('beforeend', html)
            const cb = document.getElementById(todo.id)
            cb.addEventListener('click', () => {
                const clickedTodo = findTodo(todo.id)
                checkTodo(clickedTodo)
                saveSolvesToStorage()
            })
            
        }
        delBtns = document.querySelectorAll('.icon')
        for (const di of delBtns) {
            di.addEventListener('click', (e) => {
                const todoId = di.parentElement.children[0].getAttribute('id')
                deleteTodo(todoId)
                
            })
        }
    }else{
        todosDisplay.classList.add('isEmpty')
        todosDisplay.innerHTML = '<h2>No Tasks Found</h2>'
    }
}

const addTodo = (e) => {
    if(e.keyCode == 13){
        const todoTitle = todoInput.value 
        todoInput.value = '' // Clearing he input field

        if (todoTitle !== '') {   
            allTodos.push(new Todo(todoTitle)) // Making a new todo and pushing it to allTodos
            saveSolvesToStorage()
            displayTodos(allTodos)
            updateTaskCount()
        }
      }
}

const deleteTodo = (id) => {
    const filteredArray = allTodos.filter(todo => todo.id != id)
    console.log(filteredArray);
    allTodos = filteredArray
    saveSolvesToStorage()
    displayTodos(allTodos)
    updateTaskCount()
}

const updateTaskCount = () => {
    taskCountDisplay.textContent = `${allTodos.length} Tasks`
}

const filterCompletedTodos = () => {
    const checkedTodos = allTodos.filter(todo => todo.isChecked)
    return checkedTodos
}

const filterActiveTodos = () => {
    const uncheckedTodos = allTodos.filter(todo => !todo.isChecked)
    return uncheckedTodos
}

const activateBtn = (btn) => {
    for (const b of btns) {
        b.classList.remove('active')
    }
    btn.classList.add('active')
}

allBtn.addEventListener('click', () => {
    activateBtn(allBtn)
    displayTodos(allTodos)
})

activeBtn.addEventListener('click', () => {
    activateBtn(activeBtn)
    displayTodos(filterActiveTodos())
})

compBtn.addEventListener('click', () => {
    activateBtn(compBtn)
    displayTodos(filterCompletedTodos())
})

todoInput.onkeydown = addTodo

displayDate()
displayTodos(allTodos)
updateTaskCount()