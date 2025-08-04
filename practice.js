const main = document.getElementById("main")
const content = document.getElementById("content");
const todoForm = document.getElementById("todoForm")
const todoInput = document.getElementById("todoInput")
const todoSubmit = document.getElementById("todoSubmit")

const previousTodo = localStorage.getItem("todo")
const parsedTodo = JSON.parse(previousTodo)
let todoArray = parsedTodo ? parsedTodo : []
let isTodoUpdate = false
let updateTodoIndex;

renderTodosArray();

todoForm.addEventListener("submit", function (e) {

    e.preventDefault();
    if (isTodoUpdate) {
        updateTodo()
        renderTodosArray()
    } else {
        createTodo()
        renderTodosArray()
    }
});

function createTodo() {
    const todoObject = {
        title: todoInput.value,
        content: content.value,
        completed: false,
    }
    todoArray.unshift(todoObject)
    todoInput.value = ''
    content.value = ''
}
function renderTodosArray() {
    main.innerHTML = ''
    const arr = JSON.stringify(todoArray)
    localStorage.setItem("todo", arr)
    console.log(todoArray)
    todoArray.forEach(function (element, index) {
        createCard(element, index)
    })
}
function createCard(object, index) {
    const card = document.createElement("div")
    const title_checkbox_div = document.createElement("div")
    const title_h3 = document.createElement("h3");
    const input = document.createElement("input")
    const deleteBtn = document.createElement("button")
    const update_icon = document.createElement('i')
    const content_para = document.createElement("p")


    input.setAttribute("type", "checkbox")
    update_icon.setAttribute("class", "fa-solid fa-pen")
    title_checkbox_div.setAttribute("class", "card-title-checkbox")

    deleteBtn.textContent = "Delete"
    title_h3.textContent = object.title
    content_para.textContent = object.content

    deleteBtn.type = "button"

    deleteBtn.addEventListener("click", function (e) { deleteTodo(e, index) })
    // update_icon.addEventListener("click", function (e) { editTodo(e, index) })
    update_icon.onclick = function (e) { editTodo(e, index) }


    title_checkbox_div.append(title_h3, input, deleteBtn, update_icon)
    card.append(title_checkbox_div, content_para)
    main.appendChild(card)
}
function deleteTodo(e, index) {
    // console.log(index)
    todoArray.splice(index, 1)
    renderTodosArray()
    setTimeout(() => {
        alert("Your Todo is deleted");
    }, 500)
}
function editTodo(e, index) {
    // console.log(index);
    const x = todoArray[index]
    todoInput.value = x.title
    content.value = x.content
    todoSubmit.textContent = 'update'
    isTodoUpdate = true
    updateTodoIndex = index
}
function updateTodo() {
    let newTitle = todoInput.value
    let newContent = content.value
    console.log(newTitle)
    console.log(newContent)
    const { completed } = todoArray[updateTodoIndex]
    let obj = {
        title: newTitle,
        content: newContent,
        completed,
    }
    todoArray[updateTodoIndex] = obj
    todoInput.value = ''
    content.value = ''
    isTodoUpdate = false
    updateTodoIndex = null
    todoSubmit.textContent = 'add'
}



